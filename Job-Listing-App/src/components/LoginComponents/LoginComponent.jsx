import {React,useState} from 'react';
import styles from "./loginComponent.module.scss"
import image from "../../assets/images/Image.png"

import { useNavigate } from 'react-router-dom';
import {userLogin} from "../../api/userAuth"

const LoginComponent = () => {

  const navigate = useNavigate();
  const [userCredentials,setUserCredentials] = useState({
    email:"",
    password:""
  })

  const navigateToSignUp = ()=>{
    navigate("/register")
  }

  const changeHandler = (e)=>{
    setUserCredentials({
      ...userCredentials,
      [e.target.name]:e.target.value
    })
  }

  const submitHandler = async(e)=>{
    e.preventDefault();

    if(!userCredentials.email || !userCredentials.password){
      alert("fileds are required");
      return;
    }

    const response = await userLogin({...userCredentials});

    if(response){
      navigate("/");
    }
  }


  return (
    <div className={styles.main} >
      <div className={styles.leftSection}>

        <div className={styles.formContainer}>

          <div className={styles.headingContainer}>
            <h2 className={styles.mainHeading}>Already have an account?</h2>
            <p className={styles.subHeading}>Your personal job finder is here</p>
          </div>

          <form action="" className={styles.loginForm} onSubmit={(e)=>submitHandler(e)}>
            <input type="text"
              className={styles.formFields}
              placeholder='Email' 
              name='email'
              onChange={(e)=>changeHandler(e)}/>

            <input type="password"
              className={styles.formFields}
              placeholder='Password' 
              name='password'
              onChange={(e)=>changeHandler(e)}/>

            <button className={styles.loginButton}>Sign in</button>

          </form>

          <p className={styles.verificationText}>Don’t have an account?
          &nbsp; <u onClick={()=>navigateToSignUp()}>Sign Up</u>
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

export default LoginComponent
