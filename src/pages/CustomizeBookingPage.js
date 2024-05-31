import React from 'react'
import CommonBanner from '../components/CommonBanner'
import CustomizeBooking from '../components/CustomizeBooking'

const CustomizeBookingPage = () => {
  return (
    <div>
        <CommonBanner title="Customize Tour Booking" subTitle="Home | Booking" />
        <CustomizeBooking />
    </div>
  )
}

export default CustomizeBookingPage