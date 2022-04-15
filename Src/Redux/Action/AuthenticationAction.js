//action to check user
function checkUserAction(username, email, phone_number, dataInParams, navigation) {
    const action = {
        type: "API_CHECK_USER_LOAD",
        username: username,
        email: email,
        phone_number: phone_number,
        dataInParams: dataInParams,
        navigation: navigation
    }
    return action;
}


//action to create profile
function createProfileAction(name,email,phone_number,navigation) {
    const action = {
        type: "API_CREATE_PROFILE_LOAD",
        name: name,
        email: email,
        phone_number: phone_number,
        navigation: navigation
    }
    return action;
}

//consultant register
function consultantRegister(name,email,phone_number,isAstro,password,navigation) {
    const action = {
        type: "API_CREATE_CUNSULTANT_LOAD",
        name: name,
        email: email,
        phone_number: phone_number,
        isAstro:isAstro,
        password:password,
        navigation: navigation
    }
    return action;
}


//action to login
function loginAction(username,password,  navigation) {
    const action = {
        type: "API_LOGIN_LOAD",
       
        mobile: username,
        password: password,
        navigation: navigation
    }
    return action;
}
function consultantLogin(email, password, navigation) {
    const action = {
        type: "API_CONSULTANT_LOGIN_LOAD",
        email:email,
        password: password,
        
        navigation: navigation
    }
    return action;
}
function otpVerfy(mobile, pin, navigation) {
    const action = {
        type: "API_OTP_VERIFY_LOAD",
        pin: pin,
        mobile: mobile,
        // password: password,
        navigation: navigation
    }
    return action;
}

//action to login
function logoutAction(navigation) {
    const action = {
        type: "API_LOGOUT_LOAD",
        navigation: navigation
    }
    return action;
}

//forgot password
function forgotAction(email,navigation) {
    const action = {
        type: "API_FORGOT_LOAD",
        email:email,
        navigation: navigation
    }
    return action;
}
//change password
function changeAction(oldPassword,newPassword,navigation) {
    const action = {
        type: "API_CHANGE_LOAD",
        oldPassword:oldPassword,
        newPassword:newPassword,
        navigation: navigation
    }
    return action;
}
//forgot password
function getLocation(lattiude,longitude,navigation) {
    const action = {
        type: "API_LOCATION_LOAD",
        lattiude:lattiude,
        longitude: longitude,
        navigation:navigation
    }
    return action;
}

module.exports = {
    checkUserAction,
    createProfileAction,
    loginAction,
    logoutAction,
    otpVerfy,
    forgotAction,
    consultantRegister,
    consultantLogin,
    getLocation,
    changeAction
};