import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  PaperProvider,
  Card,
  Title,
  Paragraph,
  Divider,
  Button,
} from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        
        <Button mode="container" onPress={() => alert("Clicou")}>
          Clique Aqui
        </Button>
        <Button mode="contained.tonal">Clique Aqui</Button>
        <Button mode="elevated">Clique Aqui</Button>
        <Button mode="outlined">Clique Aqui</Button>
        <Button mode="text">Clique Aqui</Button>

        
        
        <Text>Olá</Text>
        <Divider />
        <Text>Olá</Text>
        <Text>Olá</Text>

        
        
        <Text variant="titleLarge">Olá</Text>
        <Text variant="headLineLarge">Olá</Text>
        <Text variant="displayLarge">Olá</Text>

        
        
        <Card>
          <Card.Content>
            <Title>Titulo 1</Title>
            <Paragraph>Um paragrafo qualquer</Paragraph>
          </Card.Content>
        </Card>
        <Card.Cover
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu0MBJC4GDdDsx6v7a9j0i-uSxWo4an5BvFw&s",
          }}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
