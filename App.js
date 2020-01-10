import React from 'react';
import SignupScreen from './src/screens/Signup';
import SigninScreen from './src/screens/Signin';
import AccountScreen from './src/screens/Account';
import TrackCreateScreen from './src/screens/TrackCreate';
import TractDetailScreen from './src/screens/TrackDetail';
import TractListScreen from './src/screens/TrackList';
import ResolvingAuth from './src/components/ResolvingAuth';
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createBottomTabNavigator } from 'react-navigation-tabs';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {setNavigator} from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
  ResolvingAuth : ResolvingAuth,
  loginFlow : createStackNavigator({
    SignUp : SignupScreen,
    SignIn : SigninScreen
  },/*{
    mode : 'modal'
  }*/),
  mainFlow : createBottomTabNavigator({
    trackListFlow : createStackNavigator({
      TrackList : TractListScreen,
      TrackDetail : TractDetailScreen
    },/* {
      mode : 'modal'
    } */),
    TrackCreate : TrackCreateScreen,
    Account  : AccountScreen
  })

});

const App =  createAppContainer(switchNavigator);

export default ()=> {
  return (
    <LocationProvider>
      <AuthProvider>
          <App
            ref = {(navigator)=> { setNavigator(navigator) }}
          />
      </AuthProvider>
      </LocationProvider>
  
  );
}