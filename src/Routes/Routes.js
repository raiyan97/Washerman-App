
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../AuthStack/SplashScreen";
import LoginScreen from "../AuthStack/LoginScreen"
import SignUpScreen from "../AuthStack/SignUpScreen"
import HomeScreen from "../Screens/Home/HomeScreen"
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          unmountOnBlur: true,
          orientation:'portrait'
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />



      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;