import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./Navigation/tab";
//import {Home,Music,Movie,Candidat} from './screens'
import Home from './screens/Home';
import Music from './screens/Music';
import Movie from './screens/Movie';
import Candidat from './screens/Candidat';
const Stack = createStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={"Home"}>
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Music" component={Music} />
          <Stack.Screen name="Movie" component={Movie} />
          <Stack.Screen name="Candidat" component={Candidat} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;