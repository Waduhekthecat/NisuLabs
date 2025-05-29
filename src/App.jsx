import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import DLC from "./pages/dlc/DLC";
import Home from "./pages/home/Home";
import Technologies from "./pages/technologies/Technologies";
import Services from "./pages/services/Services";
import Contact from "./pages/Contact";
import ScrollToTop from './components/router/ScrollToTop';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-layout">
        <Nav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DLC" element={<DLC />} />
            <Route path="/Technologies" element={<Technologies />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
