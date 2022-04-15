import React from 'react';
import {StyleSheet, Text, View,Image, TextInput} from 'react-native';
import styles from './style';
import Colors from "../../constants/appColors"

const JobCard = ({
  placeholder,
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
  multiline,
  onKeyPress,title,secureTextEntry,
  ...props
}) => {
  return (
    <View>
      <View
        style={[
          styles.containerStyle,
          style
        ]}>
          <View>
          <Image
          resizeMode='cover'
          // source={{uri:props.image}}
          source={props.image}
          style={{height:50,borderRadius:25 ,width:50}}
          />
          </View>

        <View style={{marginLeft:10}}>
          <Text style={{fontWeight:'bold'}}>{props.text1}</Text>
          <Text>{props.text2}</Text>
        </View>
      </View>
     
    </View>
  );
};


export default JobCard
