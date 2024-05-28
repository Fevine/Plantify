import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home({ navigation, route }) {

    const { username } = route.params

    return (
        <View>
            <Text>Home - {username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})