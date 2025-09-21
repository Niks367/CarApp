import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { HomeStackParamList } from './HomeStack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DetailsRouteProp = RouteProp<HomeStackParamList, 'Details'>;
type DetailsNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Details'>;

export default function DetailsScreen() {
    const route = useRoute<DetailsRouteProp>();
    const navigation = useNavigation<DetailsNavigationProp>();
    const { carId } = route.params;

    return (
        <View style={styles.center}>
            <Text style={styles.title}>Details for car #{carId}</Text>

            {/* Simple button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() =>  navigation.navigate('Another', { carId: carId })}
            >
                <Text style={styles.buttonText}>Press Me</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    title: { fontSize: 20, fontWeight: '600', marginBottom: 20 },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
