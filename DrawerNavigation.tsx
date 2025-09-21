import React from 'react';
import HomeStack from './HomeStack';
import {createNativeStackNavigator} from "@react-navigation/native-stack/src";


const Drawer = createNativeStackNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Drawer.Screen name="Home" component={HomeStack} />
        </Drawer.Navigator>
    );
}