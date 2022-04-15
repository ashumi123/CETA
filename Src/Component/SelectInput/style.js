import {StyleSheet} from 'react-native';
import Colors from '../../constants/appColors';
import font from '../../Theme/font';

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 15,
  },
  inputStyle: {
    minHeight: 30,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  errorInput: {color: 'red', fontSize: 15},
  titleTxt: {
    color: Colors.gray2,
    marginLeft: 4,
    fontSize: 15,
  },
  actionText: {
    color: 'black',
    fontFamily: font.PoppinsMedium,
  },
});

export default styles;
