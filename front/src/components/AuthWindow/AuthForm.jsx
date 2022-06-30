import React, { useState } from 'react'
import AuthInput from './AuthInput'
import AuthBtn from './AuthBtn'

export default function AuthForm(props) {
  const [userLogin, setUserLogin] = useState('')
  const [userPass, setUserPass] = useState('')

  return (
    <div className='AuthForm'>
      <AuthInput
        userLogin={userLogin}
        userPass={userPass}
        setUserLogin={setUserLogin}
        setUserPass={setUserPass}
      />
      <AuthBtn
        userLogin={userLogin}
        userPass={userPass}
        setUserLogin={setUserLogin}
        setUserPass={setUserPass}
        authTrue={props.authTrue}
      />
    </div>
  )
}
