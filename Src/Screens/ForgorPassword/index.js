import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ActionSheetIOS, ScrollView, Dimensions } from 'react-native';
// import font from '../../Theme/font';
import TextInputFeild from '../../Component/TextInputField'
import Button from '../../Component/Button'
import styles from './style';
import { useDispatch } from 'react-redux';
import { forgotAction, loginAction } from '../../Redux/Action/AuthenticationAction';
import {  SkypeIndicator } from 'react-native-indicators'
import { useSelector } from 'react-redux';
import Header from '../../Component/Header/Header';

const ForgotPassword = (props) => {
  const authState=useSelector(state=>state.forgotReducer)
  const dispatch=useDispatch();
  const [userName, setUserName]=useState('')
  const [password, setPassword]=useState('')
    return (
      <View style={{flex:1,backgroundColor:'#ebebeb'}}>
      {authState.onLoad?
       <View style={{  height: '100%', width: '100%',backgroundColor: 'rgba(52, 52, 52, 0.4)'
, position:'absolute' , zIndex: 5 }}>
  <View style={{marginTop: 300}}>
      <SkypeIndicator color='white' />
      </View>
      </View>
      : null}
      <ScrollView>
        <SafeAreaView style={{flex: 1,backgroundColor:'#ebebeb'}}>
          <StatusBar backgroundColor="#ebebeb" barStyle="dark-content" />
          <Header
        secondImgPress={()=>null}
        backTextStyle={{color:'#c85a2e',marginLeft:5}}
        backIcon={{height:15,width:15}}
        textButton={'back'}
        iconPress={()=>props.navigation.goBack()}
        rightImage2={null}
        rightImage1={null}
        backButton
        iconName={require('../../Assets/back.png')}
        title='Forgot Password'
        />
          <View style={styles.mainWrapper}>
            <View style={styles.logo}>
              <Image
                resizeMode={'contain'}
                style={{width: '80%', height: 120}}
                source={require('../../Assets/logo.png')}
              />
            </View>

            <Text style={[{fontSize:22,fontWeight:'bold',color:'#06311e'}]}> Forgot Password </Text>
                


            {/* <View style={{flex:0.25}}> */}
            <Image
              resizeMode="contain"
              style={{height: Dimensions.get('screen').height*0.3, width: '100%'}}
              source={require('../../Assets/keylock.png')}
            />

            {/* </View> */}

       <TextInputFeild
       onChangeText={(t)=>{
         setUserName(t)
       }}
       placeholder='Email'
       />
      
    <View style={{marginTop:"5%",width:'100%',alignItems:'center'}}>
<Button
onPress={()=>{
  dispatch(forgotAction(userName,props.navigation))
  // props.navigation.navigate('Home')
}}
text={'Forgot Password'}
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

export default ForgotPassword