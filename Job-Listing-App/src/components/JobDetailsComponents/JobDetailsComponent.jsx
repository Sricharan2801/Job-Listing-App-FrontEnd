import React, { useState, useEffect } from 'react'
import styles from "./jobDetailsComponent.module.css"
import salaryLogo from "../../assets/icons/money.png"
import calenderLogo from "../../assets/icons/calender.png"
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getJobDetails } from "../../api/jobs"

const JobDetailsComponent = () => {

    const [jobData, setJobData] = useState("")

    // console.log(jobData.jobType);
    const [isInternShip, setIsInternShip] = useState(false)

    useEffect(() => {
        if (jobData.jobType === "InternShip") {
            setIsInternShip(true)
        }
    }, [jobData.jobType])

    const navigate = useNavigate()

    const { isLoggedIn } = useAuth()


    const editJob = () => {
        navigate("/jobPosting", {
            state: {
                id: jobData._id,
                data: jobData,
                edit: true
            }
        })
    }



    useEffect(() => {
        fetchJobDetails()

    }, [])

    const fetchJobDetails = async () => {
        try {
            const jobId = window.location.pathname.split("/").pop()
            if (!jobId) return;

            const response = await getJobDetails(jobId);

            response ? setJobData(response.jobDetails) : setJobData("")

        } catch (error) {

        }
    }

    let skillsRequired = []
    for (const skills in jobData.skillsRequired) {
        skillsRequired.push(jobData.skillsRequired[skills])
    }



    return (
        <div className={styles.main}>

            <div className={styles.header}>
                <p className={styles.title}>Jobfinder</p>
            </div>


            <p className={styles.companyName}>{jobData.companyName}</p>

            <div className={styles.jobInfoContainer}>
                <div className={styles.jobInfo}>

                    {/* logo and job type */}
                    <span className={styles.logoAndJobType}>
                        <p>1w ago</p>
                        <p>{jobData.jobType}</p>
                        <img src={jobData.addLogoUrl} alt="companyLogo" className={styles.companyLogo} />
                        <p>{jobData.companyName}</p>
                    </span>

                    {/* jobRole */}
                    <span className={styles.jobRole}>
                        <h1>{jobData.jobPosition}</h1>

                        {
                            isLoggedIn ?
                                <button className={styles.editJobBtn} onClick={() => editJob()}>Edit job</button>
                                :
                                <></>
                        }
                    </span>

                    <p className={styles.location}>{jobData.location} | India</p>


                    {/* logos */}
                    <div className={styles.salaryAndDurationLogos}>
                        <span className={styles.logo}>
                            <img src={salaryLogo} alt="" />
                            {isInternShip ? <p>Stipend</p> : <p>Salary</p>}
                        </span>

                        {
                            isInternShip ?
                                <> <span className={styles.logo}>
                                    <img src={calenderLogo} alt="" />
                                    <p>Duration</p>
                                </span></>
                                :
                                <></>
                        }
                    </div>

                    {/* salary and duration */}

                    <div className={styles.salaryAndDuation}>
                        <span className={styles.info}>
                            <p>{jobData.monthlySalary}/month</p>
                        </span>

                        {
                            isInternShip ? <> <span className={styles.info}>
                                <p>{jobData.duration}</p>
                            </span></>
                                :
                                <></>
                        }
                    </div>

                    {/* aboutCompany */}
                    <span className={styles.textBox}>
                        <p className={styles.heading}>About company</p>

                        <p className={styles.description}>
                            {jobData.aboutCompany}
                        </p>
                    </span>


                    {/* aboutJob */}

                    <span className={styles.textBox}>
                        <p className={styles.heading}>About the  job/internship</p>

                        <p className={styles.description}>
                            {jobData.jobDescription}
                        </p>
                    </span>

                    {/*skills required */}
                    <p className={styles.heading}>Skill(s) required</p>

                    <div className={styles.skills}>
                        {
                            skillsRequired.map(skill => {
                                return <span className={styles.skillsContainer}>
                                    <p>{skill}</p>
                                </span>
                            })
                        }
                    </div>

                    {/* Additional Information */}

                    <span className={styles.textBox}>
                        <p className={styles.heading}>Additional Information</p>
                        <p className={styles.description}>{jobData.information}</p>
                    </span>

                    <br /><br /><br />
                </div>
            </div>

            <br /><br /><br />
        </div>
    )
}

export default JobDetailsComponent
