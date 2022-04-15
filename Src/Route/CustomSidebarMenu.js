// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { CommonActions, StackActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../Redux/Action/AuthenticationAction';


const CustomSidebarMenu = (props) => {
 const dispatch=useDispatch()
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'#ebebeb'}}>
      {/*Top Large Image */}
      <TouchableOpacity onPress={()=>props.navigation.closeDrawer()}>
      <Image
      resizeMode='contain'
        source={ require('../Assets/Group164.png')}
        style={styles.sideMenuProfileIcon}
      />
      </TouchableOpacity>
      {/* <DrawerContentScrollView {...props}> */}
        <DrawerItemList
        
        {...props} />
        <TouchableOpacity 
        onPress={()=>{
          dispatch(logoutAction(props.navigation))
          // AsyncStorage.clear()
          // props.navigation.reset({
          //   routes: [{ name: 'WelcomeScreen1' }],
          // });
        }}
        style={{marginLeft:'7.5%',marginTop:'5%'}} >
        <Text style={{color:'black'}}>Logout</Text>
      </TouchableOpacity>
       {/* </DrawerContentScrollView> */}
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    width: 35,
    height: 35,
    marginLeft:'5%',
    // borderRadius: 140 / 2,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;