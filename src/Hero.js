import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="section1">
        <h3>Welcome to TCSC Coding Club</h3>
        <h1>A Better Space For Computer Geeks!</h1>
        <p className="hero-para">
          Join us to learn, collaborate, and have fun with coding!
        </p>
        <div className="btn">
          {/* <a href="#"> */}
          {/*     <button>Register Now</button> */}
          {/* </a> */}

          <a href="#event">
            <button>On Going Events</button>
          </a>
        </div>
      </div>
      <div className="section2">
        <img src="./hero-img.png" alt="Hero Img" />
      </div>
    </div>
  );
}

export default Hero;
