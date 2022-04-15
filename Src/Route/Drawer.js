import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import UserProfile from '../Screens/UserProfile';
import CustomSidebarMenu from './CustomSidebarMenu';
import Calander from '../Screens/Calander';
import Notification from '../Screens/Notification';
import { Privacy } from '../Screens/Privacy';
import { Term } from '../Screens/Terms';



const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    
      <Drawer.Navigator 

      drawerContentOptions={{
        
        inactiveTintColor:'black',
        activeBackgroundColor:'#ebebeb',
        activeTintColor: 'black',
        itemStyle: {marginBottom: 0,marginTop:0,borderBottomWidth:0.5},
      }}
      
      initialRouteName="Home"
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
       
        <Drawer.Screen
        
        name="Home" component={Home} />
        <Drawer.Screen name="Manage Profile" component={UserProfile} />
        <Drawer.Screen name="Calander" component={Calander} />
        <Drawer.Screen name="Notifications" component={Notification} />
        <Drawer.Screen name="Privacy Policy" component={Privacy} />
        <Drawer.Screen name="Terms & Conditions" component={Term} />
      </Drawer.Navigator>
    
  );
}