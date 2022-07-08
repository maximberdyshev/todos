import React from 'react'
import TodoList from '../components/Todo/TodoList'

const Todos = (props) => {
  return (
    <div className='Todos'>
      {props.todos.length === 0 ? (
        <h1 style={{ textAlign: 'center', marginTop: '150px' }}>
          Задачи не найдены
        </h1>
      ) : (
        <TodoList todos={props.todos} setTodos={props.setTodos} />
      )}
    </div>
  )
}

export default Todos
