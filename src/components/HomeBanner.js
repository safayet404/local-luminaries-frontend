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
import ImageSlider from './ImageSlider'
import Activity from './Activity'
import Destination from './Destination'
import Tours from './Tours'
import Video from './Video'
import CommonBanner from './CommonBanner'
const slides = [
  {
    image: SB1, 
    text: "Explore the world",
    desc: "A more rewarding way to travel",
  },
  {
    image: SB2,
    text: "Find your passion",
    desc: "escape life for a little while",
  },
  {
    image: SB3,
    text: "commit to travel",
    desc: "The real adventure is out there",
  },
  {
    image: SB4,
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
    image : DS1,
    title : "New York",
    rating : 5,
  },
  {
    image : DS2,
    title : "Rome",
    rating : 5,
  },
  {
    image : DS3,
    title : "Machu Pichu",
    rating : 5,
  },
  {
    image : DS4,
    title : "Hawaii",
    rating : 5,
  },
  {
    image : DS5,
    title : "Canada",
    rating : 5,
  },
  {
    image : DS6,
    title : "Greece"
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
       <CommonBanner title="Araf" subTitle="Safayet" />
    </div>
  )
}

export default HomeBanner