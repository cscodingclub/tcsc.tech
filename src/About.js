import Curve from "./Curve";
import "./About.css";

function About() {
  return (
    <>
      <Curve />
      <div id="about" className="about">
        <h1>About Us</h1>
        <div className="about-flex">
          <div className="about-img">
            <img src="./compressed-original.webp" alt="About Image" />
          </div>
          <div className="about-info">
            <p className="para-about">
              Welcome to the CS Department's Coding Club, established on July 4,
              2024! Whether you're an experienced developer or new to coding,
              this is the place for you. Our goal is to collaborate on diverse
              projects, combining our talents and knowledge. We offer both
              practical and theoretical learning to enhance your coding skills.
              Join us to code, learn, and grow together in a supportive and
              innovative environment. Let's achieve great things as a community!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
