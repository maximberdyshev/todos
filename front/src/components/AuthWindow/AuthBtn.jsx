import React, { useContext } from 'react'
import { AuthContext } from '../../context/MyContext'
import MyButton from '../UI/button/MyButton'

const AuthBtn = (props) => {
  const { userData, userDataDB, isAuth, setIsAuth, setUserData } =
    useContext(AuthContext)

  function getLogin(event) {
    event.preventDefault()

    // иммитация проверки авторизации пользователя
    if (
      userData.userLogin === userDataDB.userLogin &&
      userData.userPass === userDataDB.userPass
    ) {
      setIsAuth(!isAuth)
      setUserData({ userLogin: '', userPass: '' })
    } else {
      // сообщение о неудачном логине
      // не реализована вариативность (причина: неправильный пароль или логин)
      props.setLogState('Неудачный логин...')
      props.setModal(true)
    }
  }

  function regIn(event) {
    event.preventDefault()

    // должна быть реализована регистрация нового пользователя, но не реализовано
    props.setLogState('Окно регистрации пользователя. Не реализовано.')
    props.setModal(true)
  }

  return (
    <div>
      <form className='auth-btn'>
        <MyButton onClick={getLogin}>LogIn</MyButton>
        <MyButton onClick={regIn}>Register</MyButton>
      </form>
    </div>
  )
}

export default AuthBtn
