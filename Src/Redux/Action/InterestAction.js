//action to get interests
function getInterestAction(userType) {

    const action = {
        type: "API_GET_INTEREST_LOAD",
        userType: userType
    }
    return action;
}
function getcalanderData(month,year,navigation) {

    const action = {
        type: "API_GET_CALANDER_LOAD",
        month:month,
        year:year,
        navigation:navigation
    }
    return action;
}
function getNotification(navigation) {

    const action = {
        type: "API_GET_NOTIFICATION_LOAD",
        navigation:navigation
    }
    return action;
}
function readNotifcation(id,navigation) {

    const action = {
        type: "API_READ_NOTIFICATION_LOAD",
        navigation:navigation,
        id:id
    }
    return action;
}
function deleteNotifcation(id,navigation) {

    const action = {
        type: "API_DELETE_NOTIFICATION_LOAD",
        navigation:navigation,
        id:id
    }
    return action;
}
function tagListAction() {

    const action = {
        type: "API_GET_HASHTAG_LOAD",
    }
    return action;
}
function competitionListAction() {

    const action = {
        type: "API_GET_COMP_LOAD",
    }
    return action;
}
function userListAction(search='',userType) {

    const action = {
        type: "API_GET_USER_LIST_LOAD",
        search:search,
        userType:userType
    }
    return action;
}
function followUnfollowAction(id) {

    const action = {
        type: "API_FOLLOW_USER_LOAD",
        id:id
    }
    return action;
}

module.exports = {
    getInterestAction,
    tagListAction,
    userListAction,
    followUnfollowAction,
    getcalanderData,
    getNotification,
    readNotifcation,
    deleteNotifcation,
    competitionListAction
};