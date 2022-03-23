/**
 * React Native App
 * https://h2e-studio.com.br/nox
 * Início: 10-11-2021
 * Gerenciador
*/

import {View,Text,StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

/** Importação dos componentes */
//Navegação:
import Inicial from './componentes/inicial';  // Componente que renderiza toda a tela inicial
import Configuracoes from './componentes/configuracoes';  // Componente que guarda as configurações do Player
//import Navegacao from './componentes/navegacao';  // Componente que faz a navegação: Inicial - Configurações

import {auto_audio_inicial, auto_clique} from './componentes/audios';  // Carrega o audio inicial

/* COMPONENTE FUNCIONAL-----------------------------------------------------------------------------------------------------------------*/

export default function AppMaster(){   
         
    //Executa algo após a renderização de um componente
    useEffect(() => {
        auto_audio_inicial()
    }, [])   

    return (            
        <View style={estilos.view_inicial}>    
            <Text style= {{color:'white'}} >Click me</Text>
            <Inicial/>    
            
            <NavigationContainer> 
                {/* <Stack.Navigator>
                    <Stack.Screen name="Inicial" component={Inicial} />
                    <Stack.Screen name="Configuracoes" component={Configuracoes} />    
                </Stack.Navigator> */}
            </NavigationContainer> 
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