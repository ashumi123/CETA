import { takeEvery, takeLatest } from 'redux-saga/effects';
import { createProfileSaga,otpVerify,createConsultantSaga,loginConsultantSaga, loginSaga, logoutSaga, checkUserSaga,forgotSaga,changeSaga } from './AuthenticationSaga';
import { getInterestSaga,compTagSaga, hashTagSaga,userListSaga,followUserSaga,markAttandanceSaga, stipendSaga,getcalanderSaga,getNotificationSaga,readNotifcationSaga,deleteNotifcationSaga, checkedOutSaga } from './InterestSaga';
import { commentAddSaga, createPost,postDetailSaga,postLikeSaga,postListSaga } from './postSaga';
import {profileUpdateSaga,profileEditSaga,recentEntriesSaga, userDetailSaga} from './profileSaga'
export default function* root_saga() {
    yield takeEvery("API_CREATE_PROFILE_LOAD", createProfileSaga)
    yield takeEvery("API_CREATE_CUNSULTANT_LOAD", createConsultantSaga)
    yield takeEvery("API_CONSULTANT_LOGIN_LOAD", loginConsultantSaga)
    yield takeEvery("API_GET_INTEREST_LOAD", getInterestSaga)
    yield takeEvery("API_LOCATION_LOAD", hashTagSaga)
    yield takeEvery("API_GET_COMP_LOAD", compTagSaga)
    yield takeEvery("API_LOGIN_LOAD", loginSaga)
    yield takeEvery("API_LOGOUT_LOAD", logoutSaga)
    yield takeEvery("API_CHECK_USER_LOAD", checkUserSaga)
    yield takeEvery("API_FORGOT_LOAD", forgotSaga)
    yield takeEvery("API_CHANGE_LOAD", changeSaga)
    yield takeEvery("API_CREATE_POST_LOAD", createPost)
    yield takeEvery("API_VIDEO_POST_LOAD", postListSaga)
    yield takeEvery("API_VIDEO_POST_DETAIL_LOAD", postDetailSaga)

    yield takeEvery("API_VIDEO_POST_LIKE_DISLIKE_LOAD", postLikeSaga)
    yield takeEvery("API_OTP_VERIFY_LOAD", otpVerify)
    yield takeEvery("API_GET_USER_DETAIL_LOAD", userDetailSaga)
    yield takeLatest("API_GET_USER_LIST_LOAD", userListSaga)
    yield takeEvery("API_FOLLOW_USER_LOAD", followUserSaga)
    yield takeEvery("API_VIDEO_POST_SEND_COMMENT_LOAD", commentAddSaga)
    yield takeEvery("API_PROFILE_UPDATE_LOAD", profileUpdateSaga)
    yield takeEvery("API_PROFILE_EDIT_LOAD", profileEditSaga)
    yield takeEvery("API_GET_ENTRIES_LIST_LOAD", recentEntriesSaga)
    yield takeEvery("API_ATTANDANCE_LOAD", markAttandanceSaga)
    yield takeEvery("API_GET_STIPEND_LOAD", stipendSaga)
    yield takeEvery("API_CHECKEDOUT_LOAD", checkedOutSaga)
    yield takeEvery("API_GET_CALANDER_LOAD", getcalanderSaga)
    yield takeEvery("API_GET_NOTIFICATION_LOAD", getNotificationSaga)
    yield takeEvery("API_READ_NOTIFICATION_LOAD", readNotifcationSaga)
    yield takeEvery("API_DELETE_NOTIFICATION_LOAD", deleteNotifcationSaga)
}