import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/MyContext'
import MyButton from '../button/MyButton'
import styles from './MyNavbar.module.css'

const MyNavbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  function logOut() {
    setIsAuth(!isAuth)
    localStorage.removeItem('authorized')
  }

  return (
    <div className={styles.navbar}>
      <MyButton onClick={logOut}>LOGOUT</MyButton>
      <div className={styles.navbar__items}>
        <Link className={styles.navbar__links} to='/todo'>
          TODOS
        </Link>
        <Link className={styles.navbar__links} to='/kek'>
          KEK
        </Link>
      </div>
    </div>
  )
}

export default MyNavbar
