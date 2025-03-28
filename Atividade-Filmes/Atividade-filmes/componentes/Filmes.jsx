import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Filmes(props) {
  const { nome, anodelançamento, nomediretor, generodofilme, imagem } = props;

  return (
    <View>
      <Text style={styles.texto}>Filmes</Text>

      <Text style={styles.texto}>Nome do Filme:{nome}</Text>
      <Text style={styles.texto}>Ano de lançamento: {anodelançamento}</Text>
      <Text style={styles.texto}>Nome do diretor: {nomediretor}</Text>
      <Text style={styles.texto}>genero do filme: {generodofilme}</Text>
    
      <Image
       source={{
        uri: imagem
      }}
      style={{
        height: 300,
        width: 300
      }}/>
    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        borderWidth: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      },
      texto: {
        fontSize: 20,
        fontWeight: 600
      }
});
