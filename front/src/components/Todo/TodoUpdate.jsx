import React, { useState } from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'

const TodoUpdate = ({todo, seeTodo, setVisible}) => {
  const [updTodo, setUpdTodo] = useState({
    id: todo.id,
    title: todo.title,
    body: todo.body,
    dateEnd: todo.dateEnd,
    dateCreate: todo.dateCreate,
    dateUpdate: todo.dateUpdate,
    priority: todo.priority,
    completed: todo.completed,
    initiator: todo.initiator,
    executor: todo.executor,
  })

  const todoHasUpdate = (event) => {
    event.preventDefault()
    seeTodo(updTodo)
    setVisible(false)
  }

  return (
    <div>
      <form>
      <strong>Заголовок задачи</strong>
        <MyInput
          type='text'
          value={updTodo.title}
          onChange={(event) =>
            setUpdTodo({ ...updTodo, title: event.target.value })
          }
        />
        <strong>Описание задачи</strong>
        <MyInput
          type='text'
          value={updTodo.body}
          onChange={(event) =>
            setUpdTodo({ ...updTodo, body: event.target.value })
          }
        />
        <strong>Дата окончания задачи</strong>
        <MyInput
          type='text'
          value={updTodo.dateEnd}
          onChange={(event) =>
            setUpdTodo({ ...updTodo, dateEnd: event.target.value })
          }
        />
        <strong>Приоритет задачи</strong>
        <MyInput
          type='text'
          value={updTodo.priority}
          onChange={(event) =>
            setUpdTodo({ ...updTodo, priority: event.target.value })
          }
        />
        <strong>Инициатор</strong>
        <MyInput
          type='text'
          value={updTodo.initiator}
          onChange={(event) =>
            setUpdTodo({ ...updTodo, initiator: event.target.value })
          }
        />
        <strong>Ответственный</strong>
        <MyInput
          type='text'
          value={updTodo.executor}
          onChange={(event) =>
            setUpdTodo({ ...updTodo, executor: event.target.value })
          }
        />
        <MyButton onClick={todoHasUpdate}>Обновить</MyButton>
      </form>
    </div>
  )
}

export default TodoUpdate
