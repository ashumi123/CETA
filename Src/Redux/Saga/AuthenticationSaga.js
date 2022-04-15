import { put, call } from 'redux-saga/effects';
import Fetch from '../Fetch';
import { setClientToken } from '../Fetch/ApiKit';
import DataManager from '../../Support/DataManager';
import { Alert, AsyncStorage } from 'react-native';

// CHECK USER UNIQUE EXISTS SAGA
export function* checkUserSaga(action) {
    console.log("action check user saga", action)
    try {
        let response = yield call(Fetch.checkUser, action.username, action.email, action.phone_number);
        console.log("check user saga", response)
        let result = response.result;
        if (response.status === 1) {
            yield put({ type: "API_CHECK_USER_SUCCESS", navigation: action.navigation, profileData: action.dataInParams });
        }
        else {
            yield put({ type: "API_CHECK_USER_FAIL" });
            setTimeout(() => {
                alert(result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_CHECK_USER_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}

// CREATE PROFILE SAGA
export function* createProfileSaga(action) {
    console.log("action create profile saga", action)
    try {
        let response = yield call(Fetch.register, action.name, action.email,action.phone_number);
        console.log("register saga", response)
        let result = response.result;
        if (response.status === 1) {
            // setClientToken(result.access_token)
            // DataManager.setAccessToken(result.access_token)
            // DataManager.setUserDetail(result)
            yield put({ 
                type: "API_CREATE_PROFILE_SUCCESS", 
            result: result, 
            navigation: action.navigation.navigate('OTP',{otp:result.data.otp,mobile:action.phone_number}) 
        });
        setTimeout(() => {
            alert(result.data.otp)
        }, 800);
        }
        else {
            yield put({ type: "API_CREATE_PROFILE_FAIL" });
            setTimeout(() => {
                alert(result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_CREATE_PROFILE_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
// CREATE consultant SAGA
export function* createConsultantSaga(action) {
    try {
        let response = yield call(Fetch.registerConsultant, action.name, action.email,action.phone_number,action.isAstro,action.password);
        console.log("register saga", response)
        let result = response.result;
        if (response.status === 1) {
           
            yield put({ 
                type: "API_CREATE_CUNSULTANT_SUCCESS", 
            result: result, 
            navigation: action.navigation.goBack()
        });
        setTimeout(() => {
            
            alert(result.message)
        }, 800);
        }
        else {
            yield put({ type: "API_CREATE_CUNSULTANT_FAIL" });
            setTimeout(() => {
                alert(result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_CREATE_CUNSULTANT_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* loginConsultantSaga(action) {
    try {
        let response = yield call(Fetch.loginConsultant, action.email, action.password);
        console.log("register saga", response)
        let result = response.result;
        if (response.status === 1) {
            setClientToken(result.data.token)
            DataManager.setUserDetail(result.data)
            Fetch.setToken(result.data.token)
            yield put({ 
                type: "API_CONSULTANT_LOGIN_SUCCESS", 
            result: result, 
            navigation: action.navigation.navigate('Main') 
        });
        
        }
        else {
            yield put({ type: "API_CONSULTANT_LOGIN_FAIL" });
            setTimeout(() => {
                alert(result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_CONSULTANT_LOGIN_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}

// LOGIN SAGA
export function* loginSaga(action) {
    try {
        let response = yield call(Fetch.login, action.mobile,action.password);
        console.log("login saga", response)
        let result = response.result;
        if (response.status === 1) {
            console.log('result.data',result.data
            );
            DataManager.setAccessToken(result.data['auth-token'])
            setClientToken(result.data['auth-token'])
            Fetch.setToken(result.data['auth-token'])
            DataManager.setUserDetail(result.data)
            
            yield put({ type: "API_LOGIN_SUCCESS", result: result.data, navigation: action.navigation });
           
            action.navigation.navigate('Home')
        }
        else {
            
            yield put({ type: "API_LOGIN_FAIL"});
            setTimeout(() => {
                alert(result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_LOGIN_ERROR", });
        setTimeout(() => {
            console.log('error',error);
        }, 500)
    }
}
// otpVerify SAGA
export function* otpVerify(action) {
    console.log("action loginotp verify saga", action)
    try {
        let response = yield call(Fetch.otpVerify, action.mobile, action.pin);
        console.log("login saga", response)
        let result = response.result;
        if (response.status === 1) {
            setClientToken(result.data.token)
            DataManager.setUserDetail(result.data)
                // DataManager.setAccessToken(result.data.token)
            yield put({ type: "API_OTP_VERIFY_SUCCESS", result: result.data, navigation: action.navigation });
            action.navigation.navigate(result.data.isAstrologer? 'DashBoardProf':'DashBoard')

        }
        else {
            yield put({ type: "API_OTP_VERIFY_FAIL", });
        }
    } catch (error) {
        yield put({ type: "API_OTP_VERIFY_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}

// LOGOUT SAGA
export function* logoutSaga(action) {
    console.log("action logout saga", action)
    try {
        let response = yield call(Fetch.logout);
        console.log("logout saga", response)
        let result = response.result;
        if (response.status === 1) {
            yield put({ type: "API_LOGOUT_SUCCESS",  });
            setTimeout(() => {
                  AsyncStorage.clear()
          action.navigation.reset({
            routes: [{ name: 'WelcomeScreen1' }],
          });
            }, 500)
        }
        else {
            yield put({ type: "API_LOGOUT_FAIL" });
            setTimeout(() => {
                alert(result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_LOGOUT_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}

// LOGIN SAGA
export function* forgotSaga(action) {
    // console.log("action forgot saga", action)
    try {
        let response = yield call(Fetch.forgot, action.email);
        console.log("login saga", response)
        let result = response.result;
        if (response.status === 1) {
        
            yield put({ type: "API_FORGOT_SUCCESS", result: result.data, navigation: action.navigation });
            setTimeout(() => {
                Alert.alert(
                "Reset Password",
                response.result.message,
                [
                    //   {
                    //     text: "Cancel",
                    //     onPress: () => console.log("Cancel Pressed"),
                    //     style: "cancel"
                    //   },
                    {
                        text: "OK",
                        onPress: () => action.navigation.goBack(),
                    }
                ],
                { cancelable: false }
            );
            }, 500);
        }
        else {
            yield put({ type: "API_FORGOT_FAIL" });
            setTimeout(() => {
                alert(result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_FORGOT_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* changeSaga(action) {
    // console.log("action forgot saga", action)
    try {
        let response = yield call(Fetch.change, action.oldPassword,action.newPassword);
        console.log("login saga", response.data)
        let result = response.result;
        if (response.status === 1) {
           
            yield put({ type: "API_CHANGE_SUCCESS", result: result.data, navigation: action.navigation });
            setTimeout(() => {
                Alert.alert(
                "Change Password",
                response.result.message,
                [
                  
                    {
                        text: "OK",
                        onPress: () => {

                            AsyncStorage.clear()
                            action.navigation.reset({
                              routes: [{ name: 'WelcomeScreen1' }],
                            });
                        },
                    }
                ],
                { cancelable: false }
            );
            }, 500);
           
        }
        else {
            yield put({ type: "API_CHANGE_FAIL" });
            setTimeout(() => {
                alert(result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_CHANGE_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}