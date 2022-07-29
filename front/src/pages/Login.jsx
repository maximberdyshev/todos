import React, { useState } from 'react'
import AuthInput from '../components/AuthWindow/AuthInput'
import AuthBtn from '../components/AuthWindow/AuthBtn'
import MyModal from '../components/UI/modal/MyModal'

const Login = () => {
  const [modal, setModal] = useState(false)
  const [logState, setLogState] = useState(null)
  const [userData, setUserData] = useState({
    userLogin: '',
    userPass: '',
  })

  return (
    <div className='login'>
      <MyModal visible={modal} setVisible={setModal}>
        {logState}
      </MyModal>
      <AuthInput userData={userData} setUserData={setUserData} />
      <AuthBtn
        userData={userData}
        setUserData={setUserData}
        setLogState={setLogState}
        setModal={setModal}
      />
    </div>
  )
}

export default Login
