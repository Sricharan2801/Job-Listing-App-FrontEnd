// JobPosting.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from "./jobPostingComponent.module.scss";
import { postJob, updateJob } from "../../api/jobs";

const JobPosting = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  let jobId;
  console.log(state);

  const [isEditExistingPost, setIsEditExistingPost] = useState(false);

  if (state !== null) {

    jobId = state.id
    useEffect(() => {
      setIsEditExistingPost(true);
      
    }, [])

    const str = JSON.stringify(state?.data?.skillsRequired)
    const arr = JSON.parse(str)
    const str1 = arr.join(",")

    
  }

  


  const [jobDetails, setJobDetails] = useState({
    companyName: "" || state?.data?.companyName,
    addLogoUrl: "" || state?.data?.addLogoUrl,
    jobPosition: "" || state?.data?.jobPosition,
    monthlySalary: "" || state?.data?.monthlySalary,
    jobType: "" || state?.data?.jobType,
    remoteOrOffice: "" || state?.data?.remoteOrOffice,
    location: "" || state?.data?.location,
    jobDescription: "" || state?.data?.jobDescription,
    aboutCompany: "" || state?.data?.aboutCompany,
    skillsRequired: "" || state?.data?.skillsRequired,
    information: "" || state?.data?.information,
    duration: "" || state?.data?.duration,
    companySize: "" || state?.data?.companySize
  });

  // console.log(jobDetails.jobType);

  const cancelBtn = () => {
    navigate("/")
    setIsEditExistingPost(false)
  }

  const changeHandler = (e) => {
    setJobDetails({
      ...jobDetails,
      [e.target.name]: e.target.value
    });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submitted");

    const response = await postJob({
      ...jobDetails,
    });

    console.log(response);
  };


  const editJobBtn = async (e) => {
    e.preventDefault()

    const response = await updateJob(jobId, {
      ...jobDetails
    });

  }

  return (
    <div className={styles.main}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>{isEditExistingPost ? <>Edit</> : <>Add</>} job description</h1>
      </div>

      <div className={styles.jobForm}>

        {/* Company Name */}
        <div className={styles.fieldContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.lable} htmlFor='companyName'>
              Company Name
            </label>
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.inputBox}
              placeholder='Enter your company name here'
              name='companyName'
              value={isEditExistingPost ? jobDetails?.companyName : ""}
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>

        {/* Add Logo URL */}
        <div className={styles.fieldContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.lable} htmlFor='addLogoUrl'>
              Add logo URL
            </label>
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.inputBox}
              placeholder='Enter the link'
              name='addLogoUrl'
              value={isEditExistingPost ? jobDetails?.addLogoUrl : ""}
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>

        {/* Job Position */}
        <div className={styles.fieldContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.lable} htmlFor='jobPosition'>
              Job Position
            </label>
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.inputBox}
              placeholder='Enter job position'
              name='jobPosition'
              value={isEditExistingPost ? jobDetails?.jobPosition : ""}
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>

        {/* Monthly Salary */}
        <div className={styles.fieldContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.lable} htmlFor='monthlySalary'>
              Monthly salary
            </label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.inputBox}
              placeholder='Enter Amount in rupees'
              name='monthlySalary'
              value={isEditExistingPost ? jobDetails?.monthlySalary : ""}
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>

        {/* Job Type */}
        <div className={styles.fieldContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.lable} htmlFor='jobType'>
              Job Type
            </label>
          </div>

          <div className={styles.inputContainer}>
            <select
              className={styles.dropDown}
              name='jobType'
              value={isEditExistingPost ? jobDetails?.jobType : ""}
              onChange={(e) => changeHandler(e)}
            >
              <option value="" disabled selected hidden> Select</option>
              <option value="FullTime">Full-Time</option>
              <option value="InternShip">InternShip</option>
            </select>
          </div>
        </div>

        {/* Remote or Office */}
        <div className={styles.fieldContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.lable} htmlFor='remoteOrOffice'>
              Remote/Office
            </label>
          </div>

          <div className={styles.inputContainer}>
            <select
              className={styles.dropDown}
              name='remoteOrOffice'
              value={isEditExistingPost ? jobDetails?.remoteOrOffice : ""}
              onChange={(e) => changeHandler(e)}
            >
              <option value="" disabled selected hidden> Select</option>
              <option value="remote">Remote</option>
              <option value="office">Office</option>
            </select>
          </div>
        </div>

        {/* Location */}
        <div className={styles.fieldContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.lable} htmlFor='location'>
              Location
            </label>
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.inputBox}
              placeholder='Enter Location'
              name='location'
              value={isEditExistingPost ? jobDetails?.location : ""}
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>

        {/* Job Description */}
        <div className={styles.fieldContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.lable} htmlFor='jobDescription'>
              Job Description
            </label>
          </div>

          <div className={styles.inputContainer}>
            <textarea
              placeholder='Type the job description'
              className={styles.textBox}
              name='jobDescription'
              value={isEditExistingPost ? jobDetails?.jobDescription : ""}
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>

        {/* About Company */}
        <div className={styles.fieldContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.lable} htmlFor='aboutCompany'>
              About Company
            </label>
          </div>

          <div className={styles.inputContainer}>
            <textarea
              placeholder='Type about your company'
              className={styles.textBox}
              name='aboutCompany'
              value={isEditExistingPost ? jobDetails.aboutCompany : ""}
              onChange={(e) => changeHandler(e)}
            />
          </div>

        </div>

        {/* Skills Required */}
        <div className={styles.fieldContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.lable} htmlFor='skillsRequired'>
              Skills Required
            </label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.inputBox}
              placeholder='Enter the must-have skills (comma-separated)'
              name='skillsRequired'
              value={isEditExistingPost ? jobDetails.skillsRequired : ""}
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>

        {/* Information */}
        <div className={styles.fieldContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.lable} htmlFor='information'>
              Information
            </label>
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.inputBox}
              placeholder='Enter the additional information'
              name='information'
              value={isEditExistingPost ? jobDetails?.information : ""}
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>

        {/* Duration */}
        <div className={styles.fieldContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.lable} htmlFor='duration'>
              Duration
            </label>
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.inputBox}
              placeholder='Enter Duration'
              name='duration'
              value={isEditExistingPost ? jobDetails?.duration : ""}
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>

        {/* Company Size */}
        <div className={styles.fieldContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.lable} htmlFor='companySize'>
              Company Size
            </label>
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.inputBox}
              placeholder='Enter company size'
              name='companySize'
              value={isEditExistingPost ? jobDetails?.companySize : ""}
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>

        {/* Buttons Container */}
        <div className={styles.buttonsContainer}>
          <button className={styles.cancelButton} onClick={() => cancelBtn()}>
            Cancel
          </button>
          {isEditExistingPost ? (
            <button
              className={styles.addOrEditBtn}
              onClick={(e) => editJobBtn(e)}>
              Edit Job</button>
          ) : (
            <button
              className={styles.addOrEditBtn}
              onClick={(e) => submitHandler(e)}
            >
              +Add Job
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPosting;
