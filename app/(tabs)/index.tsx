import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { index } from '@/lib/api';
import CoffeeCard from '@/components/CoffeeCard';
import CoffeeOfTheDay from '@/components/CoffeeOfTheDay';
import SectionHeader from '@/components/SectionHeader';
import Greeting from "@/components/Greeting";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function IndexScreen() {
  const [coffees, setCoffees] = useState<any[]>([]);

  useEffect(() => {
    index('coffee')
        .then(setCoffees)
        .catch((err) => console.error('Error loading coffees:', err));
  }, []);

  const coffeeOfTheDay = coffees[0];

  return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" translucent backgroundColor="transparent" />

        <ScrollView contentContainerStyle={styles.container}>
          <Greeting />
          <Text style={styles.subtext}>Start your day with the perfect brew</Text>

          {coffeeOfTheDay && (
              <CoffeeOfTheDay
                  name={coffeeOfTheDay.name}
                  onPress={() => console.log('Go to recipe')}
              />
          )}

          <View style={styles.cardRow}>
            {coffees.slice(0, 4).map((coffee) => (
                <CoffeeCard key={coffee.id} name={coffee.name} />
            ))}
          </View>

          <SectionHeader
              title="Recommended Coffees"
              onPress={() => console.log('Go to all recommended')}
          />

          <View style={styles.recommendedRow}>
            <View style={styles.recommendationBox} />
            <View style={styles.recommendationBox} />
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#C4A484', // brown background for top
  },
  container: {
    padding: 20,
    backgroundColor: '#C4A484',
    color: '#fff'
  },
  greeting: {
    fontSize: 28,
    fontWeight: '600',
    color: '#fff',
  },
  subtext: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  recommendedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  recommendationBox: {
    width: '48%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
});
