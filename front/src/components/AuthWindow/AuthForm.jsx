import React, { useContext, useState } from 'react'
import AuthInput from './AuthInput'
import AuthBtn from './AuthBtn'
import { AuthContext } from '../../context/MyContext'

const AuthForm = (props) => {
  const [userLogin, setUserLogin] = useState('')
  const [userPass, setUserPass] = useState('')

  const { isAuth, setIsAuth } = useContext(AuthContext)

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
      <button onClick={() => setIsAuth(!isAuth)}>TEST LOGIN</button>
    </div>
  )
}

export default AuthForm
