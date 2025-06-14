import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useThemeColor } from '@/components/Themed';

interface GreetingProps {
    username?: string;
    profileImageUrl?: string;
}

export default function Greeting({ username, profileImageUrl }: GreetingProps) {
    const date = new Date();
    const hours = date.getHours();

    let greeting = '';
    if (hours >= 5 && hours < 12) {
        greeting = 'Good Morning';
    } else if (hours >= 12 && hours < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    const textColor = useThemeColor({}, 'text');

    return (
        <View style={styles.container}>
            <View>
                <Text style={[styles.greeting, { color: textColor }]}>
                    {greeting}{username ? `, ${username}` : ''}
                </Text>
            </View>
            {profileImageUrl && (
                <Image source={{ uri: profileImageUrl }} style={styles.avatar} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 16,
    },
    greeting: {
        fontSize: 22,
        fontWeight: '600',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 12,
    },
});
