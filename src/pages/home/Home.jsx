import React from 'react'
import styles from './home.module.css'
import { Header } from '../../components/header'
import Main from '../../components/main/Main'
import { Footer } from '../../components/footer'

const Home = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Home