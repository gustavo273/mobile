import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './Screens/HomeScreen';
import ProfileScreens from './Screens/ProfileScreens';
import SettingsScrenns from './Screens/SettingsScrenns';
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        
        <Tab.Navigator>

        <Tab.Screen 
        name='HomeScreen' 
        component={ HomeScreen }
        options={{
            title: 'Inicio',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'orange'
            },
        tabBarInactiveBackgroundColor: 'black',
        tabBarActiveBackgroundColor: 'orange',
        tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />

        }}
         />

        <Tab.Screen 
        name='ProfileScreen'
        component={ProfileScreens} />

        <Tab.Screen 
        name='SettingsScreen' 
        component={SettingsScrenns} />
    
        </Tab.Navigator>

     </NavigationContainer>
   </PaperProvider>
  );
}






