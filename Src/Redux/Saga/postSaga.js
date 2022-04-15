import { put, call } from 'redux-saga/effects';
import Fetch from '../Fetch';
import { setClientToken } from '../Fetch/ApiKit';
import DataManager from '../../Support/DataManager';
import { Alert } from 'react-native';

// CHECK USER UNIQUE EXISTS SAGA
export function* createPost(action) {
    console.log("action check user saga", action)
    try {
        let response = yield call(Fetch.createPost,action.url,action.description,action.types );
        console.log("check user saga", response)
        let result = response.result;
        if (response.status === 1) {
            yield put({ type: "API_CREATE_POST_SUCCESS", navigation: action.navigation.goBack(), profileData: action.dataInParams });
        }
        else {
            yield put({ type: "API_CREATE_POST_FAIL" });
            setTimeout(() => {
                alert(result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_CREATE_POST_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* postListSaga(action) {
    console.log("action check user saga", action)
    try {
        let response = yield call(Fetch.postList,action.id);
        console.log("check pst list saga", response.result)
        let result = response.result;
        if (response.status === 1) {
            yield put({ type: "API_VIDEO_POST_SUCCESS",result:result.data });
        }
        else {
            yield put({ type: "API_VIDEO_POST_FAIL" });
            setTimeout(() => {
                alert(result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_VIDEO_POST_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* postDetailSaga(action) {
    console.log("action check user saga", action)
    try {
        let response = yield call(Fetch.postDetail,action.id);
        console.log("check pst list saga", response.result)
        let result = response.result;
        if (response.status === 1) {
            yield put({ type: "API_VIDEO_POST_DETAIL_SUCCESS",result:result.data });
        }
        else {
            yield put({ type: "API_VIDEO_POST_DETAIL_FAIL" });
            setTimeout(() => {
                alert(result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_VIDEO_POST_DETAIL_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* postLikeSaga(action) {
    console.log("action check user saga", action)
    try {
        let response = yield call(Fetch.postLike,action.id);
        console.log("check pst list saga", response.result)
        let result = response.result;
        if (response.status === 1) {
            yield put({ type: "API_VIDEO_POST_LIKE_DISLIKE_SUCCESS",result:result.data,id:action.id });
        }
        else {
            yield put({ type: "API_VIDEO_POST_LIKE_DISLIKE_FAIL" });
            setTimeout(() => {
                alert(result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_VIDEO_POST_LIKE_DISLIKE_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
export function* commentAddSaga(action) {
    console.log("action check user saga", action)
    try {
        let response = yield call(Fetch.sendComment,action.payload);
        console.log("check pst list saga", response.result)
        let result = response.result;
        if (response.status === 1) {
            yield put({ type: "API_VIDEO_POST_SEND_COMMENT_SUCCESS",result:result.data,id:action.id });
        }
        else {
            yield put({ type: "API_VIDEO_POST_SEND_COMMENT_FAIL" });
            setTimeout(() => {
                alert(result.msg)
            }, 500)
        }
    } catch (error) {
        yield put({ type: "API_VIDEO_POST_SEND_COMMENT_ERROR", });
        // setTimeout(() => {
        //     alert(error.result.msg)
        // }, 500)
    }
}
