import React from 'react'
import { View, Text } from 'react-native'

export default function Contacts({navigation}){
    return(
        <View style={{padding: 55}}>
            <Text>Nome: Pessoa 1</Text>
            <Text>Telefone (11) 91234-5576</Text>
            <Text
            onPress={() => navigation.navigate('Information',
            {
                nome: 'Pessoa 1',
                telefone: '(11) 93463-1532',
                endereço: 'Endereço: Faroeste silva',
                numero: '6543',
                profissao: 'sem trabalho',
                email:'naotrabalho@semtrabalho.com'
            }
            )}
            >Information...</Text>
            <Text>Nome: Pessoa 2</Text>
            <Text>Telefone (11) 91234-8655</Text>
            <Text
            onPress={() => navigation.navigate('Information',
            {
                nome: 'Pessoa 2',
                telefone: '(11) 91234-8655',
                endereço: 'Endereço: Faroeste silva',
                numero: '1245',
                profissao: 'medico',
                email:'medicopro@hospitalpenacova.com'
            }
            )}
            >Information...</Text>
        </View>
    )

}