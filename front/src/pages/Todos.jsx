import React, { useState } from 'react'
import TodoList from '../components/Todo/TodoList'
import MyNavbar from '../components/Navbar/MyNavbar'

const Todos = () => {
  // имитация БД с задачами
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Заголовок задачи 1',
      body: 'Описание задачи 1',
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
    },
  ])

  return (
    <div style={{ alignContent: 'center' }}>
      <MyNavbar todos={todos} setTodos={setTodos} />
      <div className='Todos'>
        {todos.length === 0 ? (
          <h1 style={{ textAlign: 'center', marginTop: '150px' }}>
            Задачи не найдены
          </h1>
        ) : (
          <TodoList todos={todos} setTodos={setTodos} />
        )}
      </div>
    </div>
  )
}

export default Todos
