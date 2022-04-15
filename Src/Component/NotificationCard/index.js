import React from 'react';
import {StyleSheet, Text, View,Image,TouchableOpacity, TextInput} from 'react-native';
import styles from './style';
import Colors from "../../constants/appColors"

const NotificationCard = ({
  crossPress,
  placeholder,
  onPress,
  inputStyle,
  style,
  keyboardType,
  touched,
  error,
  onRef,
  onSubmitEditing,
  value,
  maxLength,
  returnKeyType,
  notification_date,
  multiline,
  onKeyPress,title,secureTextEntry,read_status,
  ...props
}) => {
  return (
    <View>
      <View
        style={[
          styles.containerStyle,
          style
        ]}>
          <View style={{width:'15%'}}>
          <Image
          source={props.image}
          style={{height:50 ,width:50}}
          />
          </View>

        <View style={{marginLeft:10,width:'55%'}}>
          <Text style={{fontWeight:'bold',fontSize:14,color:'#c85a2e'}}>{props.text1}</Text>
          <Text numberOfLines={3} style={{fontSize:10}}>{props.text2}</Text>
          <Text style={{fontSize:12,color:'#c85a2e'}}>{notification_date}</Text>
        </View>
        <View style={{alignItems:'flex-end',width:'30%'}}>
        <TouchableOpacity onPress={()=>crossPress()}>
        <Image
          source={require('../../Assets/Group164.png')}
          style={{height:20 ,width:20,}}
          />
          </TouchableOpacity>
          <Text style={{fontWeight:'bold',textAlign:'right',fontSize:12,color:'#c85a2e'}}>{"      \n    "}</Text>
          {read_status==0&&<Text 
          onPress={()=>onPress()}
          style={{fontWeight:'bold',textAlign:'right',fontSize:12,color:'#c85a2e'}}>{"Mark as Read"}</Text>}

        </View>
      </View>
     
    </View>
  );
};


export default NotificationCard
