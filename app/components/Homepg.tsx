import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import images1 from "../images/v3.jpg";
import images2 from "../images/v1.jpg";
import images4 from "../images/v6.jpg"; 
import images5 from "../images/v5.jpg";

const images: string[] = [images1, images2, images4, images5];

export default function MyHome() {
    const [isClient, setIsClient] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Check if the component is rendered on the client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Handle automatic image transition (5 seconds interval)
    useEffect(() => {
        if (isClient) {
            const timeout = setTimeout(() => {
                setCurrentImageIndex((currentImageIndex + 1) % images.length);
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [currentImageIndex, isClient]);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    if (!isClient) {
        return null; // Don't render anything on the server side
    }

    return (
        <section>
            {/* Carousel Section */}
            <div className="container mx-auto " id="hom">
                <div className="row">
                    <div className="col">
                        <Carousel
                            responsive={responsive}
                            autoPlay={true}
                            autoPlaySpeed={5000}
                            infinite={true}
                            showDots={true}
                            arrows={false}
                        >
                            {images.map((image, index) => (
                                <div key={index} className="rounded overflow-hidden">
                                    <img
                                        src={image}
                                        alt={`home-${index}`}
                                        className="w-full max-h-full object-cover"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}
