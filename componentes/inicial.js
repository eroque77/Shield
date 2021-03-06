/**
 * React Native App
 * https://h2e-studio.com.br/shield
 * Início: 10-11-2021
 * Componente que renderiza a Tela Inicial
*/

import React, {useState, useEffect} from 'react';
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native';

export default function Inicial({navigation}){   
    return (
        <View style={{ alignItems:'center', justifyContent:'center'}}>
            <Text style={estilos.shield_nome}>Teste</Text>
            <Text style={{marginTop:'-5%', fontSize:25, marginRight:'-23%', color:'#FFF', fontFamily: "GreatVibes-Regular"}}>Game</Text>

            <View>
                <TouchableHighlight style={estilos.inicial_botao}>
                    <Text style={{color: '#FFF'}} onPress={()=>navigation.navigate('Configuracoes')} >
                        ENTRAR
                    </Text>
                </TouchableHighlight>
            </View>
        </View>         
    );  
   
};

const estilos=StyleSheet.create({
    shield_nome:{
        color: '#FFF',
        fontSize:90,
        fontFamily: "Seagram tfb"           
    },
    inicial_botao:{
        marginTop:'3%',
        backgroundColor: 'gray',
        alignItems:'center',
        padding:8,
        width:'80%',
        justifyContent:'center'
    },
});