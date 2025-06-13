import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { getCoffees } from '@/lib/api';
import CoffeeCard from '@/components/CoffeeCard';
import CoffeeOfTheDay from '@/components/CoffeeOfTheDay';
import SectionHeader from '@/components/SectionHeader';

export default function IndexScreen() {
  const [coffees, setCoffees] = useState<any[]>([]);

  useEffect(() => {
    getCoffees()
        .then(setCoffees)
        .catch((err) => console.error('Error loading coffees:', err));
  }, []);

  const coffeeOfTheDay = coffees[0];

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.greeting}>Good Morning</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#C4A484',
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
