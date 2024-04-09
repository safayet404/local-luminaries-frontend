import React from 'react'
import CommonBanner from '../components/CommonBanner'
import Tours from '../components/Tours'

const TourPage = () => {
  return (
    <div>
        <CommonBanner title="Tour Page" subTitle="Home | Tour" />
        <Tours/>
    </div>
  )
}

export default TourPage