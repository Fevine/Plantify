import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AuthNavigation from './Screens/Auth Screens/AuthNavigation'
import HomeNavigation from './Screens/Home Screens/HomeNavigation'

const MainStack = createNativeStackNavigator()

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{
                headerShown: false
            }}>
                <MainStack.Screen name='AuthNav' component={AuthNavigation} />
                <MainStack.Screen name='HomeNav' component={HomeNavigation} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation