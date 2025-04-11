import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import TitulosScreen from "./Screens/TitulosScreen";
import EscudoScreen from "./Screens/EscudoScreen";
import JogadoresScreen from "./Screens/JogadoresScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Escudo"
            component={EscudoScreen}
            options={{
              title: "Inicio",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "white",
              },
              tabBarInactiveBackgroundColor: "white",
              tabBarActiveBackgroundColor: "black",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen 
          name="Jogadores"
           component={JogadoresScreen} />

          
          <Tab.Screen 
          name="Titulos" 
          component={TitulosScreen} />
        
        
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
