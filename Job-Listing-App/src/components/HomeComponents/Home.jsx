import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./homeComponent.module.scss"
import searchIcon from "../../assets/icons/searchIcon.png"
import { useAuth } from '../../contexts/AuthContext'
import { DEFAULT_SKILLS } from "../../utils/skills"
import { getJobsByFilter } from "../../api/jobs"
import companySizeIcon from "../../assets/icons/companySize.png"
import rupeeIcon from "../../assets/icons/rupeeLogo.png"
import indianFlag from "../../assets/icons/indianFlag.png"

const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { logout } = useAuth();

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [search, setSearch] = useState("");
  const [jobDetails, setJobDetails] = useState()

  const userName = localStorage.getItem("userName")

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
    setJobDetails(response?.jobsDetails);
  }

  const keyHandler = async(e) => {
    if (!search.trim()) return;

    if (e.keyCode === 13) {
      fetchJobDetails()
    }
  }

  const viewDetails = (jobId)=>{
      navigate("/jobDetails",{
        state:{
          jobId : jobId
        }
      })
  }
 
  const editJob = (jobId,jobData) => {
    navigate("/jobPosting", {
        state: {
            id: jobId,
            data: jobData,
            edit: true
        }
    })
}

  return (
    <div className={styles.main}>

      <div className={styles.header}>
        <p className={styles.title}>Jobfinder</p>
        <div className={styles.buttonContainer}>

          {
            isLoggedIn ?
              <>
                <button className={styles.logoutBtn} onClick={() => logoutBtn()}>Logout</button>
                <p className={styles.welcomeText}>Hello! {userName}</p>
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

      <div className={styles.jobsContainer}>

        {
          jobDetails?.map(job => {
            return <div className={styles.jobCard}>
              <img src={job?.addLogoUrl} alt="" className={styles.companyLogo} />

              <div className={styles.basicDetails}>

                <h3 className={styles.jobPosition}>{job?.jobPosition}</h3>

                <div className={styles.salaryAndLocation}>
                  <img src={companySizeIcon} alt="" className={styles.logos} />
                  <p className={styles.info}>{job?.companySize}</p>

                  <img src={rupeeIcon} alt="" className={styles.logos} />
                  <p className={styles.info}>{job?.monthlySalary}</p>

                  <img src={indianFlag} alt="" className={styles.indianFlag} />
                  <p className={styles.info}>{job?.location}</p>
                </div>

                <div className={styles.jobType}>
                  <p className={styles.jobTypeInfo}>{job?.remoteOrOffice}</p>
                  <p className={styles.jobTypeInfo}>{job?.jobType}</p>
                </div>

              </div>

              <div className={styles.skillsAndButtons}>

                <div className={styles.skillsContainer}>
                  {
                    job?.skillsRequired.map(skill => {
                      return <div className={styles.skills}>{skill}</div>
                    })
                  }
                </div>

                <div className={styles.buttonsContainer}>
                  {
                    isLoggedIn ? <button className={styles.buttons} onClick={()=>editJob(job._id,job)}>Edit Job</button> : <></>
                  }
                  <button className={styles.buttons} onClick={()=>viewDetails(job._id)}>View Details</button>
                </div>

              </div>


            </div>
          })
        }

      </div>







    </div>
  )
}

export default Home
