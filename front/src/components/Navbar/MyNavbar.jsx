import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/MyContext'
import MyButton from '../UI/button/MyButton'
import styles from './MyNavbar.module.css'
import MyModal from '../UI/modal/MyModal'
import TodoCreate from '../Todo/TodoCreate'

const MyNavbar = ({ todos, setTodos }) => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const [modal, setModal] = useState(false)

  // функционал не реализован, заготовка на поиск
  const [filter, setFilter] = useState({ sort: '', query: '' })

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
      <div>
        {/* функционал ещё не реализован, заготовка */}
        <MyButton>ПОИСК</MyButton>
      </div>
      <div className={styles.navbar__items}>
        <select></select>
        <MyButton onClick={logOut}>LOGOUT</MyButton>
      </div>
    </div>
  )
}

export default MyNavbar
