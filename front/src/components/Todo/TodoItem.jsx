import React, { useState } from 'react'
import MyButton from '../UI/button/MyButton'
import MyModal from '../UI/modal/MyModal'
import TodoUpdate from './TodoUpdate'
import styles from './Todo.module.css'

export default function TodoItem({todo, number, completeTodo, removeTodo, seeTodo}) {
  const [visible, setVisible] = useState(false)

  return (
    <div className={styles.TodoItems}>
      <div className={styles.todoItem}>
        {todo.completed ? (
          <p style={{ textDecoration: 'line-through', color: 'green' }}>
            {number}. {todo.title}
          </p>
        ) : (
          <p style={{ color: 'grey' }}>
            {number}. {todo.title}
          </p>
        )}
        <p>{todo.body}</p>
        <p>Ответственный: {todo.executor} </p>
      </div>
      <div className={styles.todoItem}>
        <p>Приоритет: {todo.priority} </p>
        <p>Дата окончания: {todo.dateEnd} </p>
        {todo.completed ? (
          <p>Статус задачи: выполнена </p>
        ) : (
          <p>Статус задачи: в работе </p>
        )}
      </div>
      <div className={styles.todBtn}>
        <MyButton onClick={() => setVisible(true)}>
          Просмотреть
        </MyButton>
        <MyModal visible={visible} setVisible={setVisible}>
          <TodoUpdate todo={todo} seeTodo={seeTodo} setVisible={setVisible}/>
        </MyModal>
        <MyButton onClick={() => completeTodo(todo)}>
          {todo.completed ? <p>Отменить</p> : <p>Выполнить</p>}
        </MyButton>
        <MyButton onClick={() => removeTodo(todo)}>
          Удалить
        </MyButton>
      </div>
    </div>
  )
}
