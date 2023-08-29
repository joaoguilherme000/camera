import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CameraComponent from './src/components/CameraComponent';
import HomeComponent from './src/components/HomeComponent'

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeComponent} />
            <Tab.Screen name="Settings" component={CameraComponent} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <MyTabs />
    );
};
