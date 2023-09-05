import React, { useState, useEffect } from "react";
import images1 from "../images/v3.jpg";
import images2 from "../images/v1.jpg";
import images4 from "../images/v6.jpg"; 
import images5 from "../images/v5.jpg";
import images6 from "../images/img_chania.jpg"
import Navbar from '../components/Navbar';
import Aos from "aos";
import "aos/dist/aos.css";
import Products from "./Products";
import Tools from "../Tools";
function MyHome() {
    const images = [images1, images2,images4, images5 ];
    const animationNames = ["zoom-in", "fade-right", "zoom-in", "fade-up"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const currentImage = images[currentImageIndex];
    const currentAnimation = animationNames[currentImageIndex];

    useEffect(() => {
      Aos.init();
        const timeout = setTimeout(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 5000);

        return () => clearTimeout(timeout);
    }, [currentImageIndex]);

    return (
      <section>
        <div className="container" id="hom"   >
  <div className="row">
    <div className="col">
      <div className="rounded">
        <img
          src={currentImage} 
          
          className="img-fluid"
          data-aos={currentAnimation}
          alt="home"
          style={{ maxHeight: "430px", width: "100%" }}
        />
      </div>
    </div>
  </div>
</div>
<Products />
<Tools />
   </section>           
            
            
    
        
        
    ); 
}

export default MyHome;
