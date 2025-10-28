import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../AuthStack/SplashScreen';
import LoginScreen from '../AuthStack/LoginScreen';
import SignUpScreen from '../AuthStack/SignUpScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import DetailScreen from '../Screens/Detail/DetailScreen';
import PaymentScreen from '../Screens/Payment/PaymentScreen';
import OrderConfirmScreen from '../Screens/OrderConfirm/OrderConfirmScreen';
import OrderActiveScreen from '../Screens/OrderActive/OrderActiveScreen';
import OrderCompleteScreen from '../Screens/OrderComplete/OrderCompleteScreen'
import LaundryService from '../Screens/LaundryService';
import OrderDetailsScreen from "../Screens/OrderDetails/OrderDetailsScreen";
import TextScreen from "../Screens/TextScreen";
import TextScreen2 from "../Screens/TextScreen2";
import LaundryDetailScreen from "../Screens/LaundryDetail/LaundryDetailScreen"







const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          unmountOnBlur: true,
          orientation: 'portrait',
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="LaundryDetailScreen" component={LaundryDetailScreen} />
        <Stack.Screen
          name="OrderConfirmScreen"
          component={OrderConfirmScreen}
        />
        <Stack.Screen name="OrderActiveScreen" component={OrderActiveScreen} />
        <Stack.Screen
          name="OrderCompleteScreen"
          component={OrderCompleteScreen}
        />
        <Stack.Screen name="LaundryService" component={LaundryService} />
        <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="TextScreen2" component={TextScreen2} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
