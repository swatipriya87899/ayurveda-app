import React from 'react';
import { SafeAreaView} from 'react-native';
import Home from './src/screens/Home';
import Map from './src/screens/Map';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details_Page from './src/components/Details_Page';
import ChoseDoctor from './src/screens/ChoseDoctor';
import UpcomingAppointment from './src/components/UpcomingAppointment';
import AvailableSlot from './src/screens/AvailableSlot';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={AvailableSlot}  options={{ headerShown: false }}/>
      <Stack.Screen name="map" component={Map}  options={{ headerShown: false }}/>
      <Stack.Screen name="details" component={Details_Page}  options={{ headerShown: false }}/>
      <Stack.Screen name="chose_doctor" component={ChoseDoctor}  options={{ headerShown: false }}/>
      <Stack.Screen name="upcoming_appointment" component={UpcomingAppointment}  options={{ headerShown: false }}/>
      <Stack.Screen name="available_slot" component={AvailableSlot}  options={{ headerShown: false }}/>       
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

