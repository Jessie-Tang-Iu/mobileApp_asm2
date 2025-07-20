import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import Login from '../components/login';
import Welcome from '../components/welcome';
import SupabaseAuth from '../components/supabase_signin';

export default function App() {

    const  [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

    return (
        <View style={styles.container}>
            { isLoggedIn && <Welcome /> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#008CBA',
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        fontSize: 16,
        marginTop: 20,
    }
})
