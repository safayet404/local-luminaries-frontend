// import Slider from "react-slick";

// import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";

// const ImageSlider = ({ slides }) => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };
//   return (
//     <div>
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="slide">
//             <p className="slideText">{slide.text}</p>
//             <h1 className="slideDesc">{slide.desc}</h1>
//             <img className="slideImage" src={slide.image} alt="banner-im" />

//             <div className="socialIcons">
//               <ul>
//                 <li>
//                   <CiFacebook />
//                 </li>
//                 <li>
//                   <CiTwitter />
//                 </li>
//                 <li>
//                   <CiInstagram />
//                 </li>
//               </ul>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageSlider;

import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import $ from 'jquery';

const ImageSlider = ({slides}) => {
  const options = {
    items: 1,
    rewind: true,
    autoplay: true
  };
  return (
    <div className='text-center'>
        <OwlCarousel options={options}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        {/* Add more items as needed */}
      </OwlCarousel>
    </div>
  )
}

export default ImageSlider