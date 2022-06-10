import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Logo from '../../../assets/logo.png';
import {carregaTopo} from '../../../services/loadData';

export default function Topo() {
  return (
    <>
      <View style={estilos.topo}>
        <Image source={Logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}> Olá Pessoa </Text>
        <Text style={estilos.legenda}>Encontre os melhores produtores</Text>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646'
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3'
  },
});
