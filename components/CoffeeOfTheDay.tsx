import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CoffeeOfTheDay({ name, onPress }: { name: string; onPress?: () => void }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Coffee of the day</Text>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>See Recipe!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 8,
    },
    button: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
    },
});
