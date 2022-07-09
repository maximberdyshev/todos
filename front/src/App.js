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

  // состояние для полей логина
  const [userData, setUserData] = useState({
    userLogin: '',
    userPass: '',
  })

  // имитация БД с задачами
  let [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Заголовок задачи 1',
      body: 'Описание задачи 2',
      dateEnd: '2022-10-10',
      dateCreate: '2022-01-01',
      dateUpdate: '2022-05-05',
      priority: 'средний',
      completed: false,
      initiator: 'Smith',
      executor: 'Smith',
    },
    {
      id: 2,
      title: 'Заголовок задачи 2',
      body: 'Описание задачи 2',
      dateEnd: '2022-07-01',
      dateCreate: '2022-01-22',
      dateUpdate: '2022-05-13',
      priority: 'средний',
      completed: false,
      initiator: 'Smith',
      executor: 'Smith',
    }
  ])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        userData,
        userDataDB,
        setUserData,
      }}>
      <BrowserRouter>
        <MainForm todos={todos} setTodos={setTodos}/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
