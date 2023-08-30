import React, { useState } from 'react';
import { View, Button, StyleSheet, Image, } from 'react-native';
import firebase from 'C:\Users\Laboratorio-Info\teste\src\firebase';
import storage from '@react-native-firebase/storage';

Export default function FirebaseComponent() {
    return (
        <View style={styles.container}>
            <Text>TELA INICIAL</Text>

            <Button title="BOTAO" onPress=(imageUpload)/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
    },
    Button: {
        backgroundColor: 'blue',
        color: 'white',
        padding: '5%',
    }
});