import { Link } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";

interface CityDetailsProps {
    city?: {
        name: string;
        image: string;
        facts: string[];
        url?: string;
    };
}

const CityDetails: React.FC<CityDetailsProps> = ({ city }) => {
    const defaultCity = {
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
    };

    const displayCity = city || defaultCity;

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{displayCity.name}</Text>
            <Image
                source={{ uri: displayCity.image }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.factsContainer}>
                <Text style={styles.factsTitle}>Interesting Facts:</Text>
                {displayCity.facts.map((fact, index) => (
                    <View key={index} style={styles.factsItem}>
                        <Text style={styles.bulletPoint}>•</Text>
                        <Text style={styles.factsText}>{fact}</Text>
                    </View>
                ))}
            </View>
            <Link style={styles.factsUrl} href={displayCity.url || "#"}>
                Go to {displayCity.name} City Page
            </Link>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginBottom: 16,
    },
    factsContainer: {
        backgroundColor: "#f5f5f5",
        borderRadius: 8,
        marginBottom: 20,
    },
    factsTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    factsUrl: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#007BFF",
        textDecorationLine: "underline",
        marginBottom: 8,
    },
    factsItem: {
        flexDirection: "row",
        marginBottom: 8,
    },
    bulletPoint: {
        fontSize: 16,
        marginRight: 8,
    },
    factsText: {
        fontSize: 16,
        flex: 1,
    },
});

export default CityDetails;