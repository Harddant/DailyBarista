import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SectionHeader({ title, onPress }: { title: string; onPress?: () => void }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.button}>See all</Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: '#000',
        color: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 15,
        fontSize: 12,
    },
});
