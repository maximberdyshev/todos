import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
  function remove(todo) {
    props.setTodo(props.todos.filter((t) => t.id !== todo.id))
  }

  return (
    <div className='TodoList'>
      {props.todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} remove={remove} />
      ))}
    </div>
  )
}
