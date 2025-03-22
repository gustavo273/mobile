import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavaScripComponente() {

const nome = "Gustavo"
const idade = 26


function checkMaiorIdade(){
    if (idade >= 18) {
        return "Maior idade"
    } else {
        return "Menor idade"
    }
}

function alerta () {
    alert("Clicou no botão")
}

return (
    <View>
      <Text>JavaScripComponente</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade:{idade}</Text>
      <Text>idade+40:{idade + 40}</Text>
      <Text>É maior de idade ? {checkMaiorIdade}</Text>
      <Text>Check 18+: {idade >= 18 ? "18+" : "18-"} </Text>
      <Button title='Clicar' onPress={alerta}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})