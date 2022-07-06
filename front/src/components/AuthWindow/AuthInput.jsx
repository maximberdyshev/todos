import React, { useContext } from 'react'
import { AuthContext } from '../../context/MyContext'
import MyInput from '../UI/input/MyInput'

const AuthInput = () => {
  const { userData, setUserData } = useContext(AuthContext)

  return (
    <div className='AuthInput'>
      <form className='auth-input'>
        <h2>LogIn to continue</h2>
        <MyInput
          type='text'
          placeholder='Введите login'
          value={userData.userLogin}
          onChange={(event) =>
            setUserData({ ...userData, userLogin: event.target.value })
          }
        />
        <MyInput
          type='password'
          placeholder='Введите password'
          value={userData.userPass}
          onChange={(event) =>
            setUserData({ ...userData, userPass: event.target.value })
          }
        />
      </form>
    </div>
  )
}

export default AuthInput
