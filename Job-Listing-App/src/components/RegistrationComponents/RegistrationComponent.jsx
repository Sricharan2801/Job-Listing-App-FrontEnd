import React from 'react'
import styles from "./RegistrationComponent.module.scss"
import image from "../../assets/images/image.png"

const RegistrationComponent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftSection}>
        <div className={styles.formContainer}>

          <div className={styles.headingsContainer}>
            <h1 className={styles.mainHeading}>Create an account</h1>
            <p className={styles.subHeading}> Your personal job finder is here</p>
          </div>

          <form action="" className={styles.registrationForm}>
            <input type="text"
              className={styles.formFeilds}
              placeholder='Name' />

            <input type="text"
              className={styles.formFeilds}
              placeholder='Email' />

            <input type="text"
              className={styles.formFeilds}
              placeholder='Phone' />

            <input type="text"
              className={styles.formFeilds}
              placeholder='Password'
            />

            <div className={styles.checkBoxContainer}>
              <input type="checkbox" className={styles.checkBox} /> &nbsp;
              <p className={styles.checkBoxText}> By creating an account, I agree to our terms of use and privacy policy</p>
            </div>

            <button className={styles.createButton}>Create Account</button>
          </form>

          <p className={styles.verificationText}>Already have an account?   <u>sign In</u>
            
          </p>
        </div>
      </div>

      <div className={styles.rightSection}>
        <img src={image} alt="" className={styles.image} />
        <p className={styles.jobFinderHeading}>Your Personal Job Finder</p>
      </div>
    </div>
  )
}

export default RegistrationComponent
