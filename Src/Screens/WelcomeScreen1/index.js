import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ActionSheetIOS, ScrollView, Dimensions, Keyboard, AsyncStorage, Platform } from 'react-native';
// import font from '../../Theme/font';
import TextInputFeild from '../../Component/TextInputField'
import Button from '../../Component/Button'
import styles from './style';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../Redux/Action/AuthenticationAction';
import { SkypeIndicator } from 'react-native-indicators'
import { useSelector } from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import DeviceInfo from 'react-native-device-info'
const WelcomeScreen1 = (props) => {

  const inputRef1 = useRef()
  const inputRef2 = useRef()
  const authState = useSelector(state => state.loginReducer)
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')


  useEffect(()=>{
    const unsubscribe = props.navigation.addListener('focus', () => {
   if(Platform.OS=='ios'){
     DeviceInfo.getDeviceToken().then((res)=>{
      AsyncStorage.setItem('fcmToken', JSON.stringify(res))
      console.log('A new FCM message arrived!', res);
     })
   }
   else{

    messaging().getToken().then((remoteMessage)=>{

      AsyncStorage.setItem('fcmToken', JSON.stringify(remoteMessage))
      console.log('A new FCM message arrived!', remoteMessage);
    })
  }
  })
  return unsubscribe;
  },[])
  return (

    <View style={{ flex: 1, backgroundColor: '#ebebeb' }}>
      {authState.onLoad ?
        <View style={{
          height: '100%', width: '100%', backgroundColor: 'rgba(52, 52, 52, 0.4)'
          , position: 'absolute', zIndex: 5
        }}>
          <View style={{ marginTop: 300 }}>
            <SkypeIndicator color='white' />
          </View>
        </View>
        : null}
      <ScrollView keyboardShouldPersistTaps='always'>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: '#ebebeb' }}>
          <StatusBar backgroundColor="#ebebeb" barStyle="dark-content" />
          <View style={styles.mainWrapper}>
            <View style={styles.logo}>
              <Image
                resizeMode={'contain'}
                style={{ width: '80%', height: 120 }}
                source={require('../../Assets/logo.png')}
              />
            </View>

            <Text style={[{ fontSize: 22, fontWeight: 'bold', color: '#06311e' }]}> LOGIN </Text>



            {/* <View style={{flex:0.25}}> */}
            <Image
              resizeMode="contain"
              style={{ height: Dimensions.get('screen').height * 0.3, width: '100%' }}
              source={require('../../Assets/keylock.png')}
            />

            {/* </View> */}

            <TextInputFeild
              onSubmitEditing={() => {
                inputRef2.current.focus()
              }}
              onRef={inputRef1}
              returnKeyType='next'
              keyboardType='numeric'
              onChangeText={(t) => {
                setUserName(t)
              }}
              placeholder='National ID'
            />
            <TextInputFeild
              onSubmitEditing={() => {
                Keyboard.dismiss()
              }}
              onRef={inputRef2}
              returnKeyType='done'
              onChangeText={(t) => {
                setPassword(t)
              }}
              secureTextEntry
              placeholder='Password'
            />

            <Text onPress={() => {
              props.navigation.navigate('ForgotPassword')
            }} style={[styles.signText, { color: '#a64b37', marginTop: 20, textDecorationLine: 'underline' }]}> Forgot Password </Text>
            <View style={{ marginTop: "5%", width: '100%', alignItems: 'center' }}>
              <Button
                onPress={() => {
                  if(userName.length==0){
                    alert('Please enter National ID.')
                  }
                  else if(password.length==0){
                    alert('Please enter password.')
                  }
                  else{
                    dispatch(loginAction(userName, password, props.navigation))
                  }
              
                }}
                text={'Login'}
              />
            </View>



          </View>
        </SafeAreaView>
      </ScrollView>
      {/* <TouchableOpacity
              onPress={() => props.navigation.navigate('WelcomeScreen2')}
              style={styles.serviceButton}>
              <Text
                style={[
                  styles.welcomeText,
                  {fontSize: 15,
                    //  fontFamily: font.PoppinsMedium
                    },
                ]}>
                Do not have account ?
                <Text style={styles.signText}> Sign-up </Text>
                Here
              </Text>
            </TouchableOpacity> */}
    </View>
  
  );
}

export default WelcomeScreen1