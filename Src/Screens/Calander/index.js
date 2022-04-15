import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ActionSheetIOS, ScrollView, ImageBackground, FlatList, Dimensions } from 'react-native';
// import font from '../../Theme/font';
import TextInputFeild from '../../Component/TextInputField'
import Button from '../../Component/Button'
import styles from './style';
import JobCard from '../../Component/JobCard';
import Header from '../../Component/Header/Header'
import {Calendar, CalendarList, LocaleConfig} from 'react-native-calendars';
import { useDispatch, useSelector } from 'react-redux';
import {getcalanderData}from '../../Redux/Action/InterestAction'




const Calander = (props) => {

  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};
  const dispatch = useDispatch()
  const homeState = useSelector(state => state.interestReducer)

  React.useEffect(() => {
      dispatch(getcalanderData(new Date().getMonth()+1,new Date().getFullYear(),props.navigation))
  }, []);

    return (
      <>
      
        <View style={{flex: 1,backgroundColor:'#ebebeb'}}>
        <Header
        Calander
        backIcon={{tintColor:'white'}}
        containerStyle={{backgroundColor:'#c85a2e'}}
        backTextStyle={{color:'#fff',marginLeft:5}}
        backIcon={{height:15,width:15}}
        textButton={'back'}
        iconPress={()=>props.navigation.goBack()}
        // rightImage2={require('../../Assets/calander.png')}
        rightImage1={null}
        iconStyle={{tintColor:'white'}}
        backButton
        iconName={require('../../Assets/back.png')}
        // title='User Name'
        />
          <StatusBar hidden backgroundColor="#ebebeb" barStyle="dark-content" />
 
      
          {homeState.calander &&<Calendar
          
          showSixWeeks
          hideArrows
          selectedDotColor
          day={homeState.calander}
          markedDates={homeState.calander}
          //  dayComponent={({date, state}) => {
          //   return (
          //     <View style={{
          //       borderBottomWidth:0.5,
          //       borderLeftWidth:0.5,
          //       height: 60,
          //       width:60,
          //       backgroundColor:
          //       state === 'today'||date.day==14 ? '#c85a2e' :
          //       date.day>7&&date.day<14?"silver":
          //       'white',alignItems:'center',justifyContent:'center'}}>
          //       <Text style={{textAlign: 'center', color: state === 'today'||date.day==14 ? 'white' : 'black'}}>{date.day}</Text>
          //     </View>
          //   );
          // }}

/>}



</View>
      </>
    );
}

export default Calander