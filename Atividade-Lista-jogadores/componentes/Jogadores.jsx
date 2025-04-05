import { StyleSheet} from 'react-native'
import React from 'react'
import { Avatar, Card } from 'react-native-paper';

export default function Jogadores(props) {

    const {nome, imagem} = props

  return (
    <Card.Title
    title={nome}
    left={(props) => <Avatar.Image {...props} source={{ uri: imagem }} />}
  />
  )
  
}

const styles = StyleSheet.create({})