import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Feed from './Feed'
import Home from './Home'
import HCE from './HCE'

const HomeTab = createBottomTabNavigator()

export default function HomeNavigation() {
    return (
        <HomeTab.Navigator>
            <HomeTab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
                }}
            />
            <HomeTab.Screen
                name='Feed'
                component={Feed}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name='game-controller' color={color} size={size} />,
                }}
            />
            <HomeTab.Screen
                name='HCE'
                component={HCE}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name='apps' color={color} size={size} />,
                }}
            />
        </HomeTab.Navigator>
    )
}