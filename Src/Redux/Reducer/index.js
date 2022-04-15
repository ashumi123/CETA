import { combineReducers } from 'redux';

import { checkUserReducer,createProfileReducer, loginReducer, logoutReducer,forgotReducer } from './AuthenticationReducer';
import { interestReducer } from './InterestReducer';
import {postReducer}from './postReducer'

const appReducer = combineReducers({
    /* your app’s top-level reducers */
    checkUserReducer,
    createProfileReducer,
    loginReducer,
    interestReducer,
    logoutReducer,
    forgotReducer,
    postReducer
    
})

const rootReducer = (state, action) => {
    if (action.type === 'API_LOGOUT_SUCCESS') {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer; 