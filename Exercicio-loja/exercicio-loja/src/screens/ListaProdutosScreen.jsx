import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Card, Text } from "react-native-paper";
import axios from "axios";

export default function ListaProdutosScreen({ route, navigation }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then((res) => setProdutos(res.data.products))
      .catch((err) => console.error(err));
  }, [categoria]);

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("ProdutoScreen", { idProduto: item.id })}>
          <Card style={{ margin: 10 }}>
            <Card.Cover source={{ uri: item.thumbnail }} />
            <Card.Content>
              <Text>{item.title}</Text>
              <Text>R$ {item.price}</Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}
