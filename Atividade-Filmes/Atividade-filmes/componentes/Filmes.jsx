import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Filmes(props) {
  const { nome, ano, diretor, tipo, imagem } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome do Filme:{nome}</Text>
      <Text style={styles.texto}>Ano de lançamento: {ano}</Text>
      <Text style={styles.texto}>Nome do diretor: {diretor}</Text>
      <Text style={styles.texto}>genero do filme: {tipo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: '',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  }
      
});
