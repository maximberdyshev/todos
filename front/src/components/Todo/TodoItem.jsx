import React from 'react'
import MyButton from '../UI/button/MyButton'

export default function TodoItem(props) {
  return (
    <div className='TodoItem'>
      <div className='todo-item'>
        {props.todo.completed ? (
          <p style={{textDecoration: 'line-through', color: 'green'}}>
            {props.number}. {props.todo.title}
          </p>
        ) : (
          <p style={{color: 'grey'}}>
            {props.number}. {props.todo.title}
          </p>
        )}
        <p>{props.todo.body}</p>
        <p>Ответственный: {props.todo.executor} </p>
      </div>
      <div className='todo-item'>
        <p>Приоритет: {props.todo.priority} </p>
        <p>Дата окончания: {props.todo.dateEnd} </p>
        {props.todo.completed ? (
          <p>Статус задачи: выполнена </p>
        ) : (
          <p>Статус задачи: в работе </p>
        )}
      </div>
      <div className='todo-btn'>
        <MyButton onClick={() => props.seeTodo(props.todo)}>
          Просмотреть
        </MyButton>
        <MyButton onClick={() => props.completeTodo(props.todo)}>
          {props.todo.completed ? <p>Отменить</p> : <p>Выполнить</p>}
        </MyButton>
        <MyButton onClick={() => props.removeTodo(props.todo)}>
          Удалить
        </MyButton>
      </div>
    </div>
  )
}
