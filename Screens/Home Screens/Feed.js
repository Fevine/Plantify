import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Category from '../../Components/Category'

export default function Feed({ navigation, route }) {

    const [Data, setData] = useState()

    async function GetCategories() {
        try {
            const response = await axios('https://northwind.vercel.app/api/categories')
            console.log(response.data);
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        GetCategories()
    }, [])

    return (
        <View style={styles.container}>
            <Text>Feed</Text>
            <FlatList
                data={Data && Data}
                renderItem={({item}) => <Category name={item.name} description={item.description} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})