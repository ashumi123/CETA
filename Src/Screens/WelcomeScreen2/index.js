import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ActionSheetIOS, ScrollView } from 'react-native';
// import font from '../../Theme/font';
import TextInputFeild from '../../Component/TextInputField'
import Button from '../../Component/Button'
import styles from './style';


const WelcomeScreen2 = ({navigation}) => {

    return (
      <>
      <ScrollView>
        <SafeAreaView style={{flex: 1,backgroundColor:'#ebebeb'}}>
          <StatusBar backgroundColor="#ebebeb" barStyle="dark-content" />
          <View style={styles.mainWrapper}>
            <View style={styles.logo}>
              <Image
                resizeMode={'contain'}
                style={{width: '80%', height: 120}}
                source={require('../../Assets/logo.png')}
              />
            </View>

            <Text style={[{
              fontSize:22,
              fontWeight:'bold',
              color:'#06311e'}]}> REGISTER </Text>
                

        <TouchableOpacity style={{
          marginTop:40,
          borderWidth:1,
          alignItems:'center',
          justifyContent:'center',
          borderColor:'#c85a2e',height:120,width:120,borderRadius:60}}>
          <Image style={{height:80,width:80}} source={require('../../Assets/profilePic.png')} />
        </TouchableOpacity>

       <TextInputFeild
       placeholder='User Name'
       />
       <TextInputFeild
       placeholder='Name'
       />
       <TextInputFeild
       placeholder='Email'
       />
       <TextInputFeild
       secureTextEntry
       placeholder='Password'
       />
       <TextInputFeild
       secureTextEntry
       placeholder='Confirm Password'
       />

    <View style={{marginTop:"5%",width:'100%',alignItems:'center'}}>
<Button
onPress={()=>{}}
text={'Register'}
/>
</View>            


            
          </View>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.serviceButton}>
              <Text
                style={[
                  styles.welcomeText,
                  {fontSize: 15,
                    //  fontFamily: font.PoppinsMedium
                    },
                ]}>
                Already have account ?
                <Text style={styles.signText}> Sign-in </Text>
                
              </Text>
            </TouchableOpacity>
      </>
    );
}

export default WelcomeScreen2