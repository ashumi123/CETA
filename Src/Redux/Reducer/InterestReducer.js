const initialState = {
    onLoad: false,
    error: null,
    result: null,
    navigation: null,
    hashTags: [],
    userList: [],
    comp: [],
    recentEntries: [],
    calander: null,
    notification: [],
    stipendData: null,
    face_id: '',
    profileData: null,
    terms:0,
    sccess:0
};

function interestReducer(state = initialState, action) {
    switch (action.type) {
        case "API_GET_ENTRIES_LIST_LOAD":
            return { ...state, onLoad: true };

        case "API_GET_ENTRIES_LIST_SUCCESS":
            console.log('action.result', action.result);
            return { ...state, onLoad: false, recentEntries: action.result.data };

        case "API_GET_ENTRIES_LIST_FAIL":
            return { ...state, onLoad: false, };
        case "API_GET_ENTRIES_LIST_ERROR":
            return { ...state, onLoad: false };



        case "API_GET_CALANDER_LOAD":
            return { ...state, onLoad: true };

        case "API_GET_CALANDER_SUCCESS":
            console.log('action.result calander', action.result);
            return { ...state, onLoad: false, calander: action.result.data.calendar };

        case "API_GET_CALANDER_FAIL":
            return { ...state, onLoad: false, };
        case "API_GET_CALANDER_ERROR":
            return { ...state, onLoad: false };


        case "API_CHECKEDOUT_LOAD":
            return { ...state, onLoad: true };

        case "API_CHECKEDOUT_SUCCESS":
            let stiphenData= {...state.stipendData}
            stiphenData.today_checkout_marked='Yes'

            return { ...state, onLoad: false,stipendData:stiphenData };

        case "API_CHECKEDOUT_FAIL":
            return { ...state, onLoad: false, };
        case "API_CHECKEDOUT_ERROR":
            return { ...state, onLoad: false };


        case "API_GET_NOTIFICATION_LOAD":
            return { ...state, onLoad: true };

        case "API_GET_NOTIFICATION_SUCCESS":
            console.log('action.result NOTIFICATION', action.result);
            return { ...state, onLoad: false, notification: action.result.data };

        case "API_GET_NOTIFICATION_FAIL":
            return { ...state, onLoad: false, };
        case "API_GET_NOTIFICATION_ERROR":
            return { ...state, onLoad: false };

        case "API_READ_NOTIFICATION_LOAD":
            return { ...state, onLoad: true };

        case "API_READ_NOTIFICATION_SUCCESS":
            console.log('action.result NOTIFICATION read', action.result);
            let notify = [...state.notification]
            notify.map((x, index) => {
                if (x.id == action.id) {
                    notify[index].read_status = 1
                }
            })
            return { ...state, onLoad: false, notification: notify };

        case "API_READ_NOTIFICATION_FAIL":
            return { ...state, onLoad: false, };
        case "API_READ_NOTIFICATION_ERROR":
            return { ...state, onLoad: false };


        case "API_DELETE_NOTIFICATION_LOAD":
            return { ...state, onLoad: true };

        case "API_DELETE_NOTIFICATION_SUCCESS":
            console.log('action.result NOTIFICATION read', action.result);
            let notifyd = [...state.notification]
            let updatedData
            notifyd.map((x, index) => {
                if (x.id == action.id) {
                    notifyd.splice(index, 1)
                }
            })
            return { ...state, onLoad: false, notification: notifyd };

        case "API_DELETE_NOTIFICATION_FAIL":
            return { ...state, onLoad: false, };
        case "API_DELETE_NOTIFICATION_ERROR":
            return { ...state, onLoad: false };


        case "API_GET_STIPEND_LOAD":
            return { ...state, onLoad: true };

        case "API_GET_STIPEND_SUCCESS":
            console.log('action.result', action.result);
            return { ...state, onLoad: false,sccess:1, stipendData: action.result.data,terms:1 };

        case "API_GET_STIPEND_FAIL":
            return { ...state, onLoad: false, };
        case "API_GET_STIPEND_ERROR":
            return { ...state, onLoad: false };


        case "API_LOCATION_LOAD":
            return { ...state, onLoad: true };

        case "API_LOCATION_SUCCESS":
            console.log('action.result', action.result);
            return { ...state, onLoad: false, face_id: action.result.data.face_id };

        case "API_LOCATION_FAIL":
            return { ...state, onLoad: false, };
        case "API_LOCATION_ERROR":
            return { ...state, onLoad: false };

        case "API_GET_ENTRIES_LIST_SUCCESS":
            return { ...state, onLoad: false, result: action.result };

        case "API_GET_ENTRIES_LIST_FAIL":
            return { ...state, onLoad: false, };
        case "API_GET_ENTRIES_LIST_ERROR":
            return { ...state, onLoad: false, };
        case "API_GET_HASHTAG_LOAD":
            return { ...state, onLoad: true };
        case "API_GET_HASHTAG_SUCCESS":
            return { ...state, onLoad: false, hashTags: action.result.data.list };
        case "API_GET_HASHTAG_FAIL":
            return { ...state, onLoad: false };
        case "API_GET_HASHTAG_ERROR":
            return { ...state, onLoad: false };
        case "API_GET_COMP_LOAD":
            return { ...state, onLoad: false };
        case "API_GET_COMP_SUCCESS":
            return { ...state, onLoad: false, comp: action.result.data.list };
        case "API_GET_COMP_FAIL":
            return { ...state, onLoad: false };
        case "API_GET_COMP_ERROR":
            return { ...state, onLoad: false };
        //user list
        case "API_GET_USER_LIST_LOAD":
            return { ...state, onLoad: true };
        case "API_GET_USER_LIST_SUCCESS":
            return { ...state, onLoad: false, userList: action.result.data.list };
        case "API_FOLLOW_USER_SUCCESS":
            let users = [...state.userList]
            users.map((x, index) => {
                if (x._id == action.id) {
                    users[index].followedByMe = !users[index].followedByMe
                }
            })
            return {
                ...state, onLoad: false, userList: users
            }

        case "API_GET_USER_LIST_FAIL":
            return { ...state, onLoad: false };
        case "API_GET_USER_LIST_ERROR":
            return { ...state, onLoad: false };

        case "API_GET_USER_DETAIL_LOAD":
            return { ...state, onLoad: true };
        case "API_GET_USER_DETAIL_SUCCESS":
            return { ...state, onLoad: false,sccess:1, profileData: action.result.data,terms:action.result.data.terms_accepted };
        case "API_GET_USER_DETAIL_FAIL":
            return { ...state, onLoad: false };
        case "API_GET_USER_DETAIL_ERROR":
            return { ...state, onLoad: false };

        case "API_GET_INTEREST_ERROR":
            return { ...state, onLoad: false };

        case "API_PROFILE_UPDATE_LOAD":
            return { ...state, onLoad: true };
        case "API_PROFILE_UPDATE_SUCCESS":
            return { ...state, onLoad: false };
        case "API_PROFILE_UPDATE_ERROR":
            return { ...state, onLoad: false };
        case "API_PROFILE_UPDATE_FAIL":
            return { ...state, onLoad: false };
        default:
            return state;
    }
}

module.exports = {
    interestReducer
};