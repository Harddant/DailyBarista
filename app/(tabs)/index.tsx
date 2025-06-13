import {Animated, ScrollView, StyleSheet} from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import { getCoffees } from '@/lib/api';


export default function IndexScreen() {
  const [coffees, setCoffees] = useState<any[]>([]);

  useEffect(() => {
    getCoffees()
        .then(setCoffees)
        .catch((err) => console.error('Error loading coffees:', err));
  }, []);

  return (

    <View style={styles.container}>
      <ScrollView>
        {coffees.map((coffee) => (
            <Text key={coffee.id} style={{ fontSize: 18, padding: 8 }}>
              ☕ {coffee.name}
            </Text>
        ))}
      </ScrollView>
      <Text style={styles.title}>Daily Barista</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
