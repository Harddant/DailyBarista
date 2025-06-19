import {Image, StyleSheet} from 'react-native';
import { Text, View } from '@/components/Themed';
import TextCard from "@/components/TextCard";
import {useEffect, useState} from "react";
import {index} from "@/lib/api";

export default function RecommendedScreen() {
  const [coffeeTypes, setCoffeeTypes] = useState<any[]>([]);

  useEffect(() => {
    index('coffeetype')
        .then(setCoffeeTypes)
        .catch((err) => console.error('Error loading coffee types:', err));
  }, []);

  return (
    <View style={styles.container}>
      <TextCard description={"Recommended"} customStyles={{width: '80%', height: 20, }} />

      <View style={styles.typeBox}>
        {coffeeTypes.slice(0, 2).map((type) =>(
          <TextCard key={'type' + type.id} description={type.name} customStyles={{width: '40%', height: 40, marginTop: 10,}} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  typeBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginEnd: 38,
  }
});
