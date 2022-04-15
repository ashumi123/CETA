import React from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import WebView from 'react-native-webview';
import Header from '../../Component/Header/Header';

// https://www.ceta.org.za/contact-us

// https://www.ceta.org.za/terms-and-conditions

// https://www.ceta.org.za/privacy-policy

// https://www.ceta.org.za/
export const Privacy=(props)=> {

    return(
        <SafeAreaView style={{flex:1}}>
 <Header
        // secondImgPress={()=>props.navigation.navigate('Calander')}
        backTextStyle={{color:'#c85a2e',marginLeft:5}}
        backIcon={{height:15,width:15}}
        textButton={'back'}
        iconPress={()=>props.navigation.goBack()}
        // rightImage2={require('../../Assets/calander.png')}
        rightImage1={null}
        backButton
        iconName={require('../../Assets/back.png')}
        title='Privacy Policy'
        />
        <View style={{flex:1}}>

        <WebView
        showsVerticalScrollIndicator={false}
        style={{height:Dimensions.get('screen').height,width:"100%"}}
        source={{uri:'https://www.ceta.org.za/privacy-policy'}}
        />
        </View>
        </SafeAreaView>
    )
}