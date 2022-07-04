import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default function TodoContainer() {
  let [todos, setTodo] = useState([
    { id: 1, title: '123' },
    { id: 2, title: '234' },
    { id: 3, title: '345' },
  ])

  async function chk() {
    // let obj = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10_page=1').then(
      let obj = await fetch('http://localhost:3001/api/getall').then(
      (response) => response.json()
    )
      // .then((json) => console.log(json))
    console.log(obj)
    setTodo(obj)
  }

  return (
    <div className='TodoContainer'>
      <button onClick={chk}>CHECK</button>
      <TodoInput />
      {todos.length === 0 ? (
        <p>TODO NOT TODO</p>
      ) : (
        <TodoList todos={todos} setTodo={setTodo} />
      )}
    </div>
  )
}
