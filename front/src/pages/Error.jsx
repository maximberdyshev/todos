import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1 style={{ marginTop: '150px' }}>Опс! Что-то пошло не так..</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to='/'>Вернуться..</Link>
      </div>
    </div>
  )
}

export default Error
