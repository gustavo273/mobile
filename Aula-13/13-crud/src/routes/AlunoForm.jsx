import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Text, TextInput } from "react-native-paper";

export default function AlunoForm() {
  const { Nome, setNome } = useState("");
  const { Cpf, setCpf } = useState("");
  const { Email, setEmail } = useState("");
  const { Telefone, setTelefone } = useState("");

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">informe os dados do aluno</Text>

      <TextInput
        style={styles.input}
        mode="outlined"
        label="Nome"
        placeholder="informe o nome"
        value={Nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="CPF"
        placeholder="informe o CPF"
        value={Cpf}
        onChangeText={setCpf}
        keyboardType="decimal-pad"
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="E-mail"
        placeholder="informe o E-mail"
        value={Email}
        onChangeText={setEmail}
      />
       <TextInput
        style={styles.input}
        mode="outlined"
        label="Telefone"
        placeholder="informe o telefone"
        value={Telefone}
        onChangeText={setTelefone}
        keyboardType="decimal-pad"
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    width: "90%",
    marginTop: "10",
  },
});
