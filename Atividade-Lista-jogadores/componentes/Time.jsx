import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper' 
import Jogadores from './Jogadores'

export default function Time() {

    const {nome, anoFundação, mascote, imagem, jogadores} = props


  return (
    <Card style={{ margin: 10 }}>
    <Card.Title title = {nome} subtitle = {mascote} />
    <Card.Content>
        <Text>{anoFundação}</Text>
    </Card.Content>
    <Card.Cover source = {{ uri: imagem }} />
    <Card.Actions>
    <FlatList
        data={jogadores}
        renderItem={({item}) => (
            <Jogadores
            nome={item.nome}
            imagem={item.imagem}
            />
        )}
        />
        
        
    </Card.Actions>


</Card>
  )
}

const styles = StyleSheet.create({})