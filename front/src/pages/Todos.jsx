import React from 'react'
import TodoList from '../components/Todo/TodoList'

const Todos = ({ todos, setTodos }) => {
  return (
    <div className='Todos'>
      {todos.length === 0 ? (
        <h1 style={{ textAlign: 'center', marginTop: '150px' }}>
          Задачи не найдены
        </h1>
      ) : (
        <TodoList todos={todos} setTodos={setTodos} />
      )}
    </div>
  )
}

export default Todos
