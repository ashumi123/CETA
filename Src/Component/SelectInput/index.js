import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from './style';
import Colors from '../../constants/appColors';
import appColors from '../../constants/appColors';
import {ActionSheetCustom as ActionSheet} from 'react-native-custom-actionsheet';
import {useRef, useEffect} from 'react';
import font from '../../Theme/font';

const SelectInput = ({
  placeholder,
  inputStyle,
  style,
  onRef,
  value,
  maxLength,
  title,
  icon,
  selectOptions,
  costomInputStyle,
  ...props
}) => {
  const newestActionsheetRef = useRef();
  let options = [];
  const handleActionSheetPress = index => {
    if (index != 0) {
      console.log(selectOptions[index - 1]);
    }
  };

  options.push({
    component: <Text style={styles.actionText}>Cancel</Text>,
    height: 60,
  });

  selectOptions.map(option =>
    options.push({
      component: <Text style={styles.actionText}>{option}</Text>,
      height: 60,
    }),
  );

  return (
    <View>
      <View style={[styles.containerStyle, style]}>
        <Text style={styles.titleTxt}>{title}</Text>

        <TouchableOpacity
          style={[styles.inputStyle, costomInputStyle]}
          onPress={() => newestActionsheetRef.current.show()}>
          {value ? 
            props.mention?
            (
              <View style={{flexDirection:'row',borderWidth:1,width:Dimensions.get('screen').width*0.9,borderRadius:10,paddingVertical:10,paddingHorizontal:10,alignItems:'center'}}>
          <Image style={{alignSelf:'center',marginRight:10}} source={props.mentionImg}/>
          <Text
              style={{
                color: 'black',
                fontFamily: font.Regular,

                fontSize: 20,
              }}>
              {value}
            </Text>
              </View>
            )
            :
            (<Text
              style={{
                color: 'black',
                fontFamily: font.Regular,

                fontSize: 20,
              }}>
              {value}
            </Text>
          ) : (
            <Text
              style={{
                color: appColors.gray2,
                fontFamily: font.Regular,
                fontSize: 20,
              }}>
              {placeholder}
            </Text>
          )}
          {icon && (
            <Image
              source={icon}
              style={{height: 20, width: 20}}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
      </View>

      <ActionSheet
        ref={newestActionsheetRef}
        title={title}
        options={options}
        cancelButtonIndex={0}
        onPress={index => handleActionSheetPress(index)}
      />
    </View>
  );
};

export default SelectInput;
