import React from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../button/MyButton'
import styles from './MyNavbar.module.css'

const MyNavbar = () => {
  return (
    <div className={styles.navbar}>
      <MyButton>LOGOUT</MyButton>
      <div className={styles.navbar__links}>
        <Link to='/todo'>TODOS </Link>
        <Link to='/error'> ERROR</Link>
      </div>
    </div>
  )
}

export default MyNavbar
