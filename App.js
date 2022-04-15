/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import  firebase  from '@react-native-firebase/app';

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import NavigationSetup from './Src/Route/NavigationSetup';

import SplashScreen from 'react-native-splash-screen';
import KeyboardManager from 'react-native-keyboard-manager';
import { Provider } from 'react-redux'
import { ConfigureStore } from './ConfigureStore';
import messaging from '@react-native-firebase/messaging';
const store = ConfigureStore()

const App = () => {



  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    requestUserPermission()

    firebase.apps.length==0&&
  firebase.initializeApp({
        clientId:'611969168057-u0edhd103ehn7ivnktruaokhmja8dkbu.apps.googleusercontent.com',
        databaseURL:'ceta-6a28b.appspot.com',
        storageBucket:'ceta-6a28b.appspot.com',
        apiKey: 'AIzaSyCIL1Fl7JrDdUXJxZPUbxMvcE9Q0_QuRlc',
        projectId: 'ceta-6a28b',
        messagingSenderId: '611969168057',
        appId: '1:611969168057:android:188626e4c91d7d9b7e2168',
     }).then(()=>{
       console.log('initilized success');
       
     }).catch((e)=>{
      console.log('initilized faild',e);
     });
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000);
  }, [])

  useEffect(() => {
    const unsubscribe = messaging().getToken().then((remoteMessage)=>{

      AsyncStorage.setItem('fcmToken', JSON.stringify(remoteMessage))
      console.log('A new FCM message arrived!', remoteMessage);
    })

    return unsubscribe;
  }, []);


  if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    KeyboardManager.setEnableDebugging(false);
    KeyboardManager.setKeyboardDistanceFromTextField(10);
    KeyboardManager.setLayoutIfNeededOnUpdate(true);
    KeyboardManager.setEnableAutoToolbar(true);
    KeyboardManager.setToolbarDoneBarButtonItemText("Done");
    KeyboardManager.setToolbarManageBehaviourBy("subviews"); // "subviews" | "tag" | "position"
    KeyboardManager.setToolbarPreviousNextButtonEnable(false);
    KeyboardManager.setToolbarTintColor('#0000FF'); // Only #000000 format is supported
    KeyboardManager.setToolbarBarTintColor('#FFFFFF'); // Only #000000 format is supported
    KeyboardManager.setShouldShowToolbarPlaceholder(true);
    KeyboardManager.setOverrideKeyboardAppearance(false);
    KeyboardManager.setKeyboardAppearance("default"); // "default" | "light" | "dark"
    KeyboardManager.setShouldResignOnTouchOutside(true);
    KeyboardManager.setShouldPlayInputClicks(true);
    KeyboardManager.resignFirstResponder();
    KeyboardManager.isKeyboardShowing()
      .then((isShowing) => {
        // ...
      });
  }

  return (
    <>
      <Provider store={store} >
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <NavigationSetup />
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
