import React from 'react';
import { View, Text } from '@/components/Themed';

export default function Greeting() {
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

    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{greeting}</Text>
        </View>
    );
}
