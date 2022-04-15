//action to get interests
function createPost(url,description,types,navigation) {

    const action = {
        type: "API_CREATE_POST_LOAD",
        url:url,
        types:types,
        navigation:navigation,
        description:description
    }
    return action;
}
function videoList(id='') {
  const action = {
        type: "API_VIDEO_POST_LOAD",
        id:id
    }
    return action;
}
function postDetail(id) {
  const action = {
        type: "API_VIDEO_POST_DETAIL_LOAD",
        id:id
    }
    return action;
}
function sendComment(payload,id) {
  const action = {
        type: "API_VIDEO_POST_SEND_COMMENT_LOAD",
        payload,
        id:id
        
    }
    return action;
}
function likeDisLikeAction(id) {
  const action = {
        type: "API_VIDEO_POST_LIKE_DISLIKE_LOAD",
        id:id
        
    }
    return action;
}

module.exports = {
    createPost,
    videoList,
    likeDisLikeAction,
    sendComment,
    postDetail
};