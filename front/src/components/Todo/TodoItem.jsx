import React, { useState } from 'react'
import MyButton from '../UI/button/MyButton'
import MyModal from '../UI/modal/MyModal'
import TodoUpdate from './TodoUpdate'

export default function TodoItem(props) {
  const [visible, setVisible] = useState(false)

  return (
    <div className='TodoItem'>
      <div className='todo-item'>
        {props.todo.completed ? (
          <p style={{ textDecoration: 'line-through', color: 'green' }}>
            {props.number}. {props.todo.title}
          </p>
        ) : (
          <p style={{ color: 'grey' }}>
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
        <MyButton onClick={() => setVisible(true)}>
          Просмотреть
        </MyButton>
        <MyModal visible={visible} setVisible={setVisible}>
          <TodoUpdate {...props} setVisible={setVisible}/>
        </MyModal>
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
