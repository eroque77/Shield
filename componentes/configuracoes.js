/**
 * React Native App
 * https://h2e-studio.com.br/shield
 * Início: 10-11-2021
 * Componente que renderiza a Tela de Configurações do Jogo
*/

import React, {useState, useEffect} from 'react';
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native';

export default function Configuracoes({navigation}){   
    
    return (
        
        <View style={{ alignItems:'center', justifyContent:'center'}} >
            <Text>Configurações</Text>   
            <Text onPress={(props)=>props.navigation.navigate('Inicial')}>Voltar</Text>        
        </View>     
                
    );  
   
};