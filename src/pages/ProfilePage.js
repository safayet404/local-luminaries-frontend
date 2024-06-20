import React from 'react'
import CommonBanner from '../components/CommonBanner'
import Profile from '../components/Profile'

const ProfilePage = () => {
  return (
    <div>
        <CommonBanner title="Profile Page" subTitle="Home | Profile  " />
        <Profile/>
    </div>
  )
}

export default ProfilePage