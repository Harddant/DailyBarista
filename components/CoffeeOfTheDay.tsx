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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 30,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20,
        shadowColor: '#000000',
        shadowOpacity: 0.2, shadowRadius: 20,
    },
    title: {
        flexDirection: 'row',
        fontSize: 16,
        marginBottom: 12,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 8,
        flex: 1,
        justifyContent: "flex-start"
    },

    image: {
        width: 120,
        height: 120,
        borderRadius: 12,
        marginLeft: 22,
    },

    placeholder: {
        width: 60,
        height: 60,
        backgroundColor: '#ddd',
        borderRadius: 12,
    },
});
