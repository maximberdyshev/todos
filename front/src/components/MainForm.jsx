import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/MyContext'
import MyNavbar from './UI/navbar/MyNavbar'
import Error from '../pages/Error'
import Login from '../pages/Login'
import Todos from '../pages/Todos'
import Kekpage from '../pages/Kekpage'

const MainForm = () => {
  // работа с данным конектстом не нужна, если используется localstorage
  const { isAuth } = useContext(AuthContext)

  // if (isAuth) {
  if (localStorage.getItem('authorized', '1')) {
    return (
      <div className='MainForm'>
        <MyNavbar />
        <Routes>
          <Route path='/todo' element={<Todos />} />
          <Route path='/error' element={<Error />} />
          <Route path='/kek' element={<Kekpage />} />
          <Route path='*' element={<Navigate to='/todo' />} />
        </Routes>
      </div>
    )
  } else {
    return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/error' element={<Error />} />
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    )
  }
}

export default MainForm
