import axios from "axios";
const baseUrl = import.meta.env.VITE_BACKEND_URL;
import toast from "react-hot-toast";

export const userRegistration = async ({ name, email, phone, password }) => {

    try {
        const requestUrl = `${baseUrl}/register`;
        const reqPayLoad = {
            name, email, phone, password
        }
        const response = await axios.post(requestUrl, reqPayLoad);
        return response.data;

    } catch (error) {
        console.log(`error in userRegistration : ${error}`);


        if (error.response.data.errorMessage === "Email already exist") {
            toast("Email already exist")
        } else if (error.response.data.errorMessage === "Phone Number already exist") {
            toast("Phone Number already exist")
        } else {
            toast("Something went wrong...")
        }

    }
}

export const userLogin = async ({ email, password }) => {
    try {
        const requestUrl = `${baseUrl}/login`;
        const reqPayLoad = {
            email, password
        }
        const response = await axios.post(requestUrl, reqPayLoad);
        return response.data;
    } catch (error) {
        console.log(`error in userLogin : ${error}`)

        if (error.response.data.errorMessage === "User Not Found") {
            toast("Incorrect User Name")
        }
        else if (error.response.data.errorMessage === "Incorrect password") {
            toast("Incorrect Password")
        } else {
            toast("Something went wrong...")
        }
    }
}