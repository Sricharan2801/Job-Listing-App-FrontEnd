import axios from "axios";
import { json } from "react-router-dom";
const baseUrl = import.meta.env.VITE_BACKEND_URL;
import toast from "react-hot-toast";

export const getJobsByFilter = async ({ jobPosition, skills }) => {
    try {
        const requestUrl = `${baseUrl}/jobDetails/allJobs?jobPosition=${jobPosition}&skills=${skills}`
        const response = await axios.get(requestUrl, {
            headers: {
                jobPosition: jobPosition,
                skills: skills
            }
        })
        return response.data
    } catch (error) {
        console.log(`error in getJobsByFilter: ${error}`);
        toast("Something went wrong...")

    }
}

// getting job details
export const getJobDetails = async (jobId) => {
    try {
        const requestUrl = `${baseUrl}/jobDetails/${jobId}`
        const response = await axios.get(requestUrl);

        return response.data
    } catch (error) {
        console.log(`error in getJobDetails : ${error}`);
        toast("Something went wrong...")
    }
}

// posting Job Details
export const postJob = async ({ companyName,
    addLogoUrl,
    jobPosition,
    monthlySalary,
    jobType,
    remoteOrOffice,
    location,
    jobDescription,
    aboutCompany,
    skillsRequired,
    information,
    duration,
    companySize }
) => {


    try {

        const requestUrl = `${baseUrl}/createJob`;
        const skillsRequiredArray = await skillsRequired.split(",")

        const reqPayLoad = {
            companyName,
            addLogoUrl,
            jobPosition,
            monthlySalary,
            jobType,
            remoteOrOffice,
            location,
            jobDescription,
            aboutCompany,
            skillsRequired: skillsRequiredArray,
            information,
            duration,
            companySize
        }

        const token = localStorage.getItem("token");

        const response = await axios.post(requestUrl, reqPayLoad, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });
        return response;

    } catch (error) {
        console.log(`error in postJob : ${error}`);
        toast("Something went wrong...")
    }
}

export const updateJob = async (
    jobId,
    {
        companyName,
        addLogoUrl,
        jobPosition,
        monthlySalary,
        jobType,
        remoteOrOffice,
        location,
        jobDescription,
        aboutCompany,
        skillsRequired,
        information,
        duration,
        companySize,
    }
) => {
    try {
        const requestUrl = `${baseUrl}/updateJob/${jobId}`;

        const skillsRequiredArray = skillsRequired.split(',');

        const reqPayload = {
            companyName,
            addLogoUrl,
            jobPosition,
            monthlySalary,
            jobType,
            remoteOrOffice,
            location,
            jobDescription,
            aboutCompany,
            skillsRequired: skillsRequiredArray,
            information,
            duration,
            companySize,
        };

        const token = localStorage.getItem("token");

        const response = await axios.post(
            requestUrl,
            reqPayload,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            }
        );
        return response;
    } catch (error) {
        console.log(`error in updateJob : ${error}`);
        toast("Something went wrong...")
    }
};
