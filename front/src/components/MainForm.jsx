import React, { useState } from 'react'
import AuthForm from './AuthWindow/AuthForm'
import TodoContainer from './Todo/TodoContainer'

export default function MainForm() {
  // имитация состояния авторизации пользователя
  const [isAuth, setIsAuth] = useState(true)

  function authTrue() {
    setIsAuth(!isAuth)
  }

  return <div>{isAuth ? <TodoContainer /> : <AuthForm authTrue={authTrue} />}</div>
}
