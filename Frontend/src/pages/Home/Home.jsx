// src/pages/Home/Home.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Home.css";

// Import components
import Navbar from "../../components/Navbar/Navbar";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import Footer from "../../components/Footer/Footer";
import LoginPopup from "../../components/LoginPopup/LoginPopup";
import { assets } from "../../assets/frontend_assets/assets";

const Home = () => {
  const [category, setCategory] = useState("All");
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="home">
      {/* Popup login */}
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      {/* Top nav bar */}
      <Navbar setShowLogin={setShowLogin} />

      {/* Hero section */}
{/* Hero section */}
<section className="hero">
  <div className="hero-content">
    <h1>
      Order your favorite cake here and make
      <br /> every moment extra special!
    </h1>
    <p>
      Celebrate life’s sweetest moments with a delicious cake that brings
      joy to every occasion. Whether big or small, a cake makes happiness
      even more irresistible—treat yourself or a loved one today.
    </p>
    <button className="hero-btn">Shop Now</button>
  </div>
</section>

      {/* Menu categories */}
      <ExploreMenu category={category} setCategory={setCategory} />

      {/* Food items display */}
      <FoodDisplay category={category} />

      {/* Call-to-action section */}
      <AppDownload />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
