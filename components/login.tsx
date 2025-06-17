import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import credentials from "../lib/credentials.json";


interface LoginProps {
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) =>{

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    // useEffect(() => {
    //     if(username.length > 10) {
    //         console.log("Username is in valid: ", username);
    //     }
    // }, [username]);

    const checkCredentials = () => {
        if (credentials) {
            const user = credentials.find(
                (cred) => cred.username === username.trim() && cred.password === password.trim()
            );

            // const userExists = credentials.some(
            //     (cred) => cred.username === username && cred.password === password
            // );

            if (user) {
                console.log("Welcome: ", user.username);
                setIsLoggedIn(true);
            } else {
                setErrorMessage("Invalid username and password");
                console.log(errorMessage);
            }
        }
    }

    const handleLogin = () => {
        if(username.length < 5) {
            setErrorMessage("Username must be at least 5 characters long.");
            console.log(errorMessage);
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!passwordRegex.test(password)) {
            setErrorMessage("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
            console.log(errorMessage);
            return;
        }
        else {
            checkCredentials();
        }

        setUsername("");
        setPassword("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to login screen</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
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
    text: {
        fontSize: 16,
        color: "#333",
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        margin: 10,
        paddingHorizontal: 10,
        width: "100%",
        borderRadius: 5,
        minWidth: 100,
        maxWidth: 200,
    },
    errorMessage: {
        fontSize: 16,
        color: "red",
    },
    button: {
        backgroundColor: '#008CBA',
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        fontSize: 16,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 16,
        color: "white",
    }
})

export default Login;