import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Header = ({
  title,
  image1Style,
  image2Style,
  backButton,
  containerStyle,
  iconStyle,
  innerStyle,
  navigation,
  rightImage1,
  rightImage2,
  titleStyle,
  secondImgPress,
  backIcon,
  iconName,
  textButton,
  iconPress,
  Calander,
  right1ImagePress,
  backTextStyle
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {backButton ? (
        <TouchableOpacity
          onPress={() =>iconName?iconPress(): navigation.goBack()}
          style={{marginLeft: 15,flexDirection:'row',alignItems:'center'}}>
          <Image
            style={[styles.backArrow, backIcon,Calander&&{tintColor:'white'}]}
            source={iconName?iconName: require('../../Assets/back.png')}
          />
          {/* <Text style={backTextStyle}>{textButton}</Text> */}
        </TouchableOpacity>
      ):null}
      <Text style={[styles.text, titleStyle]}>{title}</Text>

      <View
        style={[
          {
            // position: 'absolute',
            flexDirection: 'row',
            width: '15%',
            justifyContent: 'space-between',
            right: 20,
          },
          innerStyle,
        ]}>
        {rightImage1 ? 
        <TouchableOpacity onPress={()=>right1ImagePress&&right1ImagePress()}>
        <Image style={[styles.backArrow,image1Style,{height:20,width:20}]} source={rightImage1} />
        </TouchableOpacity>
        :<View></View>}
        {rightImage2 ? (
        <TouchableOpacity style={image2Style} onPress={()=>secondImgPress&&secondImgPress()}>
          <Image style={[styles.backArrow, iconStyle,{height:20,width:20}]} source={rightImage2} />
        </TouchableOpacity>
        ):<View></View>}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    // backgroundColor: 'white',
    // backgroundColor:"red"
  },
  text: {
    // color: '#DB6400',
    fontSize: 18,
    marginLeft: 25,
    // fontWeight:"bold"
    // fontFamily:font.PoppinsMedium
  },
  backArrow:{
    
    height:35,
    width:35,
    resizeMode:"cover"
  }
});
