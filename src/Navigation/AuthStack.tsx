import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createStackNavigator, StackNavigationOptions, StackNavigationProp  } from '@react-navigation/stack';
import LoginScreen  from '../Screens/Auth/Login/LoginScreen'
import OtpScreen from '../Screens/Auth/Otp/OtpScreen'
import PersonalDetailsScreen from '../Screens/Auth/PersonalDetails/PersonalDetailsScreen';
import { RouteProp } from '@react-navigation/native';
import Home from '../Screens/App/Home/Home';

// interface Iperson {
//     LoginScreen: undefined;
//     OtpScreen: undefined;
//     PersonalDetailsScreen: undefined;
//     Home:undefined
//   }
  
//   type RootStackParamList = {
//     LoginScreen: undefined;
//     OtpScreen: undefined;
//     PersonalDetailsScreen: undefined;
//     Home:undefined

//   };

//   type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;
// type LoginScreenRouteProp = RouteProp<RootStackParamList, 'LoginScreen'>;

// interface LoginScreenProps {
//   navigation: LoginScreenNavigationProp;
//   route: LoginScreenRouteProp;
// }

const Stack = createStackNavigator();

// interface LoginScreenProps {
//     navigation: LoginScreenNavigationProp;
//     route: LoginScreenRouteProp;
//   }
  

 

  class AuthStack extends Component  {
  render() {
    return (

        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
        >
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='OtpScreen' component={OtpScreen}/>
            <Stack.Screen name='PersonalDetailsScreen' component={PersonalDetailsScreen}/>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    )
  }
}

export default AuthStack