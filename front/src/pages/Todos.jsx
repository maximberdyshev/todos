import React, { useState, useEffect } from 'react'
import API_Connector from '../API/API_Connector'
import TodoList from '../components/Todo/TodoList'

const Todos = () => {
  let [todos, setTodo] = useState([
    { id: 1, title: '1' },
  ])

  async function fetchTodos() {
    const response = await API_Connector.getAllTodos(10, 1)
    setTodo(response.data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className='Todos'>
      {todos.length === 0 ? (
        <h1 style={{ textAlign: 'center', marginTop: '150px' }}>
          Задачи не найдены
        </h1>
      ) : (
        <TodoList todos={todos} setTodo={setTodo} />
      )}
    </div>
  )
}

export default Todos
