import React from "react";
import { useNavigate } from 'react-router-dom';

import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homePage">
      <header className="heroSection">
        <h1 className="heroTitle">Welcome to SkillSphere</h1>
        <p className="heroDescription">
          Connect with others to exchange skills and grow together. Learn what you need, teach what you know.
        </p>
        <div className="heroButtons">
          <button onClick={() => {navigate('/matchmaking')}} className="actionButton">Find Skills</button>
        </div>
      </header>

      <section className="featuresSection">
        <h2>Why SkillSphere?</h2>
        <div className="features">
          <div className="featureCard">
            <h3>Learn New Skills</h3>
            <p>Barter your expertise for new abilities in a variety of fields.</p>
          </div>
          <div className="featureCard">
            <h3>Connect with People</h3>
            <p>Build meaningful connections while exchanging knowledge.</p>
          </div>
          <div className="featureCard">
            <h3>Expand Your Horizons</h3>
            <p>Gain experiences and perspectives you wouldn't find anywhere else.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;