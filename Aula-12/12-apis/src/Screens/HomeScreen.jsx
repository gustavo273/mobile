import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, Card, Avatar, IconButton } from "react-native-paper";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";

export default function HomeScreen({navigation, route}) {
  const [usuarios, setUsuarios] = useState([]);

  // FAZER ALGO QUANDO O USUÁRIO ENTRAR NA TELA (COMPONENTE FOR MONTADO)
  useEffect(() => {
    // fazer requisição para buscar lista de usuários
    axios
      .get("https://dummyjson.com/users?delay=3000")
      .then((resposta) => {
        console.log(resposta.data.users);
        setUsuarios(resposta.data.users);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={usuarios}
        renderItem={({ item }) => (
          <Card style={{margin: 8}} >
            <Card.Title
              title={item.firstName + "" + item.lastName}
              subtitle={item.email}
              left={(props) => (
                <Avatar.Image {...props} source={{ uri: item.image }} />
              )}
            />
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "",
    justifyContent: "center",
  },
});
