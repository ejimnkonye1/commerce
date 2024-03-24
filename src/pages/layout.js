import React, { useState, useEffect } from "react";
import images1 from "../images/v3.jpg";
import images2 from "../images/v1.jpg";
import images4 from "../images/v6.jpg";
import images5 from "../images/v5.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Products from "./Products";
import Tools from "../Tools";
import "../styles/layout.css";

function Layout({ cartItems, setCartItems }) {
    const images = [images1, images2, images4, images5];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        // Update the current image index with a 10-second interval
        const imageInterval = setInterval(() => {
          
        Aos.init({ duration: 10000 });
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(imageInterval); // Clear the interval when the component unmounts
    }, [images.length]);

    return (
        <section className="p-2 hom-pg">
            <div className="container " id="hom">
                <div className="row">
                    <div className="col">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={images1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={images2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={images4} class="d-block w-100" alt="..." />
    </div>
  </div>
 
</div>
                    </div>
                </div>
            </div>
            <Products cartItems={cartItems} setCartItems={setCartItems} />
            <Tools />
        </section>
    );
}

export default Layout;
