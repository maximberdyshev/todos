import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/MyContext'
import MyButton from '../UI/button/MyButton'
import styles from './MyNavbar.module.css'

const MyNavbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  // функционал не реализован, заготовка на поиск
  const [filter, setFilter] = useState({ sort: '', query: '' })

  function logOut() {
    setIsAuth(!isAuth)
    localStorage.removeItem('authorized')
  }

  function newTodo() {
    
  }

  return (
    <div className={styles.navbar}>
      <MyButton onClick={newTodo}>Новая задача</MyButton>
      <div>
      {/* функционал ещё не реализован, заготовка */}
      <MyButton>ПОИСК</MyButton>
      </div>
      <div className={styles.navbar__items}>
      <select></select>
      <MyButton onClick={logOut}>LOGOUT</MyButton>
      </div>
    </div>
  )
}

export default MyNavbar
