import {View, StyleSheet, Image, Text} from "react-native";

export default function ImageCard ({name, image} : {name: string; image?: string;}) {
    return (
            <View style={styles.recommendationBox} >
                {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <View style={styles.placeholder} />
                )}
                <Text style={styles.name}>{name}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    recommendationBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 20,
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
    }

});