import React, { useState } from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'

const TodoUpdate = (props) => {
  const [updTodo, setUpdTodo] = useState({
    id: props.todo.id,
    title: props.todo.title,
    body: props.todo.body,
    dateEnd: props.todo.dateEnd,
    dateCreate: props.todo.dateCreate,
    dateUpdate: props.todo.dateUpdate,
    priority: props.todo.priority,
    completed: props.todo.completed,
    initiator: props.todo.initiator,
    executor: props.todo.executor,
  })

  const todoHasUpdate = (event) => {
    event.preventDefault()
    props.seeTodo(updTodo)
    props.setVisible(false)
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
