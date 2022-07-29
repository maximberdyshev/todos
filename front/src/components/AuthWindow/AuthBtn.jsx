import React, { useContext } from 'react'
import { AuthContext } from '../../context/MyContext'
import AuthCheck from '../../validators/AuthCheck'
import MyButton from '../UI/button/MyButton'
import styles from './AuthWindow.module.css'

const AuthBtn = ({ userData, setUserData, setModal, setLogState }) => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  async function getLogin(event) {
    event.preventDefault()
    if (await AuthCheck.userLogIn(userData, 1))
    {
      setUserData({ userLogin: '', userPass: '' })
      setIsAuth(!isAuth)
    }  else  {
      setLogState('Неудачный логин...') 
      setModal(true)
    }
  }

  function regIn(event) {
    event.preventDefault()

    // должна быть реализована регистрация нового пользователя, но не реализовано
    setLogState('Окно регистрации пользователя. Не реализовано.')
    setModal(true)
  }

  return (
    <div>
      <form className={styles.authBtn}>
        <MyButton onClick={getLogin}>LogIn</MyButton>
        <MyButton onClick={regIn}>Register</MyButton>
      </form>
    </div>
  )
}

export default AuthBtn
