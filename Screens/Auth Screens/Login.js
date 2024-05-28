import { Formik } from 'formik'
import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Login({ navigation }) {

    function login(values) {
        console.log(values)
        if (values) {
            // console.log(navigation.getParent('AuthNav'));
            navigation.getParent().navigate('HomeNav', {
                screen: 'Home',
                params: {
                    username: values.name,
                    password: values.password,
                }
            })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.pageTitle}>Login</Text>
            <Formik
                initialValues={{ name: '', password: '' }}
                onSubmit={values => login(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('name')}
                            placeholder='Name'
                            onBlur={handleBlur('name')}
                            value={values.name}
                            placeholderTextColor={'#fff'}
                        />
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('password')}
                            placeholder='Password'
                            passwordRules={true}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={true}
                            placeholderTextColor={'#fff'}
                        />
                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
            <View style={styles.linkContainer}>
                <Text style={styles.link}>You have not signed in yet?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text> Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageTitle: {
        fontSize: 25,
        fontWeight: '500',
        lineHeight: 100,
    },
    formContainer: {
        flex: 0,
        width: '70%',
        rowGap: 20,
    },
    input: {
        backgroundColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 6,
        color: '#ff0'
    },
    label: {
        fontSize: 17,
        fontWeight: '500',
    },
    linkContainer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
})