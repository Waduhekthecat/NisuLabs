import Carousel from "../components/Carousel";
import "./DLC.css";
import dlc1 from "../assets/dlc1.jpg";
import DLCBtns from "../components/DLCBtns";

const DLC = () => {
  return (
    <div className="DLC-container">
      <div className="carousel-wrapper">
        <Carousel />
        <div className="carousel-text-overlay">
          <h1>Diamond-Like Carbon Coating</h1>
          <h2>Improved Component Lifespan and Performance
          </h2>
        </div>
      </div>
      <div className="text-container">
        <p>
          Whether you’re in the oil and gas industry or the automotive sector, your equipment and components face intense pressure, corrosion, and wear. That’s where <b>NISU Labs</b> comes in.
        </p>
        <p>
          At NISU Labs, we help you reduce total cost of ownership and maximize ROI by applying <b>premium Diamond-Like Carbon (DLC) coatings</b>. This advanced thin-film technology creates a wear-resistant chemical barrier that dramatically improves the performance and lifespan of your components. DLC coatings mimic the hardness and durability of diamond, the hardest known material. The result is a <b>low-friction, super-hard, amorphous carbon layer with diamond-like properties</b>.
        </p>
        </div>
        <div className="benefits-section">
        <div className="benefits-img">
          <img src={dlc1} alt="DLC Coating Illustration" />
        </div>
        <div className="benefits-list">
          <h2>Key Benefits of DLC Coatings:</h2>
          <ul>
            <li>Anti-reflective properties</li>
            <li>Abraision and corrosion resistance</li>
            <li>Gas barrier</li>
          </ul>
        </div>
      </div>
      <div className="text-container">
        <p>
          Achieving the optimal surface performance requires precision. Our coatings are engineered with exact thickness specifications, using <b>over 20 years of hands-on experience, technical expertise, and cutting-edge equipment</b>. This combination allows us to customize DLC coatings to specific applications, including those requiring precise wavelength control for industrial and R&D use.
        </p>
        <p>
          By modifying the surface of materials, DLC coatings enhance performance and improve <b>tribological properties</b>, resulting in superior wear resistance.
        </p>
      </div>
      <DLCBtns />
    </div>
  );
};

export default DLC;
