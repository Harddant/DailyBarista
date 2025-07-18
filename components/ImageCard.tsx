import {View, StyleSheet, Image, Text, Alert} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState }  from "react";

export default function ImageCard ({

name,
image,
description

} : {

name: string;
image?: string;
description?: string

}) {
  const [liked, setLiked] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleRemove = () => {
      Alert.alert(
          'Removed',
          `We won't show you "${name}" anymore.`,
          [{ text: 'Ok', onPress: () => setHidden(true) }],
          { cancelable: true }
      );
  };

    if (hidden) return null;

    return (
        <View style={styles.recommendationBox}>
            <View style={styles.contents}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <View style={styles.placeholder} />
                )}
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>

                <View style={styles.icons}>
                    <Ionicons
                        name={liked ? "heart" : "heart-outline"}
                        size={25}
                        color={liked ? "red" : "black"}
                        onPress={() => setLiked(!liked)}
                    />
                    <Ionicons
                        name="remove-outline"
                        size={25}
                        onPress={handleRemove}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    recommendationBox: {
        minHeight: 275,
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginVertical: 12,
        alignItems: 'center',
        padding: 16,
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowRadius: 12,
    },
    contents: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 40,
    },
    image: {
        width: 180,
        height: 160,
        borderRadius: 12,
    },
    placeholder: {
        width: 180,
        height: 160,
        backgroundColor: '#ddd',
        borderRadius: 12,
    },
    name: {
        marginTop: 5,
        fontSize: 12,
        textAlign: 'left',
        marginBottom: 4,
        color: '#040106',
    },
    description: {
        fontSize: 12,
        textAlign: 'left',
        color: '#040106',
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 28,
        marginTop: 12,
    },
});