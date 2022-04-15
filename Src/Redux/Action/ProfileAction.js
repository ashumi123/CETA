//action to get interests
export function getProfileAction(navigation) {

    const action = {
        type: "API_GET_USER_DETAIL_LOAD",
        navigation:navigation,
    }
    return action;
}
export function getEntriesAction(navigation) {

    const action = {
        type: "API_GET_ENTRIES_LIST_LOAD",
        navigation:navigation,
    }
    return action;
}
export function monthStipend(navigation) {

    const action = {
        type: "API_GET_STIPEND_LOAD",
        navigation:navigation,
    }
    return action;
}
export function checkedOutAction(navigation) {

    const action = {
        type: "API_CHECKEDOUT_LOAD",
        navigation:navigation,
    }
    return action;
}
export function profileUpdate(profile) {

    const action = {
        type: "API_PROFILE_UPDATE_LOAD",
        profile
    }
    return action;
}
export function markAttandance(id,navigation) {

    const action = {
        type: "API_ATTANDANCE_LOAD",
        id:id,
        navigation:navigation
    }
    return action;
}
export function editProfile(userName,instaId,faceId,name,email,phone,navigation) {

    const action = {
        type: "API_PROFILE_EDIT_LOAD",
        bio:userName,
        instaId:instaId,
        faceId:faceId,
        name:name,
        email:email,
        phone:phone,
        navigation:navigation
    }
    return action;
}


