import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import Login from '../components/login';
import Welcome from '../components/welcome';
import Navbar from '../components/navbar';

export default function App() {
    
    const router = useRouter();
    const  [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            { isLoggedIn ? <Welcome /> : <Login setIsLoggedIn={setIsLoggedIn} />}
            {
                isLoggedIn && (
                    <Pressable
                        style={styles.button}
                        onPress={ () => setIsLoggedIn(!isLoggedIn) }
                    >
                        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold"}}>
                            {isLoggedIn ? "Logout" : "Login"}
                        </Text>
                    </Pressable>
                )
            }
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
