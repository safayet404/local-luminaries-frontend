import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import SB1 from "../images/hero-image.jpg"
import SB2 from "../images/slider-bg-2.jpg"
import SB3 from "../images/slider-bg-3.jpg"
import SB4 from "../images/slider-bg-4.jpg"
import SB5 from "../images/slider-bg-5.jpg"
import act1 from "../images/sd.png"
import act2 from "../images/pd.png"
import act3 from "../images/bicycle.png"
import act4 from "../images/atv.png"
import DS1 from "../images/destination-1.jpg"
import DS2 from "../images/destination-2.jpg"
import DS3 from "../images/destination-3.jpg"
import DS4 from "../images/destination-4.jpg"
import DS5 from "../images/destination-5.jpg"
import DS6 from "../images/destination-6.jpg"
import B1 from "../images/B-1.jpg"
import B2 from "../images/B-2.jpg"
import B3 from "../images/B-3.jpg"
import B4 from "../images/B-4.jpg"
import B5 from "../images/B-5.jpg"
import B6 from "../images/B-6.jpg"
import B7 from "../images/B-7.jpg"
import B8 from "../images/B-8.jpg"
import B9 from "../images/B-9.jpg"
import B10 from "../images/B-10.jpg"
import B11 from "../images/B-11.jpg"
import B12 from "../images/B-12.jpg"
import B13 from "../images/B-13.jpg"
import B14 from "../images/B-14.jpg"
import B15 from "../images/B-15.jpg"
import B16 from "../images/B-16.jpg"
import B17 from "../images/B-17.jpg"
import B18 from "../images/B-18.jpg"
import B19 from "../images/B-19.jpg"
import B20 from "../images/B-20.jpg"
import B21 from "../images/B-21.jpg"
import B22 from "../images/B-22.jpg"
import B23 from "../images/B-23.jpg"
import B24 from "../images/B-24.jpg"
import B25 from "../images/B-25.jpg"

import ImageSlider from './ImageSlider'
import Activity from './Activity'
import Destination from './Destination'
import Tours from './Tours'
import Video from './Video'
import CommonBanner from './CommonBanner'
const slides = [
  {
    image: B1, 
    text: "Explore the world",
    desc: "A more rewarding way to travel",
  },
  {
    image: B18,
    text: "Find your passion",
    desc: "escape life for a little while",
  },
  {
    image: B8,
    text: "commit to travel",
    desc: "The real adventure is out there",
  },
  {
    image: B9,
    text: "Be an adventurer",
    desc: "collecting memories every time",
  },
  {
    image: B19,
    text: "Be an adventurer",
    desc: "collecting memories every time",
  },
  {
    image: B20,
    text: "Be an adventurer",
    desc: "collecting memories every time",
  },
  // Add more slides as needed
];

const cardData = [
  {
    image : act1,
    title : "Scuba Diving",
    description : "Drenaline-pumping excursions for the experienced"
  },
  {
    image : act4,
    title : "ATV",
    description : "Start your engines and get ready for an adventure"
  },
  {
    image : act2,
    title : "Paragliding",
    description : "Wild landscapes and rough rivers and you will rafting."
  },
  {
    image : act3,
    title : "Cycling",
    description : "Thrilling off-road experience public roads maximum security."
  },
]

const destinationData = [
  {
    image : B1,
    title : "Cox's Bazar",
    rating : 5,
  },
  {
    image : B25,
    title : "Bandarban",
    rating : 5,
  },
  {
    image : B24,
    title : "Sadhapathor",
    rating : 5,
  },
  {
    image : B23,
    title : "Sylhet",
    rating : 5,
  },
  {
    image : B22,
    title : "Ratargul",
    rating : 5,
  },
  {
    image : B21,
    title : "Sreemangal"
  },
]
const HomeBanner = () => {
  return (
    <div>
     <ImageSlider slides={slides}/>
       <Activity actData={cardData}></Activity>
       <Destination dstCard={destinationData}></Destination>
       <Tours />
       <Video />
      
    </div>
  )
}

export default HomeBanner