import React from 'react'

export default function AuthBtn(props) {
  async function logIn(e) {
    e.preventDefault()
    let loginIsTrue = false
    let passIsTrue = false

    let findUsers = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    ).then((response) => response.json())
    //   .then((json) => findUsers = json)

    // TODO: проверка авторизации по логину и паролю
    for (let i = 0; i < findUsers.length; i++) {
      if (props.userLogin === findUsers[i].username) {
        // props.authTrue()
        loginIsTrue = true
        // return
      }
      if (props.userPass === findUsers[i].address.zipcode) {
        // props.authTrue()
        passIsTrue = true
        // return
      }
      if (loginIsTrue && passIsTrue) {
        props.authTrue()
      }
    }

    props.setUserLogin('')
    props.setUserPass('')
  }

  async function regIn(e) {
    e.preventDefault()

    // TODO: проверка на наличие пользователя в БД
    // если пользователь есть - уведомление о дубле (проверка по логину)
    // если пользователя нет - создать и уведомить об успехе
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        username: props.userLogin,
        zipcode: props.userPass,
        userId: Date.now(),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
    props.setUserLogin('')
    props.setUserPass('')

    // TODO: уведомление об успешном создании пользователя
  }
  
  return (
    <div>
      <form className='auth-btn'>
        <button onClick={logIn}>LogIn</button>
        <button onClick={regIn}>Register</button>
      </form>
    </div>
  )
}
