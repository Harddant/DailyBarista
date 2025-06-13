import { View, Text, StyleSheet, Image } from 'react-native';

export default function CoffeeCard({name, image}: {name: string; image?: string}) {
    return (
        <View style={styles.card}>
            {image ? (
                <Image source={{ uri: image }} style={styles.image} />
            ) : (
                <View style={styles.placeholder} />
            )}
            <Text style={styles.name}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 70,
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 12,
    },
    placeholder: {
        width: 60,
        height: 60,
        backgroundColor: '#ddd',
        borderRadius: 12,
    },
    name: {
        marginTop: 5,
        fontSize: 12,
        textAlign: 'center',
    },
});