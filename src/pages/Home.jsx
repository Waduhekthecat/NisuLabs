import './Home.css';
import BG from "../assets/LandingBG.jpg";
import HomeBtns from "../components/HomeBtns";

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${BG})` }}>
      <div className="hero-content">
        <h1 className="hero-title-large">NISU Labs</h1>
        <h2 className="hero-title-small">Precision DLC Coating for Your Critical Parts</h2>
        <HomeBtns />
      </div>
    </div>
  );
};

export default Home;
