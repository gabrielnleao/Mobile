import { Text, View, Image, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigator } from './src/navigation/stackNavigator';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button,TextInput,  ScrollView, TouchableOpacity } from 'react-native';
import { HomeScreen } from './src/pages/home'
import { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Axios from 'axios';
import AdicionarItem from './src/components/AdicionarItem';
import ListaItens from './src/components/listadeitens';

function Profile() {

  const [vari, setvari] = useState([
  {nome: 'CAÇADOR', key:1},
  {nome: 'TITÃ ', key:2},
  {nome: 'ARCANO  ', key:3},
  
  ])
  return (
    <View style={styles.Design}>
      <Text>Classes do jogo {'\n'}{'\n'}</Text>
      <Text style={styles.Text2}>esistem  três classes disponíveis para os jogadores escolherem:{'\n'}

        

        <FlatList
        numColumns={1}
        keyExtractor={(item) => item.key}
        data={vari}
        renderItem={({ item }) => ( 
         <Text style={styles.item}>{item.nome}</Text> 
           )}
        />
      </Text>

      <Image
        source={require('./assets/Captura de tela 2023-05-16 062602.png')}
        style={{ width: 450, height: 350, resizeMode: 'contain', marginTop: 15, }}
      />
    </View>
  );
}

function Notifications() {
  return (
    <View style={styles.Design}>
      <Text style={styles.Text2}>Subclasse {'\n'}{'\n'}</Text>
      <Text style={styles.Text2}>Arcano Estase (Stasis): Permite aos Arcanos manipular as energias do estase, representando gelo e frio. Concentra-se em congelar e desacelerar inimigos, além de causar dano de área.
Super habilidade "Tempestade Glacial": Invoca uma tempestade de gelo que cria cristais para congelar ou causar dano explosivo nos inimigos.
Caçador Aspecto do Crepúsculo (Aspect of the Twilight): Baseia-se na manipulação do vácuo e das sombras. Permite ao Caçador deslizar pelo campo de batalha com agilidade e ter vantagem em combates furtivos.
Super habilidade "Lâmina do Crepúsculo": Invoca uma lâmina de vácuo que causa dano massivo em ataques corpo a corpo.
Titã Glacioclasm (Glacioclasm): Concentra-se no controle do gelo e da força bruta. Permite ao Titã criar barreiras de gelo e causar destruição em área.
Super habilidade "Cataclismo Glacial": Desencadeia uma onda de choque de gelo que causa dano em área e congela inimigos próximos.
Subclasses da Treva:

Arcano Vórtice (Voidwalker): Uma evolução da subclasse original do Arcano, baseada na energia do vácuo. Cria explosões de energia de vácuo ainda mais poderosas.
Super habilidade "Destruição Nova": Lança uma explosão devastadora de vácuo, causando dano massivo em uma área.
Caçador Lâmina Venenosa (Poison Blade): Ênfase em veneno e toxina. Permite ao Caçador lançar projéteis de veneno e controlar a área com armadilhas letais.
Super habilidade "Alcance do Crepúsculo": Atira projéteis de veneno que causam dano ao longo do tempo e envenenam inimigos.
Titã Aço Neguro (Darkness Striker): Concentra-se na destruição e poder brutais. Capaz de desferir golpes massivos contra os inimigos.
Super habilidade "Explosão Sombria": Canaliza a escuridão para desferir ataques corpo a corpo massivos que causam dano em área.
Essas subclasses oferecem aos jogadores novas opções de jogabilidade e estratégias, adicionando camadas adicionais de diversão e desafio ao jogo. Os jogadores podem personalizar essas subclasses com diferentes habilidades e mods para se adequar ao seu estilo de jogo preferido. {'\n'}
      </Text>
    </View>
  );
}

function Esquadrao() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Em Destiny, você pode realizar várias atividades com seu esquadrão (grupo de jogadores) para aproveitar ao máximo o jogo. Aqui estão algumas das principais atividades que você pode fazer com seu esquadrão em Destiny 2:

Missões e Campanhas: Junte-se ao seu esquadrão para completar missões e campanhas da história principal do jogo. Explore o mundo do jogo, enfrente inimigos poderosos e descubra segredos do universo de Destiny.

Assaltos (Strikes): Assaltos são atividades PvE (jogador contra ambiente) de três jogadores, onde você e seu esquadrão enfrentam desafios em conjunto, derrotando inimigos poderosos e chefes para ganhar recompensas valiosas.

Raides (Raids): Raides são atividades de alta dificuldade e cooperação que exigem equipes de seis jogadores. Essas missões são cheias de enigmas, desafios e chefes extremamente difíceis. Raides oferecem algumas das melhores recompensas e experiências do jogo.

Jogos competitivos (PvP): Junte-se ao seu esquadrão para competir contra outros jogadores em vários modos PvP, como Controle, Eliminação, Supremacia e muito mais. Trabalhe em equipe para alcançar a vitória e ganhar recompensas especiais.Gambit: Gambit é uma atividade híbrida PvE/PvP que coloca dois esquadrões uns contra os outros. Você e seu time competem para derrotar inimigos controlados pelo computador e coletar motes, enquanto também pode enviar inimigos poderosos para o lado inimigo para atrapalhá-los.

Eventos Públicos: Participe de eventos públicos no mundo do jogo, onde vários jogadores podem se reunir para enfrentar desafios em conjunto. Esses eventos geralmente oferecem recompensas especiais e podem ser concluídos mais facilmente com a ajuda do seu esquadrão.

Atividades sazonais: A cada temporada, Destiny 2 introduz atividades sazonais especiais, como Assaltos da Lenda, Atividades de Bunker, Desafios e mais. Essas atividades podem ser realizadas com seu esquadrão e fornecem recompensas exclusivas relacionadas ao tema da temporada.
      </Text>
    </View>
  );
}

const submeterinfo = (texto) => {
  Axios.post("http://192.168.92.106:3007/item", {item: texto})
}

const [lista, setLista] = useState("");

useEffect(() => {
  Axios.get("http://192.168.92.106:3007/item").then(
    (response) => {
      setLista(response.data)
    }
  )
},[lista])

const Deleta = (key) => {
  Axios.delete(`http://192.168.92.106:3007/item/${key}`,)
}
function Lista() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.texto}>Atividades do jogo</Text>

        <AdicionarItem funcao={submeterinfo}/>

        <FlatList
          numColumns={1}
          keyExtractor={(item) => item.key}
          data={lista}
          renderItem={({ item }) => (
            <ListaItens props={item} funcao={Deleta}/>
          )}
        />
        
      </View>
    </ScrollView>
  );
}




const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#3267F5',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Guardião"
        component={Profile}
        options={{
          tabBarLabel: 'Guardião',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="aliwangwang-o1" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Subclasse"
        component={Notifications}
        options={{
          tabBarLabel: 'Subclasse',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="fire-alt" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Esquadrao"
        component={Esquadrao}
        options={{
          tabBarLabel: 'Esquadrao',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="team" size={24} color="black" />
          ),
        }}
      />
       <Tab.Screen
        name="lista"
        component={Lista}
        options={{
          tabBarLabel: 'Lista',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="filetext1" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
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
  },

  item:{
    fontSize:14,
    textAlign: 'justify',
  },


  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 40,
  },
  viewflatlist: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex: 1,
    textAlign: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5, 
    borderRadius: 5, 
    borderWidth: 1, 
    borderColor: '#ccc', 
  },
  container2: {
    marginLeft: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  inputContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  input: {
    width: '40%',
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 0
  },
  botao: {
    backgroundColor: '#38cb2e',
    padding: 10,
    borderRadius: 15,
    marginTop: 5,
  }
})