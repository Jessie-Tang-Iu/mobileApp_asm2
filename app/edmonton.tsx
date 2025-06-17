import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CityDetails from '../components/cityDetails';

export default function EdmontonScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Edmonton</Text>
            <CityDetails
                city={{
                    name: "Edmonton",
                    image: "https://www.dangerous-business.com/wp-content/uploads/2019/09/DSC08121-768x512.jpg",
                    facts: [
                        "Edmonton is the capital city of Alberta, Canada.",
                        "It is known for its large number of festivals, earning it the nickname 'Festival City'.",
                        "The city is home to the West Edmonton Mall, one of the largest shopping malls in North America.",
                        "Edmonton has a vibrant arts scene, with numerous galleries, theaters, and museums.",
                        "The city is located on the North Saskatchewan River and has a rich Indigenous history.",
                    ],
                    url: "https://www.edmonton.ca/",
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
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