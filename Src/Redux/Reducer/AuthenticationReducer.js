const initialState = {
    onLoad: false,
    error: null,
    userResult: null,
    otp:'',
    navigation: null,
    result:[],
    postDetail:null,
    comments:[],
    detailLoad:false,
    video:[],
    images:[]
};

// CHECK USER UNIQUE EXISTS REDUCER
function checkUserReducer(state = initialState, action) {
    switch (action.type) {
        case "API_CHECK_USER_LOAD":
            return { ...state, onLoad: true };

        case "API_CHECK_USER_SUCCESS":
            return { ...state, onLoad: false, navigation: action.navigation.navigate("CreateProfileSelectRole", { profileData: action.profileData }) };

        case "API_CHECK_USER_FAIL":
            return { ...state, onLoad: false, };

        case "API_CHECK_USER_ERROR":
            return { ...state, onLoad: false };

        default:
            return state;
    }
}

// CREATE PROFILE REDUCER
function createProfileReducer(state = initialState, action) {
    switch (action.type) {
        case "API_CREATE_PROFILE_LOAD":
            return { ...state, onLoad: true };

        case "API_CREATE_PROFILE_SUCCESS":
            return { ...state, onLoad: false, userResult: action.result,otp:action.result.data.otp  };

        case "API_CREATE_PROFILE_FAIL":
            return { ...state, onLoad: false, };

        case "API_CREATE_PROFILE_ERROR":
            return { ...state, onLoad: false };

        default:
            return state;
    }
}

// LOGIN REDUCER
function loginReducer(state = initialState, action) {
    switch (action.type) {
        case "API_LOGIN_LOAD":
            return { ...state, onLoad: true };

        case "API_LOGIN_SUCCESS":
            console.log('nav',action);
            
            return { ...state, onLoad: false, userResult: null  };

        case "API_LOGIN_FAIL":
            return { ...state, onLoad: false

            };

        case "API_LOGIN_ERROR":
            return { ...state, onLoad: false };
        
        case "API_CREATE_CUNSULTANT_LOAD":
            return { ...state, onLoad: true };

        case "API_CREATE_CUNSULTANT_SUCCESS":
            console.log('nav',action);
            
            return { ...state, onLoad: false, userResult: null  };

        case "API_CREATE_CUNSULTANT_FAIL":
            console.log('nav',action);
            return { ...state, onLoad: false

            };

        case "API_CREATE_CUNSULTANT_ERROR":
            return { ...state, onLoad: false };
        
        
        
            case "API_VIDEO_POST_LOAD":
            return { ...state, onLoad: true };
        case "API_VIDEO_POST_SUCCESS":
        let video=[]    
        let images=[]    
        action.result.list.map((x)=>{
                if(x.media[0].isVideo==true){
                    video.push(x)
                }
                else{
                    images.push(x)
                }
            })
            
            return { ...state,video:video,images:images, onLoad: false,result:action.result.list };
        case "API_VIDEO_POST_ERROR":
            return { ...state, onLoad: false };
        case "API_VIDEO_POST_FAIL":
            return { ...state, onLoad: false, };
        case "API_VIDEO_POST_LIKE_DISLIKE_LOAD":
            return { ...state, onLoad: false };
        case "API_VIDEO_POST_LIKE_DISLIKE_SUCCESS":
            let data=[...state.result]
            let videoLike=[...state.video]
            let imageLike=[...state.images]
            data.map((x,index)=>{
                if(x._id==action.id){
                    if(data[index].likedByMe==true){
                        data[index].totalLikes--
                        data[index].likedByMe=!data[index].likedByMe
                    }
                    else{

                        data[index].totalLikes++
                        data[index].likedByMe=!data[index].likedByMe
                    }
                }
            })
            videoLike.map((x,index)=>{
                if(x._id==action.id){
                    if(videoLike[index].likedByMe==true){
                        videoLike[index].totalLikes--
                        videoLike[index].likedByMe=!videoLike[index].likedByMe
                    }
                    else{

                        videoLike[index].totalLikes++
                        videoLike[index].likedByMe=!videoLike[index].likedByMe
                    }
                }
            })
            imageLike.map((x,index)=>{
                if(x._id==action.id){
                    if(imageLike[index].likedByMe==true){
                        imageLike[index].totalLikes--
                        imageLike[index].likedByMe=!imageLike[index].likedByMe
                    }
                    else{

                        imageLike[index].totalLikes++
                        imageLike[index].likedByMe=!imageLike[index].likedByMe
                    }
                }
            })
            return { ...state, onLoad: false,result:data,images:imageLike,video:videoLike };
        case "API_VIDEO_POST_LIKE_DISLIKE_ERROR":
            return { ...state, onLoad: false };
        case "API_VIDEO_POST_LIKE_DISLIKE_FAIL":
            return { ...state, onLoad: false, };
            case "API_VIDEO_POST_DETAIL_LOAD":
                return{
                    ...state,detailLoad:true,onLoad:false
                }
            case "API_VIDEO_POST_DETAIL_SUCCESS":
                return{
                    ...state,
                    detailLoad:false,
                    onLoad:false,
                    postDetail:action.result,
                    comments:action.result.comments
                }
                case "API_VIDEO_POST_SEND_COMMENT_SUCCESS":
                console.log('reducer call'); 
                let dataAddComment={...state.postDetail}
                dataAddComment.comments.unshift(action.result.comment)
                let comData=[...state.result]
            comData.map((x,index)=>{
                if(x._id==action.id){
                    comData[index].totalComment++
                }
            })
                let videoData=[...state.video]
                videoData.map((x,index)=>{
                if(x._id==action.id){
                    videoData[index].totalComment++
                }
            })
                let imgData=[...state.images]
                imgData.map((x,index)=>{
                if(x._id==action.id){
                    imgData[index].totalComment++
                }
            })
                return{
                        ...state,
                        images:imgData,
                        video:videoData,
                        onLoad:false,
                        result:comData
                    }
            case "API_VIDEO_POST_DETAIL_FAIL":
                return{
                    ...state,detailLoad:false,onLoad:false
                }
            case "API_VIDEO_POST_DETAIL_ERROR":
                return{
                    ...state,detailLoad:false,onLoad:false
                }
        default:
            return state;
    }
}

// LOGOUT REDUCER
function logoutReducer(state = initialState, action) {
    switch (action.type) {
        case "API_LOGOUT_LOAD":
            return { ...state, onLoad: true };

        case "API_LOGOUT_SUCCESS":
            return { ...state, onLoad: false, };

        case "API_LOGOUT_FAIL":
            return { ...state, onLoad: false, };

        case "API_LOGOUT_ERROR":
            return { ...state, onLoad: false };

        default:
            return state;
    }
}

function forgotReducer(state = initialState, action) {
    switch (action.type) {
        case "API_FORGOT_LOAD":
            return { ...state, onLoad: true };

        case "API_FORGOT_SUCCESS":
            // return { ...state, onLoad: false, navigation: action.navigation.navigate('Login') };
            return { ...state, onLoad: false, };

        case "API_FORGOT_FAIL":
            return { ...state, onLoad: false, };

        case "API_FORGOT_ERROR":
            return { ...state, onLoad: false };

        case "API_CHANGE_LOAD":
            return { ...state, onLoad: true };

        case "API_CHANGE_SUCCESS":
            return { ...state, onLoad: false, };

        case "API_CHANGE_FAIL":
            return { ...state, onLoad: false, };

        case "API_CHANGE_ERROR":
            return { ...state, onLoad: false };

        default:
            return state;
    }
}

module.exports = {
    checkUserReducer,
    createProfileReducer,
    loginReducer,
    logoutReducer,
    forgotReducer
};