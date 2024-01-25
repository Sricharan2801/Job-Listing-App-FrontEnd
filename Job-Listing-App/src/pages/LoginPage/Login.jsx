import React from 'react'
import LoginComponent from "../../components/LoginComponents/LoginComponent"
import styles from "./Login.module.scss"

const Login = () => {
  return (
    <div className={styles.main}>
      <LoginComponent/>
    </div>
  )
}

export default Login
