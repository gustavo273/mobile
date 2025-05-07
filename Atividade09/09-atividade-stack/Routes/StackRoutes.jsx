import HomeScreen from '../Screens/HomeScreen'
import ReceitaScreen from '../Screens/ReceitaScreen'

// import do stack
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

export default function StackRoutes() {

return (
   <Stack.Navigator>

    
    
    <Stack.Screen name='HomeScreen' component={HomeScreen} options={{title: "Início", headerTitleAlign:"center"}} />

     <Stack.Screen name='ReceitaScreen' component={ReceitaScreen} />



   </Stack.Navigator>
  )
}

