import { Stack , Tabs} from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { constantStyles } from '../../components/constants';
import { View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import React from 'react';

export default function Layout() {
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