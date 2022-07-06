import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error from '../pages/Error'
import Login from '../pages/Login'
import Todos from '../pages/Todos'

const MainForm = () => {
  // имитация состояния авторизации пользователя
  const [isAuth, setIsAuth] = useState(true)

  function authTrue() {
    setIsAuth(!isAuth)
  }

  if (isAuth) {
    return (
      <Routes>
        <Route path='/todo' element={<Todos />} />
        <Route path='/error' element={<Error />} />
        <Route path='*' element={<Navigate to='/error' />} />
      </Routes>
    )
  } else {
    return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/error' />} />
      </Routes>
    )
  }
}

export default MainForm
