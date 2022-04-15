import { StyleSheet, Dimensions } from 'react-native';

// import font from '../../Theme/font';
const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    mainWrapper:{ flex: 1,
         margin: 10, 
         alignItems: "center" 
        },
        logo:{
            flex: 0.35,
            // justifyContent: "flex-end",
            alignItems: "center",
            width: "70%"
        },
        text1:{
            color: "black",
            paddingHorizontal: 30,
            textAlign: "center",
            fontSize: 15,
            marginVertical: 20,
            color: "gray",
            // fontFamily:font.PoppinsLight
        },
        clientButton:{
            height: 50,
            width: '85%',
            borderRadius: 50 / 2,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F06F0A",
            justifyContent: "center",
            alignItems: "center",
            marginVertical:20
        },
        clientBUtton:{
            height: 50,
            width: '85%',
            borderRadius: 50 / 2,
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#F06F0A",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        serviceButton:{
            position: 'absolute',
            bottom: 30,
            // alignItems: "center",
            borderColor: "#F06F0A",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginTop:20,
            alignSelf:'center'
        },
        welComeView:{ 
            flex: 0.2, 
            justifyContent:"center", 
            alignItems:"center"
        },
    welcomeText: {
            marginTop:40,
            color: "black",
            // fontWeight:"bold",
            // fontFamily:font.SemiBold,
            textAlign: "center",
            fontSize: 18,
            color: "#000000",
        },
    signText: {
            // fontFamily:font.PoppinsMedium,
            color: "#c85a2e", 
            // fontWeight: "900"
            
         }
  
})
export default styles;
