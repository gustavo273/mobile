import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function UsuarioScreen({navigation, route}) {

console.log("ID do usuário recebido:", route.params)

  return (
    <View>
      <Text>UsuarioScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})