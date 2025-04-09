import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';
import Jogador from './Jogador'; // Componente para exibir detalhes do jogador.

export default function Time(props) {
  const { nome, anoFundacao, mascote, imagem, jogadores } = props;

  return (
    <Card style={{ margin: 10 }}>
      <Card.Title title={nome} subtitle={`Fundado em: ${anoFundacao}`} />
      <Card.Content>
        <Text>{`Mascote: ${mascote}`}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: imagem }} />
      <Card.Actions>
        {/* Exibe a lista de jogadores */}
        <FlatList
          horizontal
          data={jogadores}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => (
            <Jogador
              nome={item.nome}
              numero={item.numero}
              imagem={item.imagem}
            />
          )}
        />
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({});
