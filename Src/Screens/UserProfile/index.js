import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ActionSheetIOS, ScrollView, ImageBackground, FlatList } from 'react-native';
// import font from '../../Theme/font';
import TextInputFeild from '../../Component/TextInputField'
import Button from '../../Component/Button'
import styles from './style';
import JobCard from '../../Component/JobCard';
import Header from '../../Component/Header/Header'
import { useSelector } from 'react-redux';
const data = [
  {
    image: require('../../Assets/Group163.png'),
    heading: '10:30am',
    subHeading: 'Thursday, 18 december 2021',
  },
  {
    image: require('../../Assets/Group163.png'),
    heading: '10:30am',
    subHeading: 'Thursday, 18 december 2021',
  },
  {
    image: require('../../Assets/Group163.png'),
    heading: '10:30am',
    subHeading: 'Thursday, 18 december 2021',
  },
  {
    image: require('../../Assets/Group163.png'),
    heading: '10:30am',
    subHeading: 'Thursday, 18 december 2021',
  },
  {
    image: require('../../Assets/Group163.png'),
    heading: '10:30am',
    subHeading: 'Thursday, 18 december 2021',
  },
  {
    image: require('../../Assets/Group163.png'),
    heading: '10:30am',
    subHeading: 'Thursday, 18 december 2021',
  },
]



const UserProfile = (props) => {
  const  homeState=useSelector(state=>state.interestReducer)

  const renderItem = ({ item, index }) => {

    return (
      <JobCard
        image={item.image}
        text1={homeState?.profileData?.first_name}
        text2={item.subHeading}
      />
    )
  }

  const newAddedTexts=(title,value)=>{
    return(
      <>
      <View
        style={{
          marginTop: 20,
          width: '100%',
          flexDirection: 'row',
          borderBottomWidth:0.5,
          borderBottomColor:'gray',
          paddingBottom:10

          // height:'85%',
        }}
      >
       <View style={{ alignSelf: "center" }}>
          <Text style={[styles.signText, {color: 'black',fontWeight:'600' }]}> {title} </Text>
          <Text style={[styles.signText, {  paddingVertical: 5,  }]}> {value}  </Text>

        </View>

      </View>
      </>
    )
  }

  return (
    <>
      <ScrollView>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ebebeb' }}>
          <Header
            iconPress={() => props.navigation.openDrawer()}
            secondImgPress={() => props.navigation.navigate('Notification')}
            right1ImagePress={() => props.navigation.navigate('Calander')}
            rightImage1={require('../../Assets/calander.png')}
            rightImage2={require('../../Assets/notification.png')}
            backButton
            iconName={require('../../Assets/Group165.png')}
            title={homeState?.profileData?.first_name}
          />
          <StatusBar backgroundColor="#ebebeb" barStyle="dark-content" />
          <View style={styles.mainWrapper}>

            <View
              style={{
                marginTop: 20,
                width: '100%',
                flexDirection: 'row',
                paddingVertical: 20,
                borderBottomWidth:0.5,
                borderBottomColor:'gray'
                // height:'85%',
              }}
            >
              <View>
                <Image
                  resizeMode="cover"
                  style={{ height: 50, width: 50,borderRadius:25 }}
                  source={{uri:homeState?.profileData?.profile_picture}}
                />
              </View>
              <View style={{ alignSelf: "center" }}>
                <Text style={[styles.signText, { fontSize: 18, fontWeight: 'bold' }]}> {homeState?.profileData?.first_name} </Text>
                {homeState?.profileData?.country_name&&<Text style={[styles.signText, { color: 'black', paddingVertical: 5, fontWeight: 'bold' }]}> {homeState?.profileData?.country_name} </Text>}

              </View>

            </View>

            
            <View
              style={{
                marginTop: 20,
                width: '100%',
                flexDirection: 'row',
                borderBottomWidth:0.5,
                borderBottomColor:'gray',
                paddingBottom:10
                // height:'85%',
              }}
            >
            
              <View style={{ alignSelf: "center" }}>
                <Text style={[styles.signText, {color:'black', fontWeight:'600' }]}> Email Address </Text>
                <Text style={[styles.signText, {  paddingVertical: 5, }]}> {homeState?.profileData?.email} </Text>

              </View>

            </View>

            {<View
              style={{
                marginTop: 20,
                width: '100%',
                flexDirection: 'row',
                borderBottomWidth:0.5,
                borderBottomColor:'gray',
                paddingBottom:10

                // height:'85%',
              }}
            >
             <View style={{ alignSelf: "center" }}>
                <Text style={[styles.signText, {color: 'black',fontWeight:'600' }]}> Country </Text>
                <Text style={[styles.signText, {  paddingVertical: 5,  }]}> {homeState?.profileData?.country_name}  </Text>

              </View>

            </View>}

            
            
            {newAddedTexts('Address1',homeState?.profileData?.address1)}
            {newAddedTexts('Address2',homeState?.profileData?.address2)}
            {newAddedTexts('City',homeState?.profileData?.city_name)}
            {newAddedTexts('State Name',homeState?.profileData?.state_name)}
            {newAddedTexts('Bank Account Number',homeState?.profileData?.bank_account_no)}
            {newAddedTexts('Bank Name',homeState?.profileData?.bank_name)}
            {newAddedTexts('card Number',homeState?.profileData?.card_number)}
            {newAddedTexts('Face Id',homeState?.profileData?.face_id)}
            {newAddedTexts('Provincial Office Name',homeState?.profileData?.provincial_office_name)}
            {newAddedTexts('Site Name',homeState?.profileData?.site_name)}
            {newAddedTexts('C Mobile Number',homeState?.profileData?.cmobile_number)}
            {newAddedTexts('Service Provider Name',homeState?.profileData?.service_provider_name)}
            {newAddedTexts('Per Day Stipend',homeState?.profileData?.per_day_stipend)}
            {newAddedTexts('Student Id',homeState?.profileData?.student_id)}
            {newAddedTexts('Qualification',homeState?.profileData?.qualification)}
            {newAddedTexts('Intervention',homeState?.profileData?.intervention)}
            {newAddedTexts('National Id',homeState?.profileData?.national_id)}
            
            
            
            
            <View
              style={{
                marginTop: 20,
                width: '100%',
                flexDirection: 'row',
                paddingBottom:10
                
                // height:'85%',
              }}
            >
             <View style={{ alignSelf: "center" }}>
                <Text style={[styles.signText, {color: 'black', fontWeight:'600' }]}> Phone </Text>
                <Text style={[styles.signText, {  paddingVertical: 5,  }]}>{homeState?.profileData?.phone}</Text>

              </View>

            </View>




          </View>
          <View style={{ marginTop: "2%",marginBottom:'2%', width: '100%', alignItems: 'center' }}>

<Button
  onPress={() => {props.navigation.navigate('ChangePassword')  }}
  text={'Change Password'}
/>
</View>

        </SafeAreaView>
      </ScrollView>

    </>
  );
}

export default UserProfile