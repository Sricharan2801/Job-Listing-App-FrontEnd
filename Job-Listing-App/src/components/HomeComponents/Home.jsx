import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./homeComponent.module.scss"
import searchIcon from "../../assets/icons/searchIcon.png"
import { useAuth } from '../../contexts/AuthContext'
import { DEFAULT_SKILLS } from "../../utils/skills"
import { getJobsByFilter } from "../../api/jobs"

const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { logout } = useAuth();

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [search, setSearch] = useState("");


  const navigateToLogin = () => {
    navigate("/login")
  }

  const navigateToRegister = () => {
    navigate("/register")
  }

  const logoutBtn = () => {
    logout()
  }

  const addJobBtn = () => {
    navigate("/jobPosting")
  }

  const skillsHandler = (e) => {

    const newSkills = selectedSkills.filter((skill) => {
      return skill === e.target.value
    })

    if (!newSkills.length) {
      setSelectedSkills([...selectedSkills, e.target.value])
    }
  }

  const searchHandler = (e) => {
    setSearch(e.target.value)
  }

  const removeSkill = (removeSkill) => {
    const newSkills = selectedSkills.filter(skills => removeSkill != skills);
    setSelectedSkills([...newSkills])
  }

  const clearBtn = () => {
    setSelectedSkills([])
  }

  useEffect(() => {
    fetchJobDetails()
  }, [selectedSkills])

  const fetchJobDetails = async () => {

    const reqPayLoad = {
      skills: selectedSkills?.join(),
      jobPosition: search?.trim()
    }

    const response = await getJobsByFilter(reqPayLoad)
    console.log(response);
  }

  const keyHandler = (e) => {
    if (!search.trim()) return;

    if (e.keyCode === 13) {
      fetchJobDetails()
    }
  }

  // console.log(selectedSkills);

  return (
    <div className={styles.main}>

      <div className={styles.header}>
        <p className={styles.title}>Jobfinder</p>
        <div className={styles.buttonContainer}>

          {
            isLoggedIn ?
              <>
                <button className={styles.logoutBtn} onClick={() => logoutBtn()}>Logout</button>
                <p className={styles.welcomeText}>Hello! Recruiter</p>
              </> :
              <>
                <button className={styles.buttons} onClick={() => navigateToLogin()}>Login</button>
                <button className={styles.buttons} onClick={() => navigateToRegister()}>Register</button>
              </>
          }

        </div>
      </div>

      <div className={styles.fltersContainer}>
        <div className={styles.filters}>

          <input type="search"
            className={styles.searchBar}
            placeholder="Type any job title"
            name='search'
            onChange={(e) => searchHandler(e)}
            onKeyDown={(e) => keyHandler(e)}
          />

          <img src={searchIcon} alt="searchIcon"
            className={styles.searchIcon} />

          <div className={styles.skillsContainer}>

            <select name="" id=""
              className={styles.skills}
              onChange={(e) => skillsHandler(e)}
            >
              <option value="" disabled selected hidden> Skills</option>

              {
                DEFAULT_SKILLS.map(skill => {
                  return <option key={skill} value={skill}> {skill} </option>
                })
              }

            </select>


            <div className={styles.selectedSkillsContainer}>
              {
                selectedSkills.map(skill => {
                  return <div className={styles.selectedSkill} key={skill}>
                    <p className={styles.skillName}>{skill}</p>

                    <button
                      className={styles.crossSymbol}
                      onClick={() => removeSkill(skill)}
                    >
                      X
                    </button>
                  </div>
                })
              }

            </div>

            {
              isLoggedIn ?
                <button className={styles.addJobBtn} onClick={() => addJobBtn()}>+ Add Job </button>
                :
                <></>
            }

            <p className={styles.clearSkills} onClick={() => clearBtn()}>clear</p>
          </div>
        </div>
      </div>

      {/* <button onClick={() => navigate("/jobDetails/65bb4b7964382e7bd9300d21")}>abcd</button> */}

    </div>
  )
}

export default Home
