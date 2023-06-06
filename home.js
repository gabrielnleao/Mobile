import React from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';


export function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ justifyContent: 'space-around', alignItems: 'center', justifyContent: 'center', }}>
        <Text style={styles.Design} > Destiny 2 {'\n'} </Text>
        <Text style={styles.Text2}>

        "Destiny 2 é um jogo de tiro em primeira pessoa com elementos de RPG desenvolvido pelo estúdio norte-americano Bungie e lançado em 2017.
Trata-se de um Massively Multiplayer Online (MMO), ou seja, um game que comporta vários jogadores ao mesmo tempo dentro de um servidor.
O título se passa num futuro distópico e funciona como continuação direta de Destiny (2014), a primeira produção da franquia sci-fi.
Nele, controlamos personagens que vestem armaduras e empunham armas de última geração. Podemos realizar missões, concluir masmorras e fazer uma quantidade gigantesca de atividades, seja sozinho ou em grupo.
Não existe fim em Destiny 2, pois o jogo é atualizado frequentemente com eventos, patches e expansões. Em outras palavras: sempre há algo inédito para ser explorado, independente do seu nível. {'\n'}{'\n'}

        
        </Text>

        <Button
          title="VEJA MAIS"
          onPress={() => navigation.navigate('Noticia Completa')}
        />

        <Text>{'\n'}</Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  Design: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },

  Text2: {
    textAlign: 'justify',
    marginLeft: 10,
    marginEnd: 10,
  }
});