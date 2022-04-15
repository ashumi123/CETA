import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ActionSheetIOS, ScrollView, ImageBackground, FlatList, Dimensions } from 'react-native';
// import font from '../../Theme/font';
import TextInputFeild from '../../Component/TextInputField'
import Button from '../../Component/Button'
import styles from './style';
import JobCard from '../../Component/JobCard';
import Header from '../../Component/Header/Header'
import Geocoder from 'react-native-geocoder';
import { useDispatch } from 'react-redux';
import { getLocation } from '../../Redux/Action/AuthenticationAction';




const PopUp = (props) => {
  const [location,setLocation]=useState(null)
  const  dispatch=useDispatch()

  const position=props.route.params.position 
      useEffect(async()=>{
            console.log('r',props.route.params.position);
            Geocoder.fallbackToGoogle("AIzaSyBjKN72hwThWyq_WoLvDb2DfXlc0rBr7Uk");
            let ret = await Geocoder.geocodePosition({lat:position.latitude, lng:position.longitude})
            console.log('ret',ret);
            setLocation(ret[0])
      
          },[])
 



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
<Text style={[styles.signText,{fontSize:28,color:'white',fontWeight:'bold',textAlign:'center'}]}> {location?.locality} </Text>
<Text numberOfLines={1} style={[styles.signText,{color:'white',width:'100%',textAlign:'center'}]}>{location?.formattedAddress} </Text>
                <View style={{marginTop:20,width:Dimensions.get('screen').width*0.9,alignItems:'center'}}>
                <Button
                onPress={()=>{
                  dispatch(getLocation(position.latitude,position.longitude,props.navigation))
                }}
                text={'Confirm Location'}
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

export default PopUp