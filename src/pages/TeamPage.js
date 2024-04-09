import React from 'react'
import Team from '../components/Team'
import CommonBanner from '../components/CommonBanner'

const TeamPage = () => {
  return (
    <div>
        <CommonBanner title="Team Page" subTitle="Home | Team" />
        <Team />
    </div>
  )
}

export default TeamPage