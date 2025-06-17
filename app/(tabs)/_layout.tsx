import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Import your icon library

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: true,
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Calgary',
                    tabBarIcon: ({ color, size }) => (
                        // Replace with your icon component, e.g. Ionicons
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="edmonton"
                options={{
                    title: 'Edmonton',
                    tabBarIcon: ({ color, size }) => (
                        // Replace with your icon component, e.g. Ionicons
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}