import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

 const Button = (props) => {
return(
<TouchableOpacity
onPress={()=>props.onPress()}
style={[{width:'90%',elevation:5,alignItems:'center',justifyContent:'center',borderRadius:5,paddingVertical:15,backgroundColor:'#c85a2e'},props.buttonStyle]}>
  <Text
  style={{color:'white',fontSize:16,fontWeight:'bold'}}
  >{props.text}</Text>
  </TouchableOpacity>
)
}
export default Button