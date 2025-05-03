import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ConfigScreen(props) {

  const { navigation, route } = props;

  return (
    <View>
      <Text>ConfigScreen</Text>

      <Button
        mode="contained-tonal"
        onPress={() => navigation.goback()}
      >Voltar</Button>

    </View>
  )
}

const styles = StyleSheet.create({})