import React from 'react';
import { SafeAreaView} from 'react-native';
import Home from './src/screens/Home';
import Map from './src/screens/Map';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={Map}  options={{ headerShown: false }}/>
      <Stack.Screen name="map" component={Home}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App