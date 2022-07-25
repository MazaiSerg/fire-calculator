import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Calculation} from "../components/calculation/Calculation";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Calculation />
    </div>
  )
}

export default Home
