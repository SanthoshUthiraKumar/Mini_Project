import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './images/Predictive-maintenance.png';
function Home() {
  return (
    <div>
      <header className="container">
        <nav>
          <div className="logo">
            <p>Decentralized Maintenance</p>
          </div>

          <div className="buttons">
            <Link to="/login" className="button contact">Login</Link>
            <Link to="/register" className="button get-started">Register</Link>
          </div>
        </nav>

        <div className="header-content">
          <div className="header-content-left">
            <h1>Secure and Transparent Predictive Maintenance</h1>
            <p>
              Our decentralized system uses blockchain and machine learning to predict equipment failures,
              enhancing reliability, reducing downtime, and securing data integrity for industrial systems.
            </p>
            <Link to="/dashboard" className="button get-started">
              Go to Dashboard
            </Link>
          </div>
          <h1>                                     
            
          </h1>
          <div className="header-content-right">
            <img src={logo} alt={"logo"} />
          </div>
        </div>
      </header>

      <main id="preview">
        <section className="app-preview container">
          <div className="app-preview-left">
            <img src="./images/equipment-preview.svg" alt="Equipment Preview" />
          </div>

          <div className="app-preview-right">
            <h2 className="section-title">Revolutionizing Maintenance with Predictive Insights</h2>
            <p className="section-paragraph">
              Our system combines blockchain transparency and machine learning intelligence, enabling companies to preemptively address equipment issues before failures occur.
            </p>
            <div className="get-started-line">
              <Link to="/dashboard" className="get-started">Get Started</Link>
              <div className="green-line"></div>
            </div>
          </div>
        </section>

        <section className="track-your-spending container" id="track">
          <div className="track-your-spending-left">
            <h2 className="section-title">Real-time Predictive Monitoring</h2>
            <p className="section-paragraph">
              Receive real-time updates and predictive insights, empowering proactive maintenance and extending equipment life.
            </p>
            <div className="get-started-line">
              <Link to="/dashboard" className="get-started">Get Started</Link>
              <div className="green-line"></div>
            </div>
          </div>

          <div className="track-your-spending-right">
            <img src="./images/realtime-assistance.svg" alt="Real-time Assistance" />
          </div>
        </section>

        <section id="contact" className="get-in-touch container">
          <div className="get-in-touch-content">
            <div className="get-in-touch-left">
              <h2 className="section-title">Connect with Us</h2>
            </div>
            <div className="get-in-touch-right">
              <Link to="#contact" className="button get-started">Contact</Link>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-card">
            <h3>Our Mission</h3>
            <Link to="/">Home</Link>
            <Link to="#preview">Preview</Link>
            <Link to="#track">Features</Link>
            <Link to="#contact">Contact</Link>
          </div>
          <div className="footer-card">
            <h3>About</h3>
            <p>Team: Predictive Maintenance Development Team</p><br />
            <a href="https://github.com" target="_blank">Source code</a>
          </div>
          <div className="footer-card">
            <h3>Team Members</h3>
            <p>Santhosh U</p><br />
            <p>Sri Karthickeyan Ganapathy</p><br />
            <p>Naveen Kumar P</p><br />
            <p>Manoj Karthik R</p><br />
          </div>
          <div className="footer-card">
            <h3>Get in touch</h3>
            <div className="social">
              <a href="https://www.linkedin.com" target="_blank" id="linkedin">
                <i data-feather="linkedin"></i>
              </a>
              <a href="https://github.com" target="_blank" id="git">
                <i data-feather="github"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" id="insta">
                <i data-feather="instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
