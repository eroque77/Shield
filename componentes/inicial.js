/**
 * React Native App
 * https://h2e-studio.com.br/shield
 * Início: 10-11-2021
 * Componente que renderiza a Tela Inicial
*/

import React, {useState} from 'react';
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native';

export default function(){
    return (
        <View>
            <View >
                <Text style={estilos.shield_nome}>SHIELD</Text>
            </View>    
          
            <View style={{alignItems:'center'}}>
                <TouchableHighlight style={estilos.inicial_botao}>
                    <Text style={{color: '#EEE9E9'}}>
                        ENTRAR
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};


const estilos=StyleSheet.create({
    shield_nome:{
        color: '#FF6347',
        fontSize:60,
        fontWeight: 'bold',
        fontFamily: "sans-serif-light"
            
    },
    inicial_botao:{
        backgroundColor: '#000000',
        alignItems:'center',
        padding:8,
        width:'60%'
    },
});