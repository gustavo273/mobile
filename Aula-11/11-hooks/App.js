import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NomeNumero from './components/NomeNumero';
import Controle from './components/Controle';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <NomeNumero/>

      <Controle/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
