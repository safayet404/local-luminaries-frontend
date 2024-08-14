import React from 'react'
import CommonBanner from '../components/CommonBanner'
import Login from '../components/Login'

const LoginPage = () => {
  return (
    <div>

         <CommonBanner title="Login Page" subTitle="Home | Login" />
         <Login />
    </div>
  )
}

export default LoginPage