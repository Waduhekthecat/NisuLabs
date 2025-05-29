import { useState, useEffect } from "react";
import "./Carousel.css"; 
import slide1 from "../assets/1.jpg";
import slide2 from "../assets/2.jpg";
import slide3 from "../assets/3.jpg";

const images = [slide1, slide2, slide3];


export default function CarouselComponent() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="tint"></div>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`carousel-image ${index === current ? "active" : ""}`}
        />
      ))}
    </div>
  );
}
