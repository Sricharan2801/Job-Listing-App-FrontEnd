import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_URL

export const userRegistration = async (name, email, phone, password) => {

    try {
        const requestUrl = `${baseUrl}/register`;
        const reqPayLoad = {
            name, email, phone, password
        }
        const response = await axios.post(requestUrl, reqPayLoad);
        return response;

    } catch (error) {
        console.log(`error in userRegistration : ${error}`);
    }
}

export const userLogin = async (email, password) => {
    try {
        const requestUrl = `${baseUrl}/login`;
        const reqPayLoad = {
            email, password
        }
        const response = await axios.post(requestUrl, reqPayLoad);
        return response;
    } catch (error) {
        console.log(`error in userLogin : ${error}`);
    }
}