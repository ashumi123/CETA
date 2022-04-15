import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ActionSheetIOS, ScrollView, ImageBackground, FlatList, BackHandler, Dimensions, AsyncStorage, Alert, Platform, Modal, TouchableHighlight, Pressable } from 'react-native';
// import font from '../../Theme/font';
import TextInputFeild from '../../Component/TextInputField'
import Button from '../../Component/Button'
import styles from './style';
import JobCard from '../../Component/JobCard';
import Header from '../../Component/Header/Header'
import { useDispatch, useSelector } from 'react-redux';
import { getEntriesAction, getProfileAction, monthStipend, checkedOutAction } from '../../Redux/Action/ProfileAction';
import Geolocation from 'react-native-geolocation-service';
import Geolocations from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';
import { getLocation } from '../../Redux/Action/AuthenticationAction';
import { SkypeIndicator } from 'react-native-indicators';
import moment from 'moment';
import Term from '../Terms'
import WebView from 'react-native-webview';
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



const Home = (props) => {
  const [isChecked, setIsChecked] = useState(false)
  const [termAccept, setTermAccept] = useState(false)
  const [visible, setVisible] = useState(false)
  const [modalLoader, setLoader] = useState(false)
  const dispatch = useDispatch()
  const homeState = useSelector(state => state.interestReducer)
  useEffect(() => {
    Geolocations.setRNConfiguration({
      authorizationLevel: 'always',
      skipPermissionRequests: false
    })
    if (Platform.OS == 'ios') {
      Geolocations.requestAuthorization()
    }
  }, [])
  useEffect(() => {
    props.navigation.addListener('focus', () => {
      AsyncStorage.getItem('CurrentDate').then((res) => {
        console.log('res', res);
        let parseRes = JSON.parse(res)
        if (parseRes) {
          if (moment(parseRes).date() == moment(new Date()).date()) {
            setIsChecked(true)
          }
          else {
            setIsChecked(false)
          }
        }
        else {
          setIsChecked(false)
        }
      })
    })
  }, [])

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      dispatch(getProfileAction(props.navigation))

      dispatch(getEntriesAction(props.navigation))
      // dispatch(monthStipend(props.navigation))
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);

  React.useEffect(() => {
    if (homeState.terms == 1) {

      dispatch(monthStipend(props.navigation))
    }

  }, [homeState.terms])
  React.useEffect(() => {
    console.log('homeState.sccess', homeState.sccess);
    if (homeState.sccess == 1) {
      homeState.sccess = 0
      if (homeState.terms == 0) {

        setVisible(true)
      }
      else {
        setVisible(false)
      }
    }

  }, [homeState.sccess])

  React.useEffect(() => {
    const unsubscribe = BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp()
    })
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);
  // useEffect(()=>{
  //   let back=BackHandler.addEventListener('hardwareBackPress',()=>{
  //     BackHandler.exitApp()
  //     return false
  //   })
  //  return(()=>{
  //       back.remove()
  //  })
  // },[])



  const renderItem = ({ item, index }) => {

    return (
      <JobCard
        image={require('../../Assets/Group163.png')}
        // image={homeState?.profileData?.profile_picture}
        text1={item.time}
        text2={item.date}
      />
    )
  }


  return (
    <>
      <ScrollView>

        <SafeAreaView style={{ flex: 1, backgroundColor: '#ebebeb' }}>
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
          <Header
            secondImgPress={() => props.navigation.navigate('Notification')}
            iconPress={() => props.navigation.openDrawer()}
            right1ImagePress={() => props.navigation.navigate('Calander')}
            rightImage1={require('../../Assets/calander.png')}
            rightImage2={require('../../Assets/notification.png')}
            backButton
            iconName={require('../../Assets/Group165.png')}
            title={homeState?.profileData?.first_name}
          />
          <StatusBar backgroundColor="#ebebeb" barStyle="dark-content" />
          <View style={styles.mainWrapper}>
            <View style={{ marginHorizontal: 20 }}>
              <ImageBackground
                resizeMode={'cover'}
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 20,
                  // height:'85%',
                  alignSelf: "center",
                  // backgroundColor:"red"
                }}
                borderRadius={10}
                source={require('../../Assets/Group162.png')}
              >

                <Image
                  resizeMode="contain"
                  style={{ height: 100, width: 100, tintColor: 'white' }}
                  source={require('../../Assets/logo.png')}
                />
                <Text style={[{ fontSize: 18, marginTop: 10, fontWeight: 'bold', color: '#fff' }]}> Your Activities This Week </Text>

                <Text style={[{ fontSize: 16, color: '#fff' }]}> You have earned {homeState?.stipendData?.stipend} rand this month </Text>


              </ImageBackground>
              <Text style={[{ fontSize: 16, marginTop: 15 }]}> Last Entry </Text>
              {
                homeState?.recentEntries.length > 0 ?
                  <View

                    style={{
                      borderRadius: 10,
                      marginTop: 15,
                      width: '100%',
                      // marginHorizontal:20,
                      flexDirection: 'row',
                      paddingVertical: 20,
                      // height:'85%',
                      alignSelf: "center",
                      backgroundColor: "white",
                      paddingHorizontal: 30
                    }}
                  >
                    <View>
                      <Image
                        resizeMode="cover"
                        style={{ height: 100, width: 100, borderRadius: 50 }}
                        // source={require('../../Assets/icon1.png')}
                        source={{ uri: homeState?.profileData?.profile_picture }}
                      />
                    </View>
                    {homeState?.recentEntries?.length > 0 && <View style={{ alignSelf: "center" }}>
                      <Text style={[styles.signText, { fontSize: 18, fontWeight: 'bold' }]}> {homeState?.profileData?.first_name} </Text>
                      <Text style={[styles.signText, { color: 'black', paddingVertical: 5, fontWeight: 'bold' }]}> {homeState?.recentEntries[0].time} </Text>
                      <Text style={[styles.signText, { color: 'black' }]}> {homeState?.recentEntries[0].date} </Text>

                    </View>}

                  </View>
                  :
                  <Text style={[styles.signText, { color: 'black', paddingVertical: 5, alignSelf: 'center' }]}> {"No last entry found"} </Text>
              }
            </View>
            <View style={{ marginTop: "2%", width: '100%', alignItems: 'center' }}>
              <Button
                onPress={async () => {
                  if (homeState?.stipendData?.today_attendance_marked !== 'no') {
                    if (homeState?.stipendData?.today_checkout_marked == 'no') {
                      dispatch(checkedOutAction(props.navigation))
                    }
                    else {
                      dispatch(checkedOutAction(props.navigation))

                    }
                  }
                  else {
                    if (Platform.OS == 'android') {
                      try {
                        const granted = await PermissionsAndroid.request(
                          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                          {
                            'title': 'Coinvest',
                            'message': 'Coinvest access to your location '
                          }
                        )
                        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                          console.log("You can use the location")
                          Geolocation.getCurrentPosition(
                            (position) => {
                              console.log(position);
                              dispatch(getLocation(position.coords.latitude, position.coords.longitude, props.navigation))
                              // props.navigation.navigate('PopUp',{position:position.coords})
                            },
                            (error) => {
                              // See error code charts below.
                              console.log(error.code, error.message);
                              alert('Please enable location permission and try again.')
                            },
                            {
                              enableHighAccuracy: true,

                              forceRequestLocation: true,
                            }
                          );
                        } else {

                          alert("Location permission denied");
                        }
                      } catch (err) {
                        console.warn(err)
                      }
                    }
                    else {
                      try {
                        Geolocation.getCurrentPosition(
                          (position) => {
                            console.log(position);
                            dispatch(getLocation(position.coords.latitude, position.coords.longitude, props.navigation))
                            // props.navigation.navigate('PopUp',{position:position.coords})
                          },
                          (error) => {
                            // See error code charts below.
                            console.log(error.code, error.message);
                            alert('Please enable location permission and try again.')
                          },
                          {
                            enableHighAccuracy: true,

                            forceRequestLocation: true,
                          }
                        );
                      }
                      catch (e) {

                      }


                    }
                  }
                  // props.navigation.navigate('PopUp')
                }}
                text={
                  homeState?.stipendData?.today_attendance_marked !== 'no' ?
                    homeState?.stipendData?.today_checkout_marked == 'no' ?
                      "Check Out"
                      :
                      'Check In'
                    : 'Check In'}
              />
              <Text style={[{ fontSize: 16, marginLeft: 20, alignSelf: 'flex-start', marginTop: 10 }]}> Recent Entries </Text>
            </View>
            <FlatList
              ListEmptyComponent={() => {
                return (
                  <View style={{ height: Dimensions.get('screen').height * 0.35, justifyContent: 'center' }}>
                    <Text style={[styles.signText, { color: 'black', paddingVertical: 5, alignSelf: 'center' }]}> {"No recent entry found"} </Text>
                  </View>
                )
              }}
              contentContainerStyle={{ paddingBottom: 100 }}
              data={homeState.recentEntries}
              renderItem={renderItem}
            />


          </View>
        </SafeAreaView>
      </ScrollView>
      <Modal
        visible={visible}
      >
          {modalLoader||homeState.onLoad ?
            <View style={{
              height: '100%', width: '100%', backgroundColor: 'rgba(52, 52, 52, 0.1)'
              , position: 'absolute', zIndex: 5
            }}>
                <SkypeIndicator color='#c85a2e' />
            </View>
            : null}
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 0.7 }}>
            <WebView
            onLoadStart={()=>setLoader(true)}
            onLoad={()=>setLoader(false)}
            onLoadEnd={()=>setLoader(false)}
              showsVerticalScrollIndicator={false}
              style={{ height: '100%', width: "100%" }}
              source={{ uri: 'https://www.ceta.org.za/terms-and-conditions' }}
            />
          </View>
          <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
           <Pressable style={{flexDirection:'row',marginVertical:10,width:'90%',}}>
            <Pressable onPress={()=>setTermAccept(!termAccept)} style={{height:25,width:25,borderWidth:1,alignItems:'center',justifyContent:'center'}}>
             {termAccept&& <Image
              resizeMode='cover'
              source={require('../../Assets/check.png')}
              style={{height:20,width:20}}
              />}
              </Pressable> 
              <Text 
              style={{marginLeft:10,alignSelf:'center',  fontSize: 16, fontWeight: 'normal' }}
              >Accept terms & condition</Text>
           </Pressable>
            <Pressable
              onPress={() => {
                if(termAccept==false){
                    alert('Please accept terms & conditions.`')
                }
                else{

                  dispatch(monthStipend(props.navigation))}}
                }
              style={[{ width: '90%', elevation: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 5, paddingVertical: 15, backgroundColor: '#c85a2e' }]}>
              <Text
                style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
              >{'Accept'}</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}

export default Home