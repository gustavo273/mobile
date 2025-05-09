import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, Button } from "react-native-paper";
import React from "react";
import CardActions from "react-native-paper/src/components/Card/CardActions";

export default function ReceitaScreen({ navigation, route }) {
  const receita = route.params.item;

  console.log("RECEITA RECEBIDA =>", receita);

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: receita.imagem }} />
        <Card.Content>
          <Text style={styles.titulo}>Nome: {receita.nome}</Text>
          <Text> Tempo de preparo: {receita.tempoPreparo}</Text>
          <Text> Porções: {receita.porcoes}</Text>

          <Text style={styles.subtitulo}>Ingredientes:</Text>
          {receita.ingredientes.map((ingrediente, index) => (
            <Text key={index}>• {ingrediente}</Text>
          ))}

          <Text style={styles.subtitulo}>Modo de Preparo:</Text>
          {receita.modoPreparo.map((passo, index) => (
            <Text key={index}>{passo}</Text>
          ))}
        </Card.Content>

        <CardActions>
          <Button
            mode="contained.tonal"
            icon="arrow-left"
            onPress={() => navigation.goBack()}
          >
            Voltar
          </Button>
        </CardActions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitulo: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 16,
  },
});
