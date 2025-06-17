import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";



export default function Welcome() {
    return(
        <View>
            <Text>Welcome</Text>
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