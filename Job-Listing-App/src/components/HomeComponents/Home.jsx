import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./homeComponent.module.scss"
import searchIcon from "../../assets/icons/searchIcon.png"

const Home = () => {
  const navigate = useNavigate()

  const navigateToLogin = ()=>{
    navigate("/login")
  }

  const navigateToRegister = ()=>{
    navigate("/register")
  }
  return (
    <div className={styles.main}>

      <div className={styles.header}>
        <p className={styles.title}>Jobfinder</p>
        <div className={styles.buttonContainer}>
          <button className={styles.buttons} onClick={()=>navigateToLogin()}>Login</button>
          <button className={styles.buttons} onClick={()=>navigateToRegister()}>Register</button>
        </div>
      </div>

      <div className={styles.fltersContainer}>
        <div className={styles.filters}>

          <input type="search"
            className={styles.searchBar}
            placeholder="Type any job title" />

          <img src={searchIcon} alt="searchIcon"
            className={styles.searchIcon} />

          <div className={styles.skillsContainer}>

            <select name="" id="" className={styles.skills}>
              <option value="" disabled selected hidden> Skills</option>


            </select>

            <div className={styles.selectedSkillsContainer}>
              <div className={styles.selectedSkill}>
                <p className={styles.skillName}></p>
                <button className={styles.crossSymbol}>X</button>
              </div>
             
            </div>

            <p className={styles.clearSkills}>clear</p>
          </div>

         
        </div>
      </div>

    </div>
  )
}

export default Home
