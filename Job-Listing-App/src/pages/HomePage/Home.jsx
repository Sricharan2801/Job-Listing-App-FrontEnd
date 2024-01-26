import React from 'react'
import styles from "./Home.module.scss"

import HomeComponent from "../../components/HomeComponents/Home"

const Home = () => {
  return (
    <div className={styles.main}>
      <HomeComponent/>
    </div>
  )
}

export default Home;
