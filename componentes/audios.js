/**
 * React Native App
 * https://h2e-studio.com.br/shield
 * Início: 10-11-2021
 * Componente que inicializa todos os audios do GAME
*/

import Sound from 'react-native-sound';
Sound.setCategory('Playback');

//INICIAL:[Vento]
const audio_inicial = new Sound('vento.mp3', Sound.MAIN_BUNDLE, (error) => console.log(error));
export const auto_audio_inicial = () => {
    audio_inicial.play((success) => audio_inicial.reset());
    //audio_inicial.play();
}

//CLIQUES
const audio_clique = new Sound('clique.mp3', Sound.MAIN_BUNDLE, (error) => console.log(error));
export const auto_clique = () => {
    audio_clique.play();
}