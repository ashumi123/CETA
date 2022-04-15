import { AsyncStorage } from 'react-native';
import { put, call } from 'redux-saga/effects';
import Fetch from '../Fetch';

export function* userDetailSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.getUserDetail);
        console.log("get interest saga", response)
        if (response.status === 1) {
            yield put({ type: "API_GET_USER_DETAIL_SUCCESS", result: response.result });
        }
        else {
            yield put({ type: "API_GET_USER_DETAIL_FAIL" });
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
        yield put({ type: "API_GET_USER_DETAIL_ERROR", });
        
    }
}
export function* recentEntriesSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.getRecentEntries);
        console.log("get entries saga", response)
        if (response.status === 1) {
            yield put({ type: "API_GET_ENTRIES_LIST_SUCCESS", result: response.result });
        }
        else {
            yield put({ type: "API_GET_ENTRIES_LIST_FAIL" });
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
        yield put({ type: "API_GET_ENTRIES_LIST_ERROR", });
        
    }
}
export function* profileUpdateSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.profileUpdate,action.profile);
        console.log("get interest saga", response)
        if (response.status === 1) {
            yield put({ type: "API_PROFILE_UPDATE_SUCCESS", result: response.result });
        }
        else {
            yield put({ type: "API_PROFILE_UPDATE_FAIL" });
            setTimeout(() => {
                alert(response.result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_PROFILE_UPDATE_ERROR", });
        
    }
}
export function* profileEditSaga(action) {
    console.log("action saga", action)
    try {
        let response = yield call(Fetch.profileEdit,action.bio,action.instaId,action.faceId,action.name,action.email,action.phone);
        console.log("get interest saga", response)
        if (response.status === 1) {
            yield put({ type: "API_PROFILE_EDIT_SUCCESS", result: response.result,navigation:action.navigation.goBack() });
        }
        else {
            yield put({ type: "API_PROFILE_EDIT_FAIL" });
            setTimeout(() => {
                alert(response.result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_PROFILE_EDIT_ERROR", });
        
    }
}
