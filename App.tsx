import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CameraComponent from './src/components/CameraComponent';
import HomeComponent from './src/components/HomeComponent'

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeComponent} />
                <Stack.Screen name="Camera" component={CameraComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
