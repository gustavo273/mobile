import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) { 

console.log(props) 
console.log(props.nome)
console.log(props.idade)



return (
    <View style={styles.container}>
      <Text style={{fontSize: 40}}>Perfil</Text>
      <Text style={{fontSize: 40}}>Nome: {props.nome}</Text>
      <Text style={{fontSize: 40}}>Idade: {props.idade}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'red'
    }
})