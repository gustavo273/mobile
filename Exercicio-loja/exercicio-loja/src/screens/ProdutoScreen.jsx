import React, { useEffect, useState } from "react";
import { ScrollView, Image } from "react-native";
import { Text, Card } from "react-native-paper";
import axios from "axios";

export default function ProdutoScreen({ route }) {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then((res) => setProduto(res.data))
      .catch((err) => console.error(err));
  }, [idProduto]);

  if (!produto) return <Text>Carregando...</Text>;

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Card>
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Content>
          <Text variant="titleLarge">{produto.title}</Text>
          <Text>{produto.description}</Text>
          <Text>Preço: R$ {produto.price}</Text>
          <Text>Marca: {produto.brand}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
