import React from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          <br />
          I'm
          <br />
          <img src={LogoTitle} alt="developer" />
          eka Jorjikia <br />
          Web Developer
        </h1>
        <h2>Frontend Developer / Backend Developer / Blockchain Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
