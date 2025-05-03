import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function HomeScreen(props) {

const {navigation, route} = props

// SERVE PARA NAVEGAR ENTRE AS TELAS
console.log("NAVIGATION => ", navigation)

// PEGAR DADOS DA ROTA
console.log("ROUTE => ", route)

  return (
    <View>
      <Text>HomeScreen</Text>

      <Button mode='contained' onPress={() => navigation.navigate('ProfileScreen')}
        >Ir para tela de perfil</Button>


    </View>
  )
}

const styles = StyleSheet.create({})