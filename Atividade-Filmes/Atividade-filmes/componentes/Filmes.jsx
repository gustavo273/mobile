import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Filmes(props) {
  const { nome, ano, diretor, tipo, imagem } = props;

  return (
    <View>
      <Text style={styles.container}></Text>

      <Text style={styles.container}>Nome do Filme:{nome}</Text>
      <Text style={styles.container}>Ano de lançamento: {ano}</Text>
      <Text style={styles.container}>Nome do diretor: {diretor}</Text>
      <Text style={styles.container}>genero do filme: {tipo}</Text>

      <Image
        source={{
          uri: imagem
        }}
        style={{
          height: 300,
          width: 300
        }}
      />

      
    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      }
      
});
