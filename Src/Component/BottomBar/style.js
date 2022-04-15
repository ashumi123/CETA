import { StyleSheet, Dimensions } from 'react-native';
// import { AppColors, AppDimension } from '../../Theme'

export default StyleSheet.create({
  MainWrappper: {
    // width:width,
    backgroundColor: '#fff',
    zIndex: 9999,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4.65,
    elevation: 7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    // height: deviceInfo.hasNotch() ? 90 : 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 75,
    // paddingBottom: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  addposticon: {
    width: 35,
    height: 35,
    //   position: 'absolute',
    // top:-25
  },
  positionIcon: {
    position: 'absolute',
    top: -12,
    right: '45%',
  },
  dataTop: {
    // zIndex: 9999,
    shadowColor: 'silver',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4.65,
    elevation: 5,
    backgroundColor: '#fff',
    height: 50,
    alignItems: 'center',
      width: 50,
      borderRadius: 25,
    justifyContent:'center',
    position: 'absolute',
    top: '-50%',
  },
  icon2: {
    width: 55,
    height: 55,
  },
  touchable: {
    // backgroundColor: 'red',
    // // padding: 10,
    // height: 50,
    // width:50,
    // borderRadius: 25,
    // alignItems:'center',
    // alignSelf:'flex-start'
    },
    text: {
        // position: "absolute",
        marginTop:25
  }
});