import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import TerceiroComponente from './componentes/TerceiroComponente';
import JavaScripComponente from './componentes/JavaScripComponente';
import Perfil from './componentes/Perfil';


export default function App() {
  
  
  
  
  
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <PrimeiroComponente />

      <SegundoComponente />  

      <TerceiroComponente /> 

      <JavaScripComponente />   

      <Perfil
      nome="Gustavo"
      idade={26}

      />
      <Perfil
      nome="Maria"
      idade={23}
      />
      <Perfil
      nome="João"
      idade={25}
      />
      <Perfil
      nome="José"
      idade={28}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
