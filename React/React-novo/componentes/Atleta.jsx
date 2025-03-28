import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Atleta() {

const {nome, idade, imagem} = props




  return (
    
    <View style = {styles.container}>
      <Text>Atleta</Text>
      <Text style={styles.conatainer}>Nome:{nome}</Text>
      <Text style={styles.container}>Idade:{idade}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})