import React from 'react'
import CommonBanner from '../components/CommonBanner'
import TourDetails from '../components/TourDetails'

const TourDetailsPage = () => {
  return (
    <div>
        <CommonBanner title="Tour Details" subTitle="Home | Tour Details" />
        <TourDetails />
    </div>
  )
}

export default TourDetailsPage