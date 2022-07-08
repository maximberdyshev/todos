import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
  function removeTodo(todo) {
    props.setTodos(props.todos.filter((t) => t.id !== todo.id))
  }

  function seeTodo(e) {
    // e.preventDefault()
  }

  function completeTodo(e) {
    // e.preventDefault()
  }

  return (
    <div className='TodoList'>
      {props.todos.map((todo, index) => (
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
