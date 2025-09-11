/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
const carData = [
  { id: '1', carType: 'Sedan', mileage: 45_000, price: 15_000 },
  { id: '2', carType: 'SUV', mileage: 30_000, price: 20_000 },
  { id: '3', carType: 'EV', mileage: 15_000, price: 30_000 },
];
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const handlePress = (item: typeof carData[0]) => {
    console.log('Car tapped:', item);
    // Example: navigation.navigate('Details', { carId: item.id });
  };
    const renderItem = ({
      item,
    }: {
      item: typeof carData[0];
    }) => (
      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.2}
        onPress={() => handlePress(item)}
      >
        <Text style={styles.title}>{item.carType}</Text>
        <Text style={styles.subtitle}>
          Mileage: {item.mileage.toLocaleString()} km | Price: $
          {item.price.toLocaleString()}
        </Text>
      </TouchableOpacity>
    );
 return (
     <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
       <FlatList
         data={carData}
         keyExtractor={(item) => item.id}
         renderItem={renderItem}
         ItemSeparatorComponent={() => <View style={styles.separator} />}
         contentContainerStyle={styles.listContent}
       />
     </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  row: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#555',
  },
  separator: {
    height: 12,
  },
});
export default App;
