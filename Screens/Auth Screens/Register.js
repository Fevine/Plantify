import { Formik } from 'formik'
import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Register({ navigation }) {

    function register(values) {
        console.log(values)
        if (values) {
            navigation.navigate('Home', {
                username: values.name
            })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.pageTitle}>Register</Text>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => register(values)}
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
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('email')}
                            placeholder='Email'
                            onBlur={handleBlur('email')}
                            value={values.email}
                            inputMode='email'
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
                <Text style={styles.link}>You already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text> Login</Text>
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