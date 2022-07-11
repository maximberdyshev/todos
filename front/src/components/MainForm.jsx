import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MyNavbar from './Navbar/MyNavbar'
import Error from '../pages/Error'
import Login from '../pages/Login'
import Todos from '../pages/Todos'

const MainForm = ({ todos, setTodos }) => {
  if (localStorage.getItem('authorized', '1')) {
    return (
      <div className='MainForm'>
        <MyNavbar todos={todos} setTodos={setTodos} />
        <Routes>
          <Route
            path='/todo'
            element={<Todos todos={todos} setTodos={setTodos} />}
          />
          <Route path='/error' element={<Error />} />
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
