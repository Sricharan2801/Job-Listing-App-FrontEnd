import React from 'react'
import styles from "./JobPosting.module.scss"
import jobImage from "../../assets/images/jobImage.png"
import JobPostingComponent from '../../components/JobPostingComponents/JobPostingComponent'

const JobPosting = () => {
  return (
    <div className={styles.main}>
      <div className={styles.component}>
      <JobPostingComponent/>
      </div>
      <img src={jobImage} alt=""  className={styles.image}/>
      <h2 className={styles.title}>Recruiter add job details here</h2>
    </div>
  )
}

export default JobPosting
