import React from 'react'

export default function TodoInput() {
  return (
    <div className='TodoInput'>
      <form>
        <input type='text' placeholder='введите название задачи'></input>
        <input type='text' placeholder='введите описание задачи'></input>
        <button>Добавить задачу</button>
      </form>
    </div>
  )
}
