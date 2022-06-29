import React, { useState } from 'react'

export default function AuthForm(props) {
  const [userLogin, setUserLogin] = useState('')
  const [userPass, setUserPass] = useState('')

  async function logIn(e) {
    e.preventDefault()
    let loginIsTrue = false
    let passIsTrue = false

    let findUsers = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    ).then((response) => response.json())
    //   .then((json) => findUsers = json)

    // проверка авторизации по логину
    for (let i = 0; i < findUsers.length; i++) {
      if (userLogin === findUsers[i].username) {
        // props.authTrue()
        loginIsTrue = true
        // return
      }
      if (userPass === findUsers[i].address.zipcode) {
        // props.authTrue()
        passIsTrue = true
        // return
      }
      if (loginIsTrue && passIsTrue) {
        props.authTrue()
      }
    }

    // for (let i = 0; i < findUsers.length; i++) {
    //   if (userPass === findUsers[i].address.zipcode) {
    //     // props.authTrue()
    //     passIsTrue = true
    //     return
    //   }
    //   console.log(findUsers[i].address.zipcode)
    // }

    

    setUserLogin('')
    setUserPass('')

    // переделать вывод в лог на мессадж пользователю
    // console.log('Указанного логина не существует')
  }

  function regIn(e) {
    e.preventDefault()
  }

  return (
    <div className='AuthForm'>
      <form className='auth-input'>
        <strong>Введите login</strong>
        <input
          type='text'
          value={userLogin}
          onChange={(e) => setUserLogin(e.target.value)}
        />
        <strong>Введите password</strong>
        <input
          type='password'
          value={userPass}
          onChange={(e) => setUserPass(e.target.value)}
        />
      </form>
      <form className='auth-btn'>
        <button onClick={logIn}>LogIn</button>
        <button onClick={regIn}>Register</button>
      </form>
      {/* remove this button */}
      {/* <button onClick={props.authTrue}>go auth</button> */}
    </div>
  )
}
