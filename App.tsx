import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screen/Auth/Welcome';
import SignUp from './src/screen/Auth/SignUp';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Signin from './src/screen/Auth/Signin';
import Home from './src/screen/Auth/Main/Home';
import addData from './src/screen/Auth/Main/addData';
// import addLocation from './src/screen/Auth/Main/addLocation';
import mapView from './src/screen/Auth/Main/mapView';
import ViewData from './src/screen/Auth/Main/viewData';
import mapSelect from './src/screen/Auth/Main/mapSelect';
import StudentDetailScreen from './src/screen/Auth/Main/StudentDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="addData" component={addData} />
        <Stack.Screen name="mapView" component={mapView} />
        <Stack.Screen name="ViewData" component={ViewData} />
        <Stack.Screen name="mapSelect" component={mapSelect} />
        <Stack.Screen name="StudentDetail" component={StudentDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
