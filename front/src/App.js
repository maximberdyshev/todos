import './styles/App.css'
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './context/MyContext'
import MainForm from './components/MainForm'

function App() {
  // имитация состояния авторизации пользователя
  const [isAuth, setIsAuth] = useState(true)

  // имитация БД с логином и паролем
  // not used
  const [isUserData, setIsUserData] = useState({
    userLogin: 'Smit',
    userPass: 123,
  })

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isUserData }}>
      <BrowserRouter>
        <MainForm />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
