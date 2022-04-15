import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../constants/appColors';
// import font from '../../Theme/font';

const styles = StyleSheet.create({
  containerStyle: {
    alignSelf:'center',
    marginTop: 15,
    borderRadius:5,
    flexDirection:"row",
    alignItems:'center',
    // borderWidth:1,
    width:Dimensions.get('screen').width*0.9,
    // backgroundColor:'white',
    paddingHorizontal:20,
    paddingVertical:10,
    borderBottomWidth:0.4,
    borderBottomColor:'gray'
    // borderColor:'#babecc',
    // shadowColor:'#babecc',
    // shadowOffset:{
    //   height:-1,width:-1
    // },
    // shadowOpacity:4,
    // shadowRadius:1
  },
  inputStyle: {

    // fontFamily: font.Regular,
    minHeight: 30,
    fontSize: 20,
    // borderBottomWidth: 1,
    // backgroundColor:'white',
    // borderColor: 'lightgray',
    paddingVertical: 10,
  },
  errorInput: {color: 'red', fontSize: 15},
  titleTxt: {
    // fontFamily: font.Regular,

    color: Colors.gray2,
    marginLeft: 4,
    fontSize: 12,
  },
});

export default styles;
