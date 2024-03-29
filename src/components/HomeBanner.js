import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import SB1 from "../images/hero-image.jpg"
import SB2 from "../images/slider-bg-2.jpg"
import SB3 from "../images/slider-bg-3.jpg"
import SB4 from "../images/slider-bg-4.jpg"
import SB5 from "../images/slider-bg-5.jpg"
import ImageSlider from './ImageSlider'


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
    image: SB2,
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
const HomeBanner = () => {
  return (
    <div>
     <ImageSlider slides={slides}/>
       
    </div>
  )
}

export default HomeBanner