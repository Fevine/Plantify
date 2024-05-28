import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Category({ name, description }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#a23dd4',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 17,
        textAlign: 'center'
    }
})