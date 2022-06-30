import React from 'react'

export default function AuthInput(props) {
  return (
    <div className='AuthInput'>
      <form className='auth-input'>
        <strong>Введите login</strong>
        <input
          type='text'
          value={props.userLogin}
          onChange={(e) => props.setUserLogin(e.target.value)}
        />
        <strong>Введите password</strong>
        <input
          type='password'
          value={props.userPass}
          onChange={(e) => props.setUserPass(e.target.value)}
        />
      </form>
    </div>
  )
}
