import './styles/App.css'
import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './context/MyContext'
import Login from './pages/Login'
import Todos from './pages/Todos'
import Error from './pages/Error'
import API_Connector from './API/API_Connector'

function App() {
  // состояние авторизации пользователя
  const [isAuth, setIsAuth] = useState(false)
  // const checked = API_Connector.checkLogin()
  // console.log(checked)

  // useEffect(() => {
  //   setIsAuth(API_Connector.checkLogin())
  //   console.log(API_Connector.checkLogin())
  //   console.log(isAuth)
  // }, [])

  const getLog = async () => {
    const name = 'Smith' 
    const checked = await API_Connector.checkLogin(name)
    // console.log(checked)
  }

  return (
    <div>
    <button onClick={getLog}> log </button>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        {localStorage.getItem('authorized', '1') ? (
          <div className='App'>
            <Routes>
              <Route path='/todo' element={<Todos />} />
              <Route path='/error' element={<Error />} />
              <Route path='*' element={<Navigate to='/todo' />} />
            </Routes>
          </div>
        ) : (
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/error' element={<Error />} />
            <Route path='*' element={<Navigate to='/login' />} />
          </Routes>
        )}
      </AuthContext.Provider>
    </div>
  )
}

export default App
