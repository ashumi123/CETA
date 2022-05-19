import moment from 'moment';
import { AsyncStorage } from 'react-native';
import { put, call } from 'redux-saga/effects';
import Fetch from '../Fetch';

export function* getInterestSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.getInterest, action.userType);
        console.log("get interest saga", response)
        if (response.status == 1) {
            console.log('ddddddd');
            yield put({ type: "API_GET_INTEREST_SUCCESS", result: response.result });
        }
        else {
            yield put({ type: "API_GET_INTEREST_FAIL" });
            setTimeout(() => {
                alert(response.result.msg)
            }, 500)

            if(response.result.msg=='Authentication failed'){
                AsyncStorage.clear()
                action?.navigation.reset({
                  routes: [{ name: 'WelcomeScreen1' }],
                });
            }
        }
    } catch (error) {
        yield put({ type: "API_GET_INTEREST_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}


export function* getcalanderSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.getCalander, action.month,action.year);
        
        if (response.status == 1) {
        
            yield put({ type: "API_GET_CALANDER_SUCCESS", result: response.result });
        }
        else {
            yield put({ type: "API_GET_CALANDER_FAIL" });
            setTimeout(() => {
                alert(response.result.msg)
            }, 500)
            if(response.result.msg=='Authentication failed'){
                AsyncStorage.clear()
                action?.navigation.reset({
                  routes: [{ name: 'WelcomeScreen1' }],
                });
            }
        }
    } catch (error) {
        yield put({ type: "API_GET_CALANDER_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* getNotificationSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.getNotification);
        
        if (response.status == 1) {
        
            yield put({ type: "API_GET_NOTIFICATION_SUCCESS", result: response.result });
        }
        else {
            yield put({ type: "API_GET_NOTIFICATION_FAIL" });
            setTimeout(() => {
                alert(response.result.msg)
            }, 500)
            if(response.result.msg=='Authentication failed'){
                AsyncStorage.clear()
                action?.navigation.reset({
                  routes: [{ name: 'WelcomeScreen1' }],
                });
            }
        }
    } catch (error) {
        yield put({ type: "API_GET_NOTIFICATION_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* readNotifcationSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.readNotifcation,action.id);
        
        if (response.status == 1) {
        
            yield put({ type: "API_READ_NOTIFICATION_SUCCESS",id:action.id, result: response.result });
        }
        else {
            yield put({ type: "API_READ_NOTIFICATION_FAIL" });
            setTimeout(() => {
                alert(response.result.msg)
            }, 500)
            if(response.result.msg=='Authentication failed'){
                AsyncStorage.clear()
                action?.navigation.reset({
                  routes: [{ name: 'WelcomeScreen1' }],
                });
            }
        }
    } catch (error) {
        yield put({ type: "API_READ_NOTIFICATION_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* deleteNotifcationSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.deleteNotifcation,action.id);
        
        if (response.status == 1) {
        
            yield put({ type: "API_DELETE_NOTIFICATION_SUCCESS",id:action.id, result: response.result });
        }
        else {
            yield put({ type: "API_DELETE_NOTIFICATION_FAIL" });
            setTimeout(() => {
                alert(response.result.msg)
            }, 500)
            if(response.result.msg=='Authentication failed'){
                AsyncStorage.clear()
                action?.navigation.reset({
                  routes: [{ name: 'WelcomeScreen1' }],
                });
            }
        }
    } catch (error) {
        yield put({ type: "API_DELETE_NOTIFICATION_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* markAttandanceSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.markAttandance, action.id);
        console.log("get interest saga", response)
        if (response.status == 1) {
            console.log('ddddddd');
            yield put({ type: "API_ATTANDANCE_SUCCESS", result: response.result });
            action.navigation.pop(2)
            AsyncStorage.setItem('CurrentDate',JSON.stringify(moment(new Date())))
            setTimeout(() => {
                alert(response.result.message)
            }, 500)
        }
        else {
            yield put({ type: "API_ATTANDANCE_FAIL" });
            setTimeout(() => {
                alert(response.result.msg)
            }, 500)
            if(response.result.msg=='Authentication failed'){
                AsyncStorage.clear()
                action?.navigation.reset({
                  routes: [{ name: 'WelcomeScreen1' }],
                });
            }
        }
    } catch (error) {
        yield put({ type: "API_ATTANDANCE_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* stipendSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.monthStipend);
        console.log("get interest saga", response)
        if (response.status == 1) {
            console.log('ddddddd');
            yield put({ type: "API_GET_STIPEND_SUCCESS", result: response.result });
          
        }
        else {
            yield put({ type: "API_GET_STIPEND_FAIL" });
            setTimeout(() => {
                alert(response.result.msg)
            }, 500)
            if(response.result.msg=='Authentication failed'){
                AsyncStorage.clear()
                action?.navigation.reset({
                  routes: [{ name: 'WelcomeScreen1' }],
                });
            }
        }
    } catch (error) {
        yield put({ type: "API_GET_STIPEND_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* checkedOutSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.checkedOut);
        console.log("get interest saga", response)
        if (response.status == 1) {
            console.log('ddddddd');
            yield put({ type: "API_CHECKEDOUT_SUCCESS", result: response.result });

            action.navigation.pop(2)
          
        }
        else {
            yield put({ type: "API_CHECKEDOUT_FAIL" });
            setTimeout(() => {
                alert(response.result.msg)
            }, 500)
            if(response.result.msg=='Authentication failed'){
                AsyncStorage.clear()
                action?.navigation.reset({
                  routes: [{ name: 'WelcomeScreen1' }],
                });
            }
        }
    } catch (error) {
        yield put({ type: "API_CHECKEDOUT_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* hashTagSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.location,action.lattiude,action.longitude);
        console.log("get location saga", response)
        if (response.status === 1) {
            yield put({ type: "API_LOCATION_SUCCESS", result: response.result });
            action.navigation.navigate('PopUp2',{location_id:response.result.data.location_id,today_attendance_marked:action.today_attendance_marked})

        }
        else {
            yield put({ type: "API_LOCATION_FAIL" });
            if(response.result.msg=='Authentication failed'){
                setTimeout(() => {
                    alert(response.result.msg)
                }, 500)
                AsyncStorage.clear()
                action?.navigation.reset({
                  routes: [{ name: 'WelcomeScreen1' }],
                });
            }
            else{
                action.navigation.navigate('ErrorPopUp',{msg:response.result.msg})
                
            }
        }
    } catch (error) {
        console.log('error',error );
        yield put({ type: "API_LOCATION_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* compTagSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.getComp);
        console.log("get interest saga", response)
        if (response.status === 1) {
            yield put({ type: "API_GET_COMP_SUCCESS", result: response.result });
        }
        else {
            yield put({ type: "API_GET_COMP_FAIL" });
            setTimeout(() => {
                alert(response.result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_GET_COMP_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* userListSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.getUserList,action.search,action.userType);
        console.log("get interest saga", response)
        if (response.status === 1) {
            yield put({ type: "API_GET_USER_LIST_SUCCESS", result: response.result });
        }
        else {
            yield put({ type: "API_GET_USER_LIST_FAIL" });
            setTimeout(() => {
                alert(response.result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_GET_USER_LIST_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* followUserSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.followUser,action.id);
        console.log("get interest saga", response)
        if (response.status === 1) {
            yield put({ type: "API_FOLLOW_USER_SUCCESS",id:action.id, result: response.result });
        }
        else {
            yield put({ type: "API_FOLLOW_USER_FAIL" });
            setTimeout(() => {
                alert(response.result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_FOLLOW_USER_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}