import React from 'react'
import styles from "./JobDetails.module.scss"
import JobDetailsComponent from '../../components/JobDetailsComponents/JobDetails'

const JobDetails = () => {
  return (
    <div className={styles.main}>
      <JobDetailsComponent/>
    </div>
  )
}

export default JobDetails
