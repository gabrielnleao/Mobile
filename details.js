import { ScrollView, View, Text, StyleSheet } from 'react-native';

export function DetailsScreen() {
  return (
    <ScrollView>
      <View style={styles.Design}>
        <Text style={styles.Text2}>A história de Destiny 2 se passa em um futuro distante, no qual a humanidade está espalhada por vários planetas do sistema solar. No jogo, os jogadores assumem o papel de Guardiões, protetores da última cidade da Terra, que possuem habilidades especiais concedidas por uma entidade misteriosa chamada O Viajante.

A história começa com a chegada de um novo inimigo, a Legião Vermelha, liderada por Dominus Ghaul, que lança um ataque devastador à cidade e destrói o poder do Viajante, deixando os Guardiões sem suas habilidades. Os jogadores são forçados a fugir e buscar a ajuda de outros sobreviventes para recuperar seus poderes e enfrentar a Legião Vermelha.

Durante a jornada, os Guardiões exploram vários planetas e luas do sistema solar, enfrentando ameaças alienígenas, como os Cabais, os Caçadores Sombrios e as Criaturas da Colmeia. Eles também encontram aliados poderosos, como os membros da Vanguarda (Cayde-6, Ikora Rey e Zavala) e a Rainha dos Despertos, Mara Sov.

A história de Destiny 2 se expandiu ao longo do tempo com a adição de várias expansões e atualizações. Alguns dos principais conteúdos lançados incluem "A Maldição de Osíris", que apresenta a história do guardião Osíris e sua luta contra um deus alienígena chamado Panoptes; "A Mente Bélica", que explora a invasão do exército robótico Vex; e "Renegados", que segue a história de Cayde-6 e a caçada aos Renegados liderados por Uldren Sov.

Além disso, Destiny 2 também possui modos de jogo multiplayer, incluindo PvP (jogador contra jogador) e atividades cooperativas como raides, assaltos e atividades semanais para os jogadores enfrentarem desafios mais difíceis e obter recompensas poderosas.

A história de Destiny 2 continua em constante evolução, com a adição de novos conteúdos e eventos sazonais que expandem o universo do jogo e introduzem novas narrativas e ameaças para os Guardiões enfrentarem.

        </Text>
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