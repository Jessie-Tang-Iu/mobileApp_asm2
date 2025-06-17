import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CityDetails from '../components/cityDetails';

export default function CalgaryScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Calgary</Text>
            <CityDetails
                city={{
                    name: "Calgary",
                    image: "https://tnphotos.s3.ca-central-1.amazonaws.com/uploads/2023/12/Calgary-Skyline-at-Dusk-768x436.jpg",
                    facts: [
                        "Calgary hosted the 1988 Winter Olympics.",
                        "The Calgary Stampede is one of the world's largest rodeos.",
                        "Calgary is known as 'Cowtown' due to its ranching history.",
                        "It has the most sunny days of any major Canadian city.",
                        "The city is home to the Calgary Tower, which offers panoramic views of the city and the Rocky Mountains.",
                    ],
                    url: "https://www.calgary.ca/home.html",
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});