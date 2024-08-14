import React from 'react'
import CommonBanner from '../components/CommonBanner'
import Signup from '../components/Signup'

const SignupPage = () => {
  return (
    <div>
         <CommonBanner title="Signup Page" subTitle="Home | Signup" />
         <Signup/>
    </div>
  )
}

export default SignupPage