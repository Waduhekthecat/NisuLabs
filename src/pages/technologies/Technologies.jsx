import './Technologies.css';
import Carousel from "../../components/Carousel";

const Technologies = () => {
  return (
    <div className="technologies-container">
      <div className="carousel-wrapper">
        <Carousel />
        <div className="carousel-text-overlay">
          <h1>Cutting-Edge Technology</h1>
          <h2>Precision Coating | Performance Redefined
          </h2>
        </div>
      </div>
      <div className="text-container">
        <p>
          At NISU Labs, we believe in providing the highest quality of Diamond-Like Carbon <span> (DLC) </span> coating 
          
          to all of our
          clients. Our continuous investment in research and proprietary DLC coating technologies is a testament to our commitment to innovation.
        </p>
        <p>
          Currently, at NISU Lab, we use our unique, advanced and patented PECVD (Plasma Enhanced Chemical Vapor
          Deposition) process for Diamond-Like Carbon Coating on components and equipment for improved corrosion and
          wear resistance. PEVCD is a revolutionary process that carefully
          and meticulously deposits a thin and microfilm layer of uniform Diamond-Like Carbon coating on components. This
          coating is specifically deposited at a very low temperature (&lt;150°C). For this reason, it is suitable and
          can be applied on a large variety of components and materials ranging from tungsten carbide to aluminum,
          among others.
        </p>
        <p>
          We typically apply DLC as a single-layer coating, but for more demanding applications, we also offer multi-layer DLC coatings to ensure maximum efficiency and performance. Additionally, our expertise allows us to deposit DLC coatings that perform reliably in high-temperature environments—up to 700°C.
        </p>
      </div>
      <div className="properties-section">
        <div className="properties-text">
          <h2>Unique Properties of Our Process</h2>
          <h3>What are the properties of DLC coatings?</h3>
        </div>
        <div className="properties-list">
          <ul>
            <li>Excellent adhesion</li>
            <li>Good conformality and uniformity</li>
            <li>Low pinhole density</li>
            <li>Flexibility to deposit high-quality films on different substrates</li>
          </ul>
        </div>
        </div>
      </div>
    
  );
};

export default Technologies;
