// import das telas
import ProfileScreens from '../screens/ProfileScreens'
import HomeScreen from '../screens/HomeScreen'
import ConfigScreen from '../screens/ConfigScreen'


// import do stack
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function StackRoutes() {

return (
   <Stack.Navigator>
    
    <Stack.Screen name='HomeScreen' component={HomeScreen} options={{title: "Início", headerTitleAlign:"center"}} />

    <Stack.Screen name='ProfileScreen' component={ProfileScreens} />

    <Stack.Screen name='ConfigScreen' component={ConfigScreen} />



   </Stack.Navigator>
  )
}

