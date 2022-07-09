import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, setTodos }) {
  function removeTodo(todo) {
    setTodos(todos.filter((t) => t.id !== todo.id))
  }

  function seeTodo(e) {
    // e.preventDefault()
  }

  function completeTodo(e) {
    let updateTodos = todos.map(todo => {
      if (todo.id === e.id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setTodos(updateTodos)
  }

  return (
    <div className='TodoList'>
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          number={index + 1}
          removeTodo={removeTodo}
          seeTodo={seeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  )
}
