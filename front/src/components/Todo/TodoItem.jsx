import React from 'react'

export default function TodoItem(props) {
    function seeThat(e) {
        e.preventDefault()
    }

    function completeThat(e) {
        e.preventDefault()
    }

  return (
    <div className='TodoItem'>
      <form className='todo-item'>
        <strong>{props.todo.id}--</strong>
        <h4>{props.todo.title}</h4>
      </form>
      <div className='todo-btn'>
        <button onClick={seeThat}>Просмотреть</button>
        <button onClick={completeThat}>Выполнить</button>
        <button onClick={() => props.remove(props.todo)}>Удалить</button>
      </div>
    </div>
  )
}
