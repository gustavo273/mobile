import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Filmes from "./componentes/Filmes";

export default function App() {
  const listaFilmes = [
    {
    "nome": "Homem de ferro",
    "ano": 2008,
    "diretor": "jon favreau",
    "tipo": "Ação",
    "capa": "https://hqrock.com.br/wp-content/uploads/2013/03/iron_man_movie.jpg?w=640"
    },
    {
    "nome": "guardioes da galaxia",
    "ano": 2014,
    "diretor": "james gunn",
    "tipo": "Ação",
    "capa": "https://br.web.img3.acsta.net/pictures/14/06/03/21/11/122582.jpg"
    },
    {
    "nome": "homem aranha",
    "ano": 2016,
    "diretor": "",
    "tipo": "ação",
    "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRuitYF7EVbuV7YNRmc5ZB4R_BKQMBZM54lg&s"
    },
    {
    "nome": "Vingadores",
    "ano": 2012,
    "diretor": "joss whedon",
    "tipo": "ação",
    "capa": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfFdxSddOyarV1147VR3Quubolyb1QcOuZUAaoaPk4xUJaiKLaQWgPOwiugACGR6FOSMNATBDJLnuXyg_aHLhim9x-yxdpH54iZlD7BDbI"
    }];

  
  
    return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.header}>Lista de Filmes</Text>

    

        {listaFilmes.map((Filme) => {
          return (
            <Filmes
              nomedofilme={Filme.nome}
              anodelançamento={Filme.ano}
              nomedodiretor={Filme.diretor}
              generofilme={Filme.tipo}
              imagem={Filme.imagem}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: 'Blue',
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
    paddingTop: 30
  }
});