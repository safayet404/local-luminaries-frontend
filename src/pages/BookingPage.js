import React from 'react'
import CommonBanner from '../components/CommonBanner'
import Booking from '../components/Booking'

const BookingPage = () => {
  return (
    <div>
        <CommonBanner title="Booking Page" subTitle="Home | Booking" />
        <Booking/>
    </div>
  )
}

export default BookingPage