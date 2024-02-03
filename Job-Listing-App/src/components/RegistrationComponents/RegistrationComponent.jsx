import React from 'react'
import styles from "./RegistrationComponent.module.scss"
import image from "../../assets/images/image.png"

import { useNavigate } from 'react-router-dom'
import { userRegistration } from "../../api/userAuth"
import { useState } from "react"

const RegistrationComponent = () => {

  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  })


  const changeHandler = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!userDetails.name || !userDetails.email || !userDetails.phone ||
      !userDetails.password) {

        alert("Please Fill All The Details")
        return;
    }
    
    const response = await userRegistration({...userDetails})
    
    if(response){
      localStorage.setItem("token",response.token);
      localStorage.setItem("userName",response.userName);
      navigate("/")
    }

  }


  // function to navigate to login
  const navigateToSignIn = () => {
    navigate("/login")
  }

  return (
    <div className={styles.main}>
      <div className={styles.leftSection}>
        <div className={styles.formContainer}>

          <div className={styles.headingsContainer}>
            <h2 className={styles.mainHeading}>Create an account</h2>
            <p className={styles.subHeading}> Your personal job finder is here</p>
          </div>

          <form action="" className={styles.registrationForm} onSubmit={(e) => submitHandler(e)}>
            <input type="text"
              className={styles.formFeilds}
              placeholder='Name'
              name='name'
              onChange={(e) => changeHandler(e)} />

            <input type="text"
              className={styles.formFeilds}
              placeholder='Email'
              name='email'
              onChange={(e) => changeHandler(e)} />

            <input type="text"
              className={styles.formFeilds}
              placeholder='Phone'
              name='phone'
              onChange={(e) => changeHandler(e)} />

            <input type="text"
              className={styles.formFeilds}
              placeholder='Password'
              name='password'
              onChange={(e) => changeHandler(e)}
            />

            <div className={styles.checkBoxContainer}>
              <input type="checkbox" className={styles.checkBox} /> &nbsp;
              <p className={styles.checkBoxText}> By creating an account, I agree to our terms of use and privacy policy</p>
            </div>

            <button className={styles.createButton}>Create Account</button>
          </form>

          <p className={styles.verificationText}>Already have an account?
            &nbsp; <u onClick={() => navigateToSignIn()}>Sign In</u>
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
