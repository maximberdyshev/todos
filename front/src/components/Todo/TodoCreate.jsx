import React, { useState } from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'

const TodoCreate = ({ createTodo }) => {
  const [newTodo, setNewTodo] = useState({
    id: '',
    title: '',
    body: '',
    dateEnd: '',
    dateCreate: '',
    dateUpdate: '',
    priority: '',
    completed: false,
    initiator: '',
    executor: '',
  })

  function getToday() {
    const currentDate = new Date()
    return currentDate.toISOString().split('T')[0]
  }

  const addNewTodo = (event) => {
    event.preventDefault()
    const newTodoItem = {
      ...newTodo,
      id: Date.now(),
      dateCreate: getToday(),
      dateUpdate: '1900-01-01',
      initiator: localStorage.getItem('userName'),
    }
    createTodo(newTodoItem)
    setNewTodo({
      id: '',
      title: '',
      body: '',
      dateEnd: '',
      dateCreate: '',
      dateUpdate: '',
      priority: '',
      completed: false,
      initiator: '',
      executor: '',
    })
  }

  return (
    <div>
      <form>
        <MyInput
          type='text'
          placeholder='Заголовок задачи'
          value={newTodo.title}
          onChange={(event) =>
            setNewTodo({ ...newTodo, title: event.target.value })
          }
        />
        <MyInput
          type='text'
          placeholder='Описание задачи'
          value={newTodo.body}
          onChange={(event) =>
            setNewTodo({ ...newTodo, body: event.target.value })
          }
        />
        <MyInput
          type='text'
          placeholder='Дата окончания задачи'
          value={newTodo.dateEnd}
          onChange={(event) =>
            setNewTodo({ ...newTodo, dateEnd: event.target.value })
          }
        />
        <MyInput
          type='text'
          placeholder='Приоритет'
          value={newTodo.priority}
          onChange={(event) =>
            setNewTodo({ ...newTodo, priority: event.target.value })
          }
        />
        <MyInput
          type='text'
          placeholder='Исполнитель'
          value={newTodo.executor}
          onChange={(event) =>
            setNewTodo({ ...newTodo, executor: event.target.value })
          }
        />
        <MyButton onClick={addNewTodo}>Создать задачу</MyButton>
      </form>
    </div>
  )
}

export default TodoCreate
