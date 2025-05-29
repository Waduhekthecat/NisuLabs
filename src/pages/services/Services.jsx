import './Services.css';
import services from "../../assets/Services.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-container" style={{ backgroundImage: `url(${services})` }}>
      <div className="services-text">
        <h1>NISU Laboratories Offers</h1>
        <h2>DLC Coating Service For the Following Components: </h2>
      </div>
        <Link to="/Contact" className="inquire-btn" >
                Request Quote
            </Link>
    </div>
  );
};

export default Services;
