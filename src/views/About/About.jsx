import "./About.css";
import React from "react";
import AboutPhoto from "../../assests/AboutPhoto.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <section className="image-section">
        <img className="about-img" src={AboutPhoto} alt="Pfp" />
      </section>

      <section className="text-section">
        <h3 className="about-title">About me</h3>
        <p>
          My early childhood nickname was "Button Boy". <br />
          <br />
          Before I could walk on two feet or speak in complete sentences, my
          daily activities included pressing every button within my reach. My
          parents could set me in front of a disconnected VCR and I would be
          entertained for hours imagining what each button did.
          <br />
          <br />
          Studying computer science at the University of Texas at Austin, my
          curiosity persists. In courses, I love collaborating with equally
          eager students to solve puzzles with code. Recreationally, I trace the
          bleeding edge of technology. Artificial Intelligence and Machine
          Learning have recently captivated my attention and I look forward to
          gaining formal experience in the coming years.
          <br />
          <br />
          Currently, I am searching for opportunities to bring my childhood
          imagination to life. I want to learn new and develop existing
          technologies. I want to lend myself to awesome projects. I want to
          work with inspiring people. Most of all, I want to press more buttons!
        </p>
      </section>
    </div>
  );
};

export default About;
