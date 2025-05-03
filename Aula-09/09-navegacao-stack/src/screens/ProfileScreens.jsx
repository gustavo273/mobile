import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ProfileScreen(props) {
  const { navigation, route } = props;

  return (
    <View>
      <Text>ProfileScreens</Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate("ConfigScreen")}
      >
        Ir para tela de config
      </Button>

      <Button
        mode="contained-tonal"
        onPress={() => navigation.goback()}
      >Voltar</Button>
      
    </View>
  );
}

const styles = StyleSheet.create({});
