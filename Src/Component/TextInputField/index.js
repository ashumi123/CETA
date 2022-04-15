import React from 'react';
import {StyleSheet, Text, View, TextInput,Image} from 'react-native';
import styles from './style';
import Colors from "../../constants/appColors"
import LinearGradient from 'react-native-linear-gradient';

const Input = ({
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
      <LinearGradient
        style={styles.container}
        locations={[0, 0.15, 0.15]}
        colors={['transparent','transparent', 'transparent']}
>
      <View
        style={[
          styles.containerStyle,
          style
        ]}>


        <TextInput
        
          style={[styles.inputStyle]}
          {...props}
          placeholder={placeholder}
          onKeyPress={onKeyPress}
          blurOnSubmit={false}
          autoCapitalize={"none"}
          keyboardType={keyboardType}
          placeholderTextColor={Colors.gray2}
          selectionColor={Colors.gray2}
          value={value}
          maxLength={maxLength}
          multiline={multiline}
          onSubmitEditing={onSubmitEditing}
          ref={onRef}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
        /> 
        {/* {secureTextEntry&&
        <Image
        style={{height:20,width:20,position:'absolute',right:10,top:'25%'}}
        source={require('../../Assets/MaskGroup.png')}
        />} */}
      </View>
      <Text
        style={[
          styles.errorInput,
          {display: touched && error ? 'flex' : 'none'},
        ]}>
        {touched && error}
      </Text>
      </LinearGradient>
    </View>
  );
};


export default Input
