import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/MyContext'
import MyButton from '../UI/button/MyButton'
import styles from './MyNavbar.module.css'
import MyModal from '../UI/modal/MyModal'
import TodoCreate from '../Todo/TodoCreate'

const MyNavbar = ({ todos, setTodos }) => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const [modal, setModal] = useState(false)

  function logOut() {
    setIsAuth(!isAuth)
    localStorage.removeItem('authorized')
    localStorage.removeItem('userName')
  }

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
    setModal(false)
  }

  return (
    <div className={styles.navbar}>
      <MyButton onClick={() => setModal(true)}>Новая задача</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <TodoCreate createTodo={createTodo} />
      </MyModal>
      <div className={styles.navbar__items}>
        <MyButton onClick={logOut}>LOGOUT</MyButton>
      </div>
    </div>
  )
}

export default MyNavbar
