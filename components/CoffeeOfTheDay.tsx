import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function CoffeeOfTheDay({ name, onPress, image }: { name: string; image?: string; onPress?: () => void }) {

    return (
        <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={styles.title}>Coffee of the day</Text>
                    <Text style={styles.name}>{name}</Text>
                </View>
                {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <View style={styles.placeholder} />
                )}
            </View>

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
