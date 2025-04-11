import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

export default function JogadoresScreen() {

  const jogadores = [
    {
      nome: "Gabriel Barbosa",
      numero: 9,
      imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg"
    },
    {
      nome: "Arrascaeta",
      numero: 14,
      imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg"
    },
    {
      nome: "Everton Ribeiro",
      numero: 7,
      imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg"
    },
    {
      nome: "David Luiz",
      numero: 23,
      imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg"
    },
    {
      nome: "Pedro",
      numero: 21,
      imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg"
    },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogadores do Flamengo</Text>

      <FlatList
        data={jogadores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.numero}>Camisa: {item.numero}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',

  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginRight: 15
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  numero: {
    fontSize: 16,
    color: '#555'
  }
})
