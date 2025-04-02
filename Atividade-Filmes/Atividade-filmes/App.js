import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Filmes from "./componentes/Filmes";
import Series from "./componentes/series";

export default function App() {
  const listaFilmes = [
    {
      nome: "Homem de ferro",
      ano: 2008,
      diretor: "jon favreau",
      tipo: "Ação",
      capa: "https://hqrock.com.br/wp-content/uploads/2013/03/iron_man_movie.jpg?w=640",
    },
    {
      nome: "guardioes da galaxia",
      ano: 2014,
      diretor: "james gunn",
      tipo: "Ação",
      capa: "https://br.web.img3.acsta.net/pictures/14/06/03/21/11/122582.jpg",
    },
    {
      nome: "homem aranha",
      ano: 2016,
      diretor: "",
      tipo: "ação",
      capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRuitYF7EVbuV7YNRmc5ZB4R_BKQMBZM54lg&s",
    },
    {
      nome: "Vingadores",
      ano: 2012,
      diretor: "joss whedon",
      tipo: "ação",
      capa: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfFdxSddOyarV1147VR3Quubolyb1QcOuZUAaoaPk4xUJaiKLaQWgPOwiugACGR6FOSMNATBDJLnuXyg_aHLhim9x-yxdpH54iZlD7BDbI",
    },
  ];

  const listaSeries = [
    {
      nome: "Buffy, a Caça-Vampiros",
      ano: 1997,
      diretor: "Joss Whedon",
      temporadas: 7,
      capa: "https://i.pinimg.com/236x/da/71/74/da71743ddd8f1cc98fa0565215919275.jpg",
    },
    {
      nome: "Desperate Housewives",
      ano: 2004,
      diretor: "Marc Cherry",
      temporadas: 8,
      capa: "https://i.pinimg.com/236x/15/cc/88/15cc8856eb29f92689dd1268077db45e.jpg",
    },
    {
      nome: "Sons of Anarchy",
      ano: 2008,
      diretor: "Kurt Sutter",
      temporadas: 7,
      capa: "https://i.pinimg.com/474x/79/2e/1e/792e1e398b6349dd3713eb74a5cf2bc2.jpg",
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.header}>Lista de Filmes</Text>

        {listaFilmes.map((Filme) => {
          return (
            <Filmes
              nome={Filme.nome}
              ano={Filme.ano}
              diretor={Filme.diretor}
              tipo={Filme.tipo}
              capa={Filme.capa}
            />
          );
        })}

        {listaSeries.map((Serie) => (
          <Series
            nome={Serie.nome}
            ano={Serie.ano}
            criador={Serie.diretor}
            temporadas={Serie.temporadas}
            capa={Serie.capa}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "",
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
    paddingTop: 30,
  },
});
