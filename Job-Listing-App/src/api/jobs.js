import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getJobsByFilter = async (jobPosition, skills) => {
    try {
        const requestUrl = `${baseUrl}/jobDetails/allJobs?jobPosition=${jobPosition}&skills=${skills}`
        const response = await axios.get(requestUrl)
        return response
    } catch (error) {
        console.log(`error in getJobsByFilter: ${error}`);
    }
}

export const getJobDetails = async (jobId) => {
    try {
        const requestUrl = `${baseUrl}/jobDetails/${jobId}`
        const response = await axios.get(requestUrl);
        return response
    } catch (error) {
        console.log(`error in getJobDetails : ${error}`);
    }
}

export const postJob = async (companyName,
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
) => {

    try {
        const requestUrl = `${baseUrl}/createJob`;
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
            skillsRequired,
            information,
        }

        const response = await axios.post(requestUrl, reqPayLoad);
        return response;

    } catch (error) {
        console.log(`error in postJob : ${error}`);
    }
}

export const updateJob = async (jobId, companyName,
    addLogoUrl,
    jobPosition,
    monthlySalary,
    jobType,
    remoteOrOffice,
    location,
    jobDescription,
    aboutCompany,
    skillsRequired,
    information,) => {

    try {
        const requestUrl = `${baseUrl}/updateJob/${jobId}`;
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
            skillsRequired,
            information,
        }

        const response = await axios.post(requestUrl, reqPayLoad);
        return response;

    } catch (error) {
        console.log(`error in updateJob : ${error}`);
    }
}