import {View, StyleSheet, Text, DimensionValue, ViewStyle} from "react-native";

interface TextCardProps {
    description: string;
    customStyles: ViewStyle;
}

export default function TextCard({ description,  customStyles }: TextCardProps) {
    return (
        <View style={{...styles.textBox, ...customStyles}}>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textBox: {
        flex: 1,
        maxHeight: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginLeft: 40,
    },
    description: {
        marginTop: 5,
        fontSize: 20,
        textAlign: 'center',
    }
});