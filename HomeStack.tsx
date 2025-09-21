
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AnotherScreen from "./AnotherScreen.tsx";

export type HomeStackParamList = {
    Home: undefined;
    Details: { carId: string };
    Another: { carId: string };
};

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Cars' }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ title: 'Car details' }}
            />
            <Stack.Screen
                name="Another"
                component={AnotherScreen}
                options={{ title: 'Some details' }}
            />
        </Stack.Navigator>
    );
}