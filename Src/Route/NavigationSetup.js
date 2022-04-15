/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import WelcomeScreen1 from '../Screens/WelcomeScreen1';
import WelcomeScreen2 from '../Screens/WelcomeScreen2';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import PopUp from '../Screens/Popup';
import Calander from '../Screens/Calander';
import Drawer from './Drawer';
import Notification from '../Screens/Notification';
import PopUp2 from '../Screens/Popup2';
import ForgotPassword from '../Screens/ForgorPassword';
import { useEffect } from 'react';
import DataManager from '../Support/DataManager';
import { useState } from 'react';
import Fetch from '../Redux/Fetch';
import Detector2 from '../Screens/Detector/Detector';
import ErrorPopUp from '../Screens/ErrorPop';
import ChangePassword from '../Screens/ChangePassword';

const Stack = createStackNavigator();

const Route = (props) => {
const [signIn,setSignedIn]=useState(null)
  useEffect(()=>{
    session()
   },[])
 
   const session=async()=>{
     let accessTokenData = await DataManager.getAccessToken();
     console.log('access token' , accessTokenData)
     if (accessTokenData != null) {
                Fetch.setToken(JSON.parse(accessTokenData))
         setSignedIn("Home")
       

     }
     else {
       // no access token
       setSignedIn("WelcomeScreen1")
     }
   }

  return (signIn&&
    <NavigationContainer>
      <Stack.Navigator initialRouteName={signIn}>
      
        <Stack.Screen
          name="WelcomeScreen2"
          component={WelcomeScreen2}
          options={{
            header: () => null,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="WelcomeScreen1"
          component={WelcomeScreen1}
          options={{
            header: () => null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            header: () => null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Drawer}
          options={{
            header: () => null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            header: () => null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="PopUp"
          component={PopUp}
          options={{
            header: () => null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="PopUp2"
          component={PopUp2}
          options={{
            header: () => null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="ErrorPopUp"
          component={ErrorPopUp}
          options={{
            header: () => null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Detector2"
          component={Detector2}
          options={{
            header: () => null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Calander"
          component={Calander}
          options={{
            header: () => null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{
            header: () => null,
            gestureEnabled: false,
          }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Route;
