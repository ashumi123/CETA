// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';
import { localKey } from './DataMangerKeys';


const DataManager = {

    //method to set app intro boolean value
    setIntoToApp(data) {
        AsyncStorage.setItem(localKey.introToApp, JSON.stringify(data))
    },

    //method to get app intro boolean value
    getIntoToApp() {
        try {
            return AsyncStorage.getItem(localKey.introToApp).then((data) => {
                return data
            })
        }
        catch (error) {
        }
    },

    //method to set access token
    setAccessToken(token) {
        AsyncStorage.setItem(localKey.accessToken, JSON.stringify(token))
    },

    //method to get access token
    getAccessToken() {
        try {
            return AsyncStorage.getItem(localKey.accessToken).then((token) => {
                return token
            })
        }
        catch (error) {
        }
    },

    //method to set access token
    setUserDetail(data) {
        AsyncStorage.setItem(localKey.userDetail, JSON.stringify(data))
    },

    //method to get access token
    getUserDetail() {
        try {
            return AsyncStorage.getItem(localKey.userDetail).then((data) => {
                return data
            })
        }
        catch (error) {
        }
    },

    clearLocalStorage() {
        AsyncStorage.multiRemove([localKey.accessToken, localKey.userDetail])
    }
}

export default DataManager;