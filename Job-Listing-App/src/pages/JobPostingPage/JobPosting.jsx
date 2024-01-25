import React from 'react'
import styles from "./JobPosting.module.scss"
import JobPostingComponent from '../../components/JobPostingComponents/JobPosting'

const JobPosting = () => {
  return (
    <div className={styles.main}>
      <JobPostingComponent/>
    </div>
  )
}

export default JobPosting
