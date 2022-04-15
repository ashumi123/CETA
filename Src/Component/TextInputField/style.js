import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../constants/appColors';
// import font from '../../Theme/font';

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    justifyContent:'center',
    shadowColor:'gray',
    paddingBottom:1,
    
    //...
    elevation:1.5,
    // backgroundColor: 'gray',
    paddingTop:5,
    paddingHorizontal:3,
    shadowRadius:1,
    borderRadius:10
},
  containerStyle: {
    
    // marginTop: 15,
    borderRadius:5,
    // borderWidth:1,
    width:Dimensions.get('screen').width*0.9,
    backgroundColor:'white',
    paddingHorizontal:20,
    // borderWidth:2,
    // borderColor:'#babecc',
    // shadowColor:'#babecc',
    // shadowOffset:{
    //   height:-1,width:-1
    // },
    // shadowOpacity:4,
    // elevation:5,
    // shadowRadius:1
  },
  inputStyle: {
    color:'black',
    // fontFamily: font.Regular,
    minHeight: 30,
    fontSize: 16,
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
