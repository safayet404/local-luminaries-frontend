import Carousel from "nuka-carousel"
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
const ImageSlider = ({slides}) => {
  return (
   <Carousel withoutControls
   wrapAround autoplay
   autoplayInterval={3000}
  >
    {slides.map((slide,index)=>(
     <div key={index} className="slide">
     <div>
     <p className="slideText">{slide.text}</p>
     <h1 className="slideDesc">{slide.desc}</h1>
     <img
       className="slideImage"
       src={slide.image}
       alt="banner-im"
     />

     <div className="socialIcons">
       <ul>
         <p>
           <CiFacebook />
         </p>
         <p>
           <CiTwitter />
         </p>
         <p>
           <CiInstagram />
         </p>
       </ul>
     </div>
     </div>
   </div>
    ))}
   </Carousel>
   
   
  );
};

export default ImageSlider;

// autoplay
// autoplayInterval={3000}