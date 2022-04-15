import React, { useState } from 'react';
import { View, Text, Image,Keyboard,TouchableOpacity,NativeModules, Platform } from 'react-native';
import appColors from '../../constants/appColors';
import font from '../../Theme/font';
import styles from '../TextInputField/style';
import style from './style';
// import { AppColors, AppImages } from '../../Theme/index'
import Style from './style'
const BottomItem = [
  {
    no: 1,
    name: 'PROFILE',
    image1: require('../../Assets/user.png'),
    image2: require('../../Assets/user.png'),
    screen: 'Profile',
  },,
  // {
  //   no: 1,
  //   name: 'EXPLORE',
  //   image1: require('../../Assets/Group4484.png'),
  //   image2: require('../../Assets/Group4484.png'),
  //   screen: 'DashBoard',
  // },
  // {
  //   no: 2,
  //   name: 'SAVED',
  //   image1: require('../../Assets/heart.png'),
  //   image2: require('../../Assets/heart.png'),
  //   screen: 'Save',
  // },
  {
    no: 2,
    name: 'INBOX',
    image1: require('../../Assets/chat8.png'),
    image2: require('../../Assets/chat8.png'),
    screen: 'inbox',
  },
  {
    no: 3,
    name: 'HISTORY',
    image1: require('../../Assets/rupee-indian.png'),
    image2: require('../../Assets/rupee-indian.png'),
    screen: 'MyBid',
  },
  
  
];
const BottomBar2 = ({navigation}) => {
    const [ScreenName, setScreenName] = useState(1)
    const [keyShow,setKey]=useState(false)
    Keyboard.addListener('keyboardDidShow',()=>{setKey(true)})
    Keyboard.addListener('keyboardDidHide',()=>{setKey(false)})
    const conditionalNavigate = (tabData) => {
        setScreenName(tabData.no);


            navigation.navigation.navigate(tabData.screen, {
              screen: tabData.name,
              initial: true,
              profestional:true
            });
        
    }
    

    return Platform.OS == 'android' ? (
      keyShow == false ? (
        <View style={Style.MainWrappper}>
          {BottomItem.map(data => (
            // data.no==3?
            // <TouchableOpacity style={Style.positionIcon} onPress={() => { conditionalNavigate(data) }}>
            //         <Image resizeMode={"contain"} style={Style.addposticon } source={(ScreenName == data.no) ? data.image2 : data.image1} />
            //     </TouchableOpacity>
            // :
            <TouchableOpacity
              style={{alignItems: 'center',borderBottomWidth:ScreenName == data.no ? 1:0,borderBottomColor:appColors.primary}}
              onPress={() => {
                conditionalNavigate(data);
              }}
              activeOpacity={0.4}>
              {
              // data.no == 3 ? (
              //   <View style={style.dataTop}>
              //       <Image
              //         resizeMode={'contain'}
              //         style={[
              //           data.no == 3 ? Style.addposticon : Style.icon,
              //           {
              //             tintColor: ScreenName == data.no ? appColors.primary : '#AFAFAF'
              //           }
              //         ]}
              //         source={ScreenName == data.no ? data.image2 : data.image1}
              //       />
              //   </View>
              // ) : 
              (
                <Image
                  resizeMode={'contain'}
                  style={[
                     Style.icon,
                    {
                      tintColor:
                        ScreenName == data.no ? appColors.primary : '#AFAFAF',
                    },
                  ]}
                  source={ScreenName == data.no ? data.image2 : data.image1}
                />
              )}
              <Text
                style={[
                  
                  {
                    color:
                      ScreenName == data.no ? appColors.primary : '#AFAFAF',
                    fontSize: 12,
                    fontFamily: font.SemiBold,
                  },
                ]}>
                {data.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null
    ) : (
      <View style={Style.MainWrappper}>
        {BottomItem.map(data => (
          // data.no==3?
          // <TouchableOpacity style={Style.positionIcon} onPress={() => { conditionalNavigate(data) }}>
          //         <Image resizeMode={"contain"} style={Style.addposticon } source={(ScreenName == data.no) ? data.image2 : data.image1} />
          //     </TouchableOpacity>
          // :
          <TouchableOpacity
            onPress={() => {
              conditionalNavigate(data);
            }}
            activeOpacity={0.4}>
            <Image
              resizeMode={'contain'}
              style={[ Style.icon]}
              source={ScreenName == data.no ? data.image2 : data.image1}
            />
            <Text style={{color: '#000'}}>{data.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
}
export default BottomBar2;



