// DetailsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { HomeStackParamList } from './HomeStack';

type DetailsRouteProp = RouteProp<HomeStackParamList, 'Details'>;

export default function AnotherScreen() {
    const route = useRoute<DetailsRouteProp>();
    const { carId } = route.params;

    return (
        <View style={styles.center}>
            <Text style={styles.title}>Details for car #{carId}</Text>
            {/* Render more info here */}
        </View>
    );
}

const styles = StyleSheet.create({
    center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    title: { fontSize: 20, fontWeight: '600' },
});