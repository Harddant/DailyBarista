import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: 50,
                    paddingTop: 4
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
                                        color={Colors[colorScheme ?? 'light'].text}
                                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />
            <Tabs.Screen
                name="recommended"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <TabBarIcon name="coffee" color={color} />,
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" color={color} size={25} />
                    ),
                }}
            />
        </Tabs>
    );
}
