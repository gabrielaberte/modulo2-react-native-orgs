import React, {useEffect, useState} from 'react';
import {carregaProdutores} from '../../../services/loadData';
import {FlatList, Text, StyleSheet} from 'react-native';
import Produtor from './Produtor';

export default function Produtores({topo: Topo}) {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  const topoLista = () => {
    return <>
    <Topo />
    <Text style={estilos.titulo}>{titulo}</Text>
    </>;
  };

  return (
    <FlatList
      data={lista}
      ListHeaderComponent={topoLista}
      renderItem={({item}) => <Produtor {...item}/>}
      keyExtractor={({nome} )=> nome}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
