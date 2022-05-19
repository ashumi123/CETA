import axios from 'axios';
import DataManager from '../../Support/DataManager'

// Create axios client, pre-configured with baseURL
let acessToken=''
let APIKit = axios.create({
    baseURL: 'https://lb.chubbyminds.com/apis/',
    // baseURL: 'https://ceta.co.za/apis/',
    // baseURL: 'https://biometrics.ceta.org.za/apis/',
    timeout: 10000,
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = token => {
    console.log('tokennnnnnn',token);
    if(token){

        DataManager.setAccessToken(token)
    }
    
    APIKit.interceptors.request.use(async (config)=> {
        let tokens=await DataManager.getAccessToken()

console.log('hhjhjjjjhjg',tokens);

       let parseToken=await JSON.parse(tokens)
       console.log('token in kit',tokens);
        config.headers['x-access-token'] = `${parseToken}`;
        return config;
    });
};



export default APIKit;