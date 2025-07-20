import React, { use, useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { User } from '../lib/object_types';
import { getAllUsers, updateUser, deleteUser } from '../lib/supabase_crud';
import { signOut, getSession } from '../lib/supabase_auth';
import { useRouter } from 'expo-router';

export default function Welcome() {

    const [loading, setLoading] = useState<boolean>(false);
    const [profiles, setProfiles] = useState<User[]>([]);
    const [email, setEmail] = useState<string>('');

    const router = useRouter();

    const fetchAllUsers = async () => {
        try {
            setLoading(true);
            const data = await getAllUsers();
            setProfiles(data);
        } catch (error) {
            console.error('Error fetching all users: ', error);
            Alert.alert('Error ', 'Failed to load all users data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllUsers();
        getCurrentSession();
    }, []);

    const getCurrentSession = async () => {
        try {
            const session = await getSession();
            setEmail(session?.user?.email || '');
            if (!session) { 
                Alert.alert("Session expired", "Please sign in again.")
                router.push('/sign_in');
            }
        } catch (error) {
            console.error("Error fetching session:", error);
            Alert.alert("Error", "Failed to fetch session. Please sign in again.")
        }
    }

    const handleSignOut = async () => {
        try {
            await signOut();
            router.push('/sign_in');
        } catch (error) {
            console.error('Error signing out: ', error);
            Alert.alert('Error', 'Failed to sign out');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSignOut} style={{marginBottom: 20}}>
                <Text style={{color: 'blue', textAlign: 'right'}}>Sign Out</Text>
            </TouchableOpacity>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                profiles
                .filter(item => item.email === email)
                .map(item => (
                    <Text key={item.profile_id} style={styles.header}>
                        Welcome, {item.first_name} {item.last_name}!
                    </Text>
                )))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        backgroundColor: '#f5f5f5',
        width: "100%",
    },
    header: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 16,
        textAlign: 'center',
    },
    form: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        elevation: 2,
    },
    formTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    input: { 
        borderWidth: 1, 
        borderColor: '#ddd', 
        padding: 8, 
        marginBottom: 12, 
        borderRadius: 4 
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    listContainer: {
        flex: 1
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    listTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemContainer: { 
        marginBottom: 8, 
        padding: 12, 
        backgroundColor: 'white', 
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 1,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    itemActions: { 
        flexDirection: 'row', 
        alignItems: 'center',
        paddingLeft: 8,
        gap: 8,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontStyle: 'italic',
    }
});