import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-paper";
import React from "react";
import { PaperProvider } from "react-native-paper";
import CardActions from "react-native-paper/src/components/Card/CardActions";

export default function ItemScreen({ navigation, route }) {
  console.log("CARRO RECEBIDO =>", route.params.item);

  const carro = route.params.item;

  return (
    <View>
      <Card>
        <Card.Content>
          <Text>Nome: {carro.nome}</Text>
          <Text>Fabricante: {carro.fabricante}</Text>
          <Text>Cor: {carro.cor}</Text>
          <Text>Ano: {carro.ano}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({});
