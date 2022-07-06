import './styles/App.css'
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './context/MyContext'
import MainForm from './components/MainForm'

function App() {
  // состояние авторизации пользователя
  const [isAuth, setIsAuth] = useState(true)

  // имитация БД с логином и паролем
  // not used
  const [userDataDB, setUserDataBD] = useState({
    userLogin: 'Smith',
    userPass: '123',
  })
  const [userData, setUserData] = useState({
    userLogin: '',
    userPass: '',
  })

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, userData, userDataDB, setUserData }}>
      <BrowserRouter>
        <MainForm />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
