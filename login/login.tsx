import { Stack } from 'expo-router';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import FormInput from '../shared';


export default function LoginScreen() {

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <SafeAreaView style={styles.container}>

                <View>
                    <Text style={styles.textHeader}>Login to your Account</Text>
                </View>

                <FormInput placeHolder={'Username'} onChangeText={() => { }} />
                <FormInput placeHolder={'Password'} onChangeText={() => { }} />

                <TouchableOpacity style={styles.createAccountButton}>
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'flex-start',
    },
    button: {
        fontSize: 20,
        fontFamily: 'Poppins',
        color: 'white'
    },
    textHeader: {
        color: '#fff',
        fontSize: 30,
        alignItems: 'center',
        paddingTop: 50,
        paddingLeft: 30,
    },
    createAccountButton: {
        margin: 50,
        padding: 20,
        borderRadius: 25,
        backgroundColor: "#0d8529c9",
        alignItems: 'center',
        justifyContent: 'center',
    }
});