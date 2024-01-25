import React from 'react'
import styles from "./Registration.module.scss"
import RegistrationComponent from "../../components/RegistrationComponents/RegistrationComponent"

const Registration = () => {
  return (
    <div className={styles.main}>
      <RegistrationComponent/>
    </div>
  )
}

export default Registration
