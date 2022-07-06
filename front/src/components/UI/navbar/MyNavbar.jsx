import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/MyContext'
import MyButton from '../button/MyButton'
import styles from './MyNavbar.module.css'

const MyNavbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  return (
    <div className={styles.navbar}>
      <MyButton onClick={() => setIsAuth(!isAuth)}>LOGOUT</MyButton>
      <div className={styles.navbar__links}>
        <Link to='/todo'>TODOS</Link>
        {/* <Link to='/login'> LOGIN</Link> */}
      </div>
    </div>
  )
}

export default MyNavbar
