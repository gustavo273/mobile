import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Series(props) {
  const { nome, ano, diretor, numerotemporadas, imagem } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome da Série: {nome}</Text>
      <Text style={styles.texto}>Ano de Lançamento: {ano}</Text>
      <Text style={styles.texto}>Criador: {diretor}</Text>
      <Text style={styles.texto}>Criador: {numerotemporadas}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
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
