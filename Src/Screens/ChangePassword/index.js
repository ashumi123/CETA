import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ActionSheetIOS, ScrollView, Dimensions, Keyboard } from 'react-native';
// import font from '../../Theme/font';
import TextInputFeild from '../../Component/TextInputField'
import Button from '../../Component/Button'
import styles from './style';
import { useDispatch } from 'react-redux';
import { changeAction, forgotAction, loginAction } from '../../Redux/Action/AuthenticationAction';
import { SkypeIndicator } from 'react-native-indicators'
import { useSelector } from 'react-redux';
import Header from '../../Component/Header/Header';

const ChangePassword = (props) => {
  const authState = useSelector(state => state.forgotReducer)
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setnewPassword] = useState('')
  const [conPassword, setConPassword] = useState('')
  const inputRef1 = useRef()
  const inputRef2 = useRef()
  const inputRef3 = useRef()
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
      <ScrollView>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ebebeb' }}>
          <StatusBar backgroundColor="#ebebeb" barStyle="dark-content" />
          <Header
            secondImgPress={() => null}
            backTextStyle={{ color: '#c85a2e', marginLeft: 5 }}
            backIcon={{ height: 15, width: 15 }}
            textButton={'back'}
            iconPress={() => props.navigation.goBack()}
            rightImage2={null}
            rightImage1={null}
            backButton
            iconName={require('../../Assets/back.png')}
            title='Change Password'
          />
          <View style={styles.mainWrapper}>
            <View style={styles.logo}>
              <Image
                resizeMode={'contain'}
                style={{ width: '80%', height: 120 }}
                source={require('../../Assets/logo.png')}
              />
            </View>




            <TextInputFeild
              onSubmitEditing={() => {
                inputRef2.current.focus()
              }}
              onRef={inputRef1}
              returnKeyType='next'
              onChangeText={(t) => {
                setPassword(t)
              }}
              secureTextEntry
              placeholder='Old Password'
            />
            <TextInputFeild
              onSubmitEditing={() => {
                inputRef3.current.focus()
              }}
              onRef={inputRef2}
              returnKeyType='next'
              onChangeText={(t) => {
                setnewPassword(t)
              }}
              secureTextEntry
              placeholder='New Password'
            />
            <TextInputFeild
              onSubmitEditing={() => {
                Keyboard.dismiss()
              }}
              onRef={inputRef3}
              returnKeyType='done'
              onChangeText={(t) => {
                setConPassword(t)
              }}
              secureTextEntry
              placeholder='Confirm Password'
            />

            <View style={{ marginTop: "5%", width: '100%', alignItems: 'center' }}>
              <Button
                onPress={() => {
                  if(password.trim().length==0){
                    alert('Please enter old password.')
                  }
                  else if(newPassword.trim().length==0){
                    alert('Please enter new password.')
                  }
                  else if(newPassword!==conPassword){
                    alert('New password and confirm password should be same.')
                  }
                  else{

                    dispatch(changeAction(password,newPassword, props.navigation))
                  }
                  // props.navigation.navigate('Home')
                }}
                text={'Change Password'}
              />
            </View>



          </View>
        </SafeAreaView>
      </ScrollView>

    </View>
  );
}

export default ChangePassword