import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, SafeAreaView, StatusBar,Alert, Image, TextInput, TouchableOpacity, ActionSheetIOS, ScrollView, ImageBackground, FlatList, Dimensions } from 'react-native';
// import font from '../../Theme/font';
import TextInputFeild from '../../Component/TextInputField'
import Button from '../../Component/Button'
import styles from './style';
import JobCard from '../../Component/JobCard';
import Header from '../../Component/Header/Header'
import NotificationCard from '../../Component/NotificationCard';
import {getNotification,readNotifcation,deleteNotifcation} from '../../Redux/Action/InterestAction';
import { useDispatch,useSelector } from 'react-redux';
import { SkypeIndicator } from 'react-native-indicators';
const data=[
  {
    image:require('../../Assets/Group163.png'),
    heading:'Notification title',
    subHeading:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    image:require('../../Assets/Group163.png'),
    heading:'Notification title',
    subHeading:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    image:require('../../Assets/Group163.png'),
    heading:'Notification title',
    subHeading:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    image:require('../../Assets/Group163.png'),
    heading:'Notification title',
    subHeading:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    image:require('../../Assets/Group163.png'),
    heading:'Notification title',
    subHeading:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    image:require('../../Assets/Group163.png'),
    heading:'Notification title',
    subHeading:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
]



const Notification = (props) => {
  const dispatch=useDispatch()
  const homeState = useSelector(state => state.interestReducer)
  const renderItem=({item,index})=>{
    
    return(
      <NotificationCard
      crossPress={()=>{
        Alert.alert(
          'Alert',
          'Are you sure, do you want to delete this notification',
          [
            {
              text:'Yes',
              onPress:()=>{dispatch(deleteNotifcation(item.id,props.navigation))}
            },
            {
              text:'No',
              
            }
          ]
        )
        }}
      onPress={()=>{dispatch(readNotifcation(item.id,props.navigation))}}
      read_status={item.read_status}
      image={require('../../Assets/Group163.png')}
      text1={item.notification_title}
      text2={item.notification_text}
      notification_date={item.notification_date}
      />
    )
  }

  useEffect(()=>{
    dispatch(getNotification())
  },[])

    return (
      <>
       {homeState.onLoad ?
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
        <SafeAreaView style={{flex: 1,backgroundColor:'#ebebeb'}}>
        <Header
        // secondImgPress={()=>props.navigation.navigate('Notification')}
        iconPress={()=> props.navigation.openDrawer?props.navigation.openDrawer():props.navigation.goBack()}
        // secondImgPress={()=>props.navigation.navigate('Calander')}
        // rightImage2={require('../../Assets/calander.png')}
        // rightImage2={require('../../Assets/notification.png')}
        backButton
        iconName={require('../../Assets/Group165.png')}
        title=' '
        />
          <StatusBar backgroundColor="#ebebeb" barStyle="dark-content" />
          <View style={styles.mainWrapper}>
                      
<FlatList
ListEmptyComponent={()=>{
  return(
    <View style={{height:Dimensions.get('screen').height,width:'100%',alignItems:'center',marginTop:'60%',backgroundColor: '#ebebeb'}}>
      <Text>No notification found.</Text>
      </View>
  )
}}
data={homeState.notification}
renderItem={renderItem}
/>

            
          </View>
        </SafeAreaView>
      </ScrollView>
 
      </>
    );
}

export default Notification