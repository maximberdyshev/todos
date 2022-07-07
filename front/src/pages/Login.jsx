import React, { useState } from 'react'
import AuthInput from '../components/AuthWindow/AuthInput'
import AuthBtn from '../components/AuthWindow/AuthBtn'
import MyModal from '../components/UI/modal/MyModal'

const Login = () => {
  const [modal, setModal] = useState(false)
  const [logState, setLogState] = useState()

  return (
    <div className='login'>
      <MyModal visible={modal} setVisible={setModal}>
        {logState}
      </MyModal>
      <AuthInput />
      <AuthBtn setLogState={setLogState} setModal={setModal} />
    </div>
  )
}

export default Login
