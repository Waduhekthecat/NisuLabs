import './Services.css';
import services from "../assets/Services.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-container" style={{ backgroundImage: `url(${services})` }}>
      <div className="services-text">
        <h1>NISU Laboratories Offers</h1>
        <h2>DLC Coating Service For the Following Components: </h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
        <Link to="/Contact" className="inquire-btn" >
                Request Quote
            </Link>
    </div>
  );
};

export default Services;
