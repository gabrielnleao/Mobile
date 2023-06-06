import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../pages/home'
import { DetailsScreen } from '../pages/details'

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Noticia Completa" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
