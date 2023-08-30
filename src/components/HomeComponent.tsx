import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

Export default function HomeComponent() {
    return (
        <View style={styles.container}>
            <Text>TELA INICIAL</Text>

            <Text
                style={styles.Button}
                onPress={() => navigation.navigate('CameraComponent')}
            >IR PARA PAGINA DA CAMERA</Text>
        </View>
    )
}

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
