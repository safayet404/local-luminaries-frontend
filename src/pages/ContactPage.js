import React from 'react'
import CommonBanner from '../components/CommonBanner'
import Contact from '../components/Contact'

const ContactPage = () => {
  return (
    <div>
        <CommonBanner title="Contact Page" subTitle="Home | Contact" />
        <Contact/>
    </div>
  )
}

export default ContactPage