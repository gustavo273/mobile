import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

const MegaSenaScreen = () => {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const numeros = [];
    while (numeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }
    numeros.sort((a, b) => a - b);
    setJogoGerado(numeros);
    setJogosMegaSena([...jogosMegaSena, numeros]);
  };

  return (
    <View style={{ padding: 20 }}>
      <Button mode="contained" onPress={gerarJogo}>
        Gerar Jogo da Mega Sena
      </Button>

      {jogoGerado.length > 0 && (
        <Card style={{ marginTop: 20, padding: 10 }}>
          <Text>Jogo Atual: {jogoGerado.join(', ')}</Text>
        </Card>
      )}

      <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Histórico:</Text>
      <FlatList
        data={jogosMegaSena}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginVertical: 5, padding: 10 }}>
            <Text>{item.join(', ')}</Text>
          </Card>
        )}
      />
    </View>
  );
};

export default MegaSenaScreen;
