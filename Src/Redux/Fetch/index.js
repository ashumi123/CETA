import APIKit, { setClientToken } from './ApiKit';
import { AsyncStorage, Platform } from 'react-native';
import DeviceManager from '../../Support/DataManager'
let token = null, lang = null, userId = null, internetStatus = true, deviceID = null;
const deviceType = (Platform.OS == "ios") ? "IOS" : "ANDROID";


const Fetch = {
    async getToken() {
        let token = await DeviceManager.getAccessToken()
        console.log('token', token);
        this.setToken(token)
    },
    setToken(accessToken) {

        token = accessToken;
    },

    setInternetConnection(internetConnection) {
        internetStatus = internetConnection
    },

    //method to call login api
    async login(username, pass) {

        let res = await AsyncStorage.getItem('fcmToken')
        let parseRes = await JSON.parse(res)
        let formData = {
            'username': username,
            "password": pass,
            "Fcm-device-id": parseRes
        }
        console.log('formData', formData);


        return Method.POST(formData, "login")
    },
    otpVerify(mobile, pin) {
        let formData = JSON.stringify({
            mobileNumber: mobile,
            otp: Number(pin)
        })

        return Method.POST(formData, "user/verifyOtp")
    },
    location(latitude, longitude) {

        let formData = {
            latitude: latitude,
            longitude: longitude,
            'auth-token': token
        }
        return Method.POST(formData, "get-locations")
    },
    checkedOut() {

        let formData = {
 
            'auth-token': token
        }
        return Method.POST(formData, "checkout")
    },
    getCalander(month, year) {

        let formData = {
            month: month,
            year: year,
            'auth-token': token
        }
        return Method.POST(formData, "get-calendar")
    },
    getNotification() {

        let formData = {
            type: 'all',
            'auth-token': token
        }
        return Method.POST(formData, "notifications")
    },
    readNotifcation(id) {

        let formData = {
            id: id,
            'auth-token': token
        }
        return Method.POST(formData, "set-as-read")
    },
    deleteNotifcation(id) {

        let formData = {
            id: id,
            'auth-token': token
        }
        return Method.POST(formData, "delete-notification")
    },
    getComp() {
        return Method.POST(null, "competition/list")
    },
    getUserList(search, type) {
        return Method.POST(JSON.stringify({ 'search': search, type: type }), "user/list")
    },
    getUserDetail(id) {

        let formData = {
            'auth-token': token,


        }

        return Method.POST(formData, "get-profile")



    },

    getRecentEntries() {

        let formData = {
            'auth-token': token,
            'limit': 5

        }

        return Method.POST(formData, "recent-entries")



    },
    monthStipend() {

        let formData = {
            'auth-token': token,
            'terms-accepted':1
        }

        return Method.POST(formData, "monthly-stipend")



    },

    followUser(id) {
        return Method.GET(null, "user/follow?userId=" + id)
    },

    checkUser(username, email, phone_number) {
        let formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        if (phone_number != "") {
            formData.append('phone_number', phone_number);
        }
        return Method.POST(formData, "check-user")
    },

    //method to call get interest api
    getInterest(userType) {
        let formData = new FormData();
        formData.append('type', userType);

        return Method.POST(formData, "get-interest")
    },
    postList(id) {

        let body = JSON.stringify(
            {

                "userId": id,
                "search": "",

            }
        )
        return Method.POST(body, "post/list")
    },
    markAttandance(id) {

        let formData = {
            'auth-token': token,
            'location-id': id

        }

        return Method.POST(formData, "mark-attendance")
    },
    postDetail(id) {

        let body = JSON.stringify(
            {
                "postId": id,
            }
        )
        return Method.POST(body, "post/details")
    },
    postLike(id) {

        let body = JSON.stringify(
            {
                "postId": id
            }
        )
        return Method.POST(body, "like/add")
    },
    sendComment(payload) {


        return Method.POST(payload, "comment/create")
    },

    //method to call register api
    register(name, email, phone_number) {

        var formData = JSON.stringify({
            "name": name,
            "mobileNumber": phone_number,
            "email": email
        })

        return Method.POST(formData, "user/signUp")
    },
    registerConsultant(name, email, phone_number, isAstro, password) {

        var formData = JSON.stringify({

            "name": name,
            "mobileNumber": phone_number,
            "email": email,
            'isAstrologer': isAstro,
            'password': password
        })

        return Method.POST(formData, "user/signUp")
    },
    profileEdit(bio, instaId, faceId, name, email, phone_number) {

        var formData = JSON.stringify({
            "name": name,
            "mobileNumber": phone_number,
            "email": email,
            "bio": bio,
            "instagramId": instaId,
            "facebookId": faceId
        })
        console.log('form data', formData);
        return Method.PUT(formData, "user/edit")
    },
    loginConsultant(email, password) {

        var formData = JSON.stringify({

            "email": email,
            'password': password,
            "deviceType": "android",
            // "deviceToken":"vdxbxcb"
        })

        return Method.POST(formData, "user/login/consult")
    },

    //method to logout api
    logout() {
        let formData = {
            'auth-token': token
        }
        return Method.POST(formData, "logout")
    },

    forgot(email) {
        let formData = {
            'email': email
        }
        return Method.POST(formData, "forgot-password")
    },
    change(old, newPassword) {
        let formData = {
            "auth-token": token,
            "old-password": old,
            "password": newPassword



        }
        return Method.POST(formData, "change-password")
    },
    createPost(url, desc, type) {
        const uriParts = url.split(".");
        const fileType = uriParts[uriParts.length - 1];
        var formData = new FormData();
        formData.append('description', desc);
        formData.append('media', {
            name: type == 'video' ? `video.mp4` : `photo.${fileType}`,
            uri: url,
            type: type == 'video' ? 'video/mp4' : 'image/jpeg'
        });
        return Method.POST(formData, "post/create")
    },
    profileUpdate(url) {
        var formData = new FormData();
        console.log('jhjjjgggg', url);
        formData.append('profile', {
            name: `photo.jpg`,
            uri: url.path,
            type: url.mime
        });
        return Method.POST(formData, "user/profile")
    }

}

const Method = {

    POST(body, url) {
        return APIKit.get(url, {
            headers:
                body,
            // {
            //     // "Host":"<calculated when request is sent>",
            //     // "Content-Length":"<calculated when request is sent>",
            //     // 'Content-Type': 'application/x-www-form-urlencoded',
            //     // 'Content-Type': '',
            //     'Accept': 'application/json',
            //     "Access-Control-Allow-Origin": "*",
            //     'x-access-token': token,

            // }
        })
            .then((data) => {
                console.log("post data", data);
                if (url == 'login') {
                    setClientToken(data.data.data.access_token);
                }

                if (internetStatus === true) {
                    console.log('data.data.status', data.data.status);
                    if (data.data.status == "success") {
                        return {
                            status: 1,
                            result: data.data,
                        }
                    }
                    else {
                        console.log('lllll', data.data)
                        return {
                            result: { msg: data.data.message },
                            status: 0
                        }
                    }
                }
                else {
                    return {
                        result: { msg: "Please check your internet connection." },
                        status: 0
                    }
                }
            })
            .catch((error) => {
                console.log("POST error:  ", error, "POST error:  &&", error.response);
                if (internetStatus == true) {
                    if (error.response.status == 400) {
                        return {
                            result: { msg: error.response.data.message },
                            status: 0
                        }
                    }
                    else {
                        if (error.response.data.message == 'Unauthenticated.') {
                            DeviceManager.clearLocalStorage()
                            return {
                                result: { msg: "Something went wrong." },
                                status: 0
                            }
                        }
                        else {
                            return {
                                result: { msg: "Something went wrong." },
                                status: 0
                            }
                        }

                    }
                }
                else {
                    return {
                        result: { msg: "Please check your internet connection." },
                        status: 0
                    }
                }
            });
    },
    PUT(body, url) {
        console.log("post url", url, body);
        return APIKit.put(url, body, {
            headers: {

                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'x-access-token': token
            }
        })
            .then((data) => {
                console.log("post data", data);
                // if (url == 'login') {
                //     setClientToken(data.data.data.access_token);
                // }

                if (internetStatus === true) {
                    if (data.status == "success") {
                        return {
                            status: 1,
                            result: data.data,
                        }
                    }
                    else {
                        return {
                            result: { msg: "Something went wrong." },
                            status: 0
                        }
                    }
                }
                else {
                    return {
                        result: { msg: "Please check your internet connection." },
                        status: 0
                    }
                }
            })
            .catch((error) => {
                console.log("POST error:  ", error, "POST error:  &&", error.response);
                if (internetStatus == true) {
                    if (error.response.status == 400) {
                        return {
                            result: { msg: error.response.data.message },
                            status: 0
                        }
                    }
                    else {
                        if (error.response.data.message == 'Unauthenticated.') {
                            DeviceManager.clearLocalStorage()
                            return {
                                result: { msg: "Something went wrong." },
                                status: 0
                            }
                        }
                        else {
                            return {
                                result: { msg: "Something went wrong." },
                                status: 0
                            }
                        }

                    }
                }
                else {
                    return {
                        result: { msg: "Please check your internet connection." },
                        status: 0
                    }
                }
            });
    },

    GET(body, url) {
        console.log("post url", url);
        return APIKit.get(url, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
            .then((data) => {
                console.log("get data", data);
                if (internetStatus === true) {
                    if (data.status == "success") {
                        return {
                            status: 1,
                            result: data.data,
                        }
                    }
                    else {
                        return {
                            result: { msg: "Something went wrong." },
                            status: 0
                        }
                    }
                }
                else {
                    return {
                        result: { msg: "Please check your internet connection." },
                        status: 0
                    }
                }
            })
            .catch((error) => {
                console.log("GET error:  ", error, "GET error:  &&", error.response);
                if (internetStatus == true) {
                    if (error.response.status == 400) {
                        return {
                            result: { msg: error.response.data.message },
                            status: 0
                        }
                    }
                    else {
                        return {
                            result: { msg: "Something went wrong." },
                            status: 0
                        }
                    }
                }
                else {
                    return {
                        result: { msg: "Please check your internet connection." },
                        status: 0
                    }
                }
            });
    },

}

export default Fetch;