import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { index } from '@/lib/api';
import CoffeeCard from '@/components/CoffeeCard';
import CoffeeOfTheDay from '@/components/CoffeeOfTheDay';
import SectionHeader from '@/components/SectionHeader';
import Greeting from "@/components/Greeting";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from "@/components/Carousel";

export default function IndexScreen() {
  const [coffees, setCoffees] = useState<any[]>([]);

  useEffect(() => {
    index('coffee')
        .then(setCoffees)
        .catch((err) => console.error('Error loading coffees:', err));
  }, []);

  const coffeeOfTheDay = coffees[0];
  const recommendedCoffeesList = coffees.slice(coffees.length - 4);
  const recommendedCoffees = recommendedCoffeesList.concat(recommendedCoffeesList);
  return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" translucent backgroundColor="transparent" />

        <ScrollView contentContainerStyle={styles.container}>
          <Greeting />
          <Text style={styles.subtext}>Start your day with the perfect brew</Text>

          {coffeeOfTheDay && (
              <CoffeeOfTheDay
                  name={coffeeOfTheDay.name}
                  image={coffeeOfTheDay.imageUrl}
                  onPress={() => console.log('Go to recipe')}
              />
          )}

          {/*{coffees && (*/}
          {/*  <View style={styles.cardRow}>*/}
          {/*    {coffees.slice(0, 4).map((coffee) => (*/}
          {/*        <CoffeeCard key={'coffee'+ coffee.id} name={coffee.name} image={coffee.imageUrl} />*/}
          {/*    ))}*/}
          {/*  </View>*/}
          {/*)}*/}

          <SectionHeader
              title="Recommended Coffees"
              onPress={() => console.log('Go to all recommended')}
          />

          {recommendedCoffees && (
              <Carousel recommendedCoffees={recommendedCoffees} />
          )}
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fffbea',
  },
  container: {
    padding: 20,
    paddingVertical: 20,
    backgroundColor: '#fffbea',
    color: '#040106'
  },
  greeting: {
    fontSize: 28,
    fontWeight: '600',
    color: '#040106',
  },
  subtext: {
    fontSize: 14,
    color: '#040106',
    marginTop: 4,
    marginBottom: 16,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 16,
  },
});
