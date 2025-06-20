import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SectionHeader({ title, onPress }: { title: string; onPress?: () => void }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
});
