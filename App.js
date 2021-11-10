/**
 * React Native App
 * https://h2e-studio.com.br/shield
 * Início: 10-11-2021
 * Gerenciador
*/

import React from 'react';
import {View,Text,StyleSheet } from 'react-native';

/** Importação dos componentes */
import Inicial from './componentes/inicial';  // Componente que renderiza toda a tela inicial

/* COMPONENTE FUNCIONAL-----------------------------------------------------------------------------------------------------------*/

export default function AppMaster(){
    return (
        <View style={estilos.view_inicial}>
            
           <Inicial/>

        </View>
    );
};

const estilos=StyleSheet.create({
    view_inicial:{     
        flex:1,   
        alignItems:'center',
        justifyContent:'center'
    }
});