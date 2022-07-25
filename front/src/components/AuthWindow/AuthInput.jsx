import React from 'react'
import MyInput from '../UI/input/MyInput'
import styles from './AuthWindow.module.css'

const AuthInput = ({ userData, setUserData }) => {
  return (
    <div>
      <form className={styles.authInput}>
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
