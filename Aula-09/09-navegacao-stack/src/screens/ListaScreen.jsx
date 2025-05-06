import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import CardContent from "react-native-paper/lib/typescript/components/Card/CardContent";
import CardActions from "react-native-paper/lib/typescript/components/Card/CardActions";
import { Button, Card } from "react-native-paper";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

export default function ListaScreen({ navigation, route }) {
  const carros = [
    {
      nome: "Gol",
      ano: "2012",
      cor: "azul",
      fabricante: "Vw",
    },
    {
      nome: "Civic",
      ano: "2018",
      cor: "preto",
      fabricante: "honda",
    },
    {
      nome: "Lancer",
      ano: "2012",
      cor: "branco",
      fabricante: "Mitsubishi",
    },
  ];

  return (
    <View>
      <FlatList
        data={carros}
        renderItem={({ item }) => (
          <Card style={{ margin: 10 }}>
            <CardContent>
              <Text>Carro: {item.nome}</Text>
            </CardContent>
            <CardActions>
              <Button
                mode="contained"
                icon="arrow-right"
                onPress={() => navigation.navigate('ItemScreen', { item })}
              >
                Ver detalhes
              </Button>
            </CardActions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
