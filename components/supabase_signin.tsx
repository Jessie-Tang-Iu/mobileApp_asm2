import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { signIn, signUp } from "../lib/supabase_auth";
import { useRouter } from "expo-router";
import { addUser } from "../lib/supabase_crud";
import { User } from "../lib/object_types";

const SupabaseAuth = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignIn, setIsSignIn] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    // const [session, setSession] = useState<any>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const router = useRouter();
    const mainUser: User = {
        first_name: 'Lam',
        last_name: 'Dao',
        email: 'lam.dao@edu.sait.ca',
    };

    const registerUser = async () => {
        if (!firstName || !lastName || !email || !password) {
            setError("All fields are required");
            return;
        }
        console.log("Registering user:", mainUser);
        setLoading(true);
        setError(null);
        let newUser = {
            first_name: firstName,
            last_name: lastName,
            email: email,
        };
        try {
            await signUp(email, password);
            
            setIsAuthenticated(true);
            await addUser(mainUser);
        
        } catch (err: any) {
            setError(err instanceof Error ? err.message : "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    const handleAuth = async () => {
        if (!email || !password) {
            setError("Email and password are required");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            if (isSignIn) {
                await signIn(email, password);
                setIsAuthenticated(true);
                router.push('/'); // Redirect to home on successful sign in
            } else {
                await registerUser();
                // If registration is successful, sign in the user
                setIsSignIn(true);
                
            }
        } catch (err: any) {
            setError(err instanceof Error ? err.message : "Authentication failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{isSignIn? 'Sign In' : 'Sign Up'}</Text>
            {error && <Text style={styles.errorText}>{error}</Text>}
            {!isSignIn && (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                        value={lastName}
                        onChangeText={setLastName}
                    />
                </>
            )}
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleAuth}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>
                        {isSignIn ? 'Sign In' : 'Sign Up'}
                    </Text>
                )}
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => setIsSignIn(!isSignIn)}
                style={styles.switchModeButton}
            >
                <Text style={styles.switchModeText}>
                    {isSignIn 
                        ? "Don't have an account? Sign Up" 
                        : 'Already have an account? Sign In'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    errorText: {
        color: 'red',
        marginBottom: 12,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
        minWidth: 300,
        maxWidth: 400,
    },
    button: {
        backgroundColor: '#0284c7',
        height: 50,
        justifyContent: 'center',
        padding: 12,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        minWidth: 300,
        maxWidth: 400,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    switchModeButton: {
        marginTop: 15,
        padding: 10,
        alignItems: 'center',
    },
    switchModeText: {
        color: '#0284c7',
        fontSize: 14,
    },
});

export default SupabaseAuth;