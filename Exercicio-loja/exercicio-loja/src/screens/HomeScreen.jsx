import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Card } from "react-native-paper";
import axios from "axios";

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories")
      .then((response) => setCategorias(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <FlatList
      data={categorias}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("ListaProdutosScreen", { categoria: item })}>
          <Card style={{ margin: 10, padding: 10 }}>
            <Text>{item}</Text>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}
