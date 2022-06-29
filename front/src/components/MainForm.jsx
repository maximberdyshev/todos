import React, { useState } from 'react'
import AuthForm from './AuthWindow/AuthForm'
import TodoList from './Todo/TodoList'

export default function MainForm() {
  // имитация состояния авторизации пользователя
  const [isAuth, setIsAuth] = useState(false)

  function authTrue() {
    setIsAuth(!isAuth)
  }

  return <div>{isAuth ? <TodoList /> : <AuthForm authTrue={authTrue} />}</div>
}
