import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import Navbar from "./navbar";
import { useEffect } from "react";
import { useRouter } from "expo-router";



export default function Welcome() {
    const router = useRouter();
    useEffect(()=>router.push("/tab"),[])
    return(
        <View>
            <Text>Welcome to My New App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    }
})