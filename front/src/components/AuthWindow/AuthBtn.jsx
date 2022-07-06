import React, { useContext } from 'react'
import { AuthContext } from '../../context/MyContext'
import MyButton from '../UI/button/MyButton'

const AuthBtn = () => {
  const { userData, userDataDB, isAuth, setIsAuth } = useContext(AuthContext)

  function getLogin(event) {
    event.preventDefault()

    // иммитация проверки авторизации пользователя
    if (
      userData.userLogin === userDataDB.userLogin &&
      userData.userPass === userDataDB.userPass
    ) {
      setIsAuth(!isAuth)
    } else {
      // должно появиться сообщении о неудачном логине, но не реализовано
      console.log('not implemented')
    }
  }

  function regIn(event) {
    event.preventDefault()

    // должна быть реализована регистрация нового пользователя, но не реализовано
    console.log('not implemented')
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
