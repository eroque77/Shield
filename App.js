/**
 * React Native App
 * https://h2e-studio.com.br/nox
 * Início: 10-11-2021
 * Gerenciador
*/

import {View,Text,StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';

/** Importação dos componentes */
import Inicial from './componentes/inicial';  // Componente que renderiza toda a tela inicial
import {auto_audio_inicial, auto_clique} from './componentes/audios';  // Carrega o audio inicial

/* COMPONENTE FUNCIONAL-----------------------------------------------------------------------------------------------------------*/

export default function AppMaster(){   
    //Serve para executar algo após a renderização de um componente
    useEffect(() => {
        auto_audio_inicial()
    }, [])

    return (       
        <View style={estilos.view_inicial}>            
            <Text style= {{color:'white'}} onPress={auto_clique} >Click me</Text>
            <Inicial/>                
        </View>
    );
};

const estilos=StyleSheet.create({
    view_inicial:{     
        backgroundColor:'black',
        flex:1,   
        alignItems:'center',
        justifyContent:'center'
    }
});