import React from 'react';
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import appColors from '../../constants/appColors';

const OfferCard = ({title, price, expiry, userImage, itemImage, offer,...props}) => {
  return (
    <View
      style={{
        marginTop: 20,
        backgroundColor: '#fff',
        shadowColor: 'gray',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        paddingTop: 20,
        paddingHorizontal: 20,
        width: Dimensions.get('screen').width * 0.9,
      }}>
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 0.5,
          borderBottomColor: '#DEDEDE',
          paddingBottom: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{width: '60%'}}>
          <Text
            style={{
              width: '100%',
              // fontFamily: font.PoppinsBold,
              fontSize: 14,
              color: '#000',
            }}>
            {title}
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{backgroundColor: '#0074E4', borderRadius: 5, padding: 5}}>
              <Text style={{fontSize: 12,}}>
                {offer}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 12,
                alignSelf: 'center',
                color: appColors.primary2,
              }}>
              {expiry}
            </Text>
          </View>
        </View>
        <Image source={itemImage} />
      </View>
      <View
        style={{
          // marginTop: 20,
          flexDirection: 'row',
          backgroundColor: '#fff',
          // shadowColor: 'gray',
          // shadowOffset: {
          //   width: 0,
          //   height: 3,
          // },
          // shadowOpacity: 0.29,
          // shadowRadius: 4.65,
          // elevation: 7,
          padding: 20,
          justifyContent: 'space-between',
          width: Dimensions.get('screen').width * 0.8,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image source={userImage} />
          <Text
            style={{
              fontSize: 14,
              color: '#000',
              alignSelf: 'center',
              marginLeft: 20,
            }}>
            {'Jolly Smith'}
          </Text>
        </View>
        <Text
          style={{
            color: '#22BC34',
            paddingHorizontal: 8,
            paddingVertical: 3,
            borderRadius: 5,
            alignSelf: 'center',
            backgroundColor: '#E7F8E9',
          }}>
          {price}
        </Text>
      </View>
    </View>
  );
};
export default OfferCard;