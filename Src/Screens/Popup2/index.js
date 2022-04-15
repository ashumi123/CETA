import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ActionSheetIOS, ScrollView, ImageBackground, FlatList, Dimensions } from 'react-native';
// import font from '../../Theme/font';
import TextInputFeild from '../../Component/TextInputField'
import Button from '../../Component/Button'
import styles from './style';
import JobCard from '../../Component/JobCard';
import Header from '../../Component/Header/Header'
import { useSelector } from 'react-redux';




const PopUp2 = (props) => {

 
  const  homeState=useSelector(state=>state.interestReducer)

  
    return (
      <>
      
        <View style={{flex: 1,backgroundColor:'#ebebeb'}}>
        <Header
        // secondImgPress={()=>props.navigation.navigate('Calander')}
        backTextStyle={{color:'#c85a2e',marginLeft:5}}
        backIcon={{height:15,width:15}}
        textButton={'back'}
        iconPress={()=>props.navigation.goBack()}
        // rightImage2={require('../../Assets/calander.png')}
        rightImage1={null}
        backButton
        iconName={require('../../Assets/back.png')}
        // title='User Name'
        />
          <StatusBar hidden backgroundColor="#ebebeb" barStyle="dark-content" />
          <View style={styles.mainWrapper}>
            <View style={{width:'100%'}}>
               <View
                
                style={{
                  borderRadius:5,
                  width:'90%',
                flexDirection:'row',
                paddingVertical:30,
                alignSelf:"center",
                backgroundColor:"#a64b37",
                paddingHorizontal:30
               }}
               >
                
            <View style={{alignSelf:"center",alignItems:'center',justifyContent:'center',width:'100%'}}>
<Text style={[styles.signText,{fontSize:22,textAlign:'center',color:'white',}]}> {'Hi, '+ homeState?.profileData?.first_name} </Text>
<Text style={[styles.signText,{fontSize:22,textAlign:'center',color:'white',}]}> Your Location Has Been Matched Successfully </Text>

                <View style={{marginTop:20,width:Dimensions.get('screen').width*0.9,alignItems:'center'}}>
                <Button
                // onPress={()=>{props.navigation.navigate('Calander')}}
                onPress={()=>{props.navigation.navigate('Detector2',{faceId:homeState.face_id,location_id:props.route.params.location_id})}}
                text={'Move to face Recognization'}
                buttonStyle={{borderWidth:1,borderColor:'white'}}
                />
                </View>
            </View>
            
                </View>
                </View>



           

     

            
          </View>
        </View>
      
 
      </>
    );
}

export default PopUp2