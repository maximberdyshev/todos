import React from 'react'
import MyButton from '../UI/button/MyButton'

export default function TodoItem(props) {
  return (
    <div className='TodoItem'>
      <div className='todo-item'>
        <strong>{props.todo.id}. {props.todo.title}</strong>
      </div>
      <div className='todo-btn'>
        <MyButton onClick={() => props.seeTodo(props.todo)}>Просмотреть</MyButton>
        <MyButton onClick={() => props.completeTodo(props.todo)}>Выполнить</MyButton>
        <MyButton onClick={() => props.removeTodo(props.todo)}>Удалить</MyButton>
      </div>
    </div>
  )
}
