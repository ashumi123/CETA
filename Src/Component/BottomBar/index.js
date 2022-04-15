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
    name: 'EXPLORE',
    image1: require('../../Assets/Group4484.png'),
    image2: require('../../Assets/Group4484.png'),
    screen: 'DashBoard',
  },
  // {
  //   no: 2,
  //   name: 'OFFER',
  //   image1: require('../../Assets/inbox.png'),
  //   image2: require('../../Assets/inbox.png'),
  //   screen: 'Offer',
  // },
  // {
  //   no: 3,
  //   name: 'POSTS',
  //   image1: require('../../Assets/bid2.png'),
  //   image2: require('../../Assets/bid2.png'),
  //   screen: 'DashBoard',
  // },
  {
    no: 5,
    name: 'INBOX',
    image1: require('../../Assets/chat8.png'),
    image2: require('../../Assets/chat8.png'),
    screen: 'inbox',
  },
  {
    no: 4,
    name: 'PROFILE',
    image1: require('../../Assets/user.png'),
    image2: require('../../Assets/user.png'),
    screen: 'Profile',
  },
];
const BottomBar = ({ navigation }) => {
    const [ScreenName, setScreenName] = useState(1)
    const [keyShow,setKey]=useState(false)
    Keyboard.addListener('keyboardDidShow',()=>{setKey(true)})
    Keyboard.addListener('keyboardDidHide',()=>{setKey(false)})
    const conditionalNavigate = (tabData) => {
        setScreenName(tabData.no);


            navigation.navigation.navigate(tabData.screen, {
                screen: tabData.name,
                initial: true
            })
        
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
              style={{alignItems: 'center',borderBottomWidth:ScreenName == data.no ? 1:0,borderBottomColor:appColors.primary2}}
              onPress={() => {
                conditionalNavigate(data);
              }}
              activeOpacity={0.4}>
              {data.no == 3 ? (
                <View style={style.dataTop}>
                    <Image
                      resizeMode={'contain'}
                      style={[
                        data.no == 3 ? Style.addposticon : Style.icon,
                        {
                          tintColor: ScreenName == data.no ? appColors.primary2 : '#AFAFAF'
                        }
                      ]}
                      source={ScreenName == data.no ? data.image2 : data.image1}
                    />
                </View>
              ) : (
                <Image
                  resizeMode={'contain'}
                  style={[
                    data.no == 3 ? Style.addposticon : Style.icon,
                    {
                      tintColor:
                        ScreenName == data.no ? appColors.primary2 : '#AFAFAF',
                    },
                  ]}
                  source={ScreenName == data.no ? data.image2 : data.image1}
                />
              )}
              <Text
                style={[
                  data.no == 3 && style.text,
                  {
                    color:
                      ScreenName == data.no ? appColors.primary2 : '#AFAFAF',
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
              style={[data.no == 3 ? Style.addposticon : Style.icon]}
              source={ScreenName == data.no ? data.image2 : data.image1}
            />
            <Text style={{color: '#000'}}>{data.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
}
export default BottomBar;



