const initialState = {
    onLoad: false,
    error: null,
    result: null,
    navigation: null,
    hashTags:[],
    userList:[],
    comp:[],
    profileData:null
};

function postReducer(state = initialState, action) {
    switch (action.type) {
     
            case "API_CREATE_POST_LOAD":
                return { ...state, onLoad: true };
            case "API_CREATE_POST_SUCCESS":
                return { ...state, onLoad: false};
            case "API_CREATE_POST_FAIL":
                return { ...state, onLoad: false };
            case "API_CREATE_POST_ERROR":
                return { ...state, onLoad: false };
           
           

        default:
            return state;
    }
}

module.exports = {
    postReducer
};