import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="home">
        <h1>Hello There! <span role="img" aria-label="wave">👋</span></h1>
        <img src="jobert.jpg" alt="gaan" />
       <h2>I'm Jobert I M. Ga-an</h2> 
        <h4 className="Course and Year">BSIT-3</h4>
      </section>

      <section id="about" className="about">
        <h3> About Me</h3>
       <i> <p>
          I’m a 3rd year BS Information Technology  student at Western Institule of Technology.
          I'm driven by the desire to continually learn and improve, both in my studies and in life.
        </p> </i>
        <blockquote> 
        Many of life’s failures are people who did not realize how close they were to success when they gave up.”
          <br />
          <cite>– Thomas A. Edison</cite>
        </blockquote>
      </section>

      <section id="projects" className="projects">
        <h3>Projects</h3>
        <br></br>
        <br></br>
        <div classname="project-list">
            <img src="codes.png" alt="" />
            <h3>Project : Website Portfolio</h3>
            <p> A digital collection of my work, achievements. It is used to showcase my experience and creative projects, especially in fields like design, writing, photography, art, and software development.</p>
          </div>
      </section>

      <section id="contact" className="contact">
        <h3>Contact Me</h3>
        <p>Facebook: <a href="https://www.facebook.com/pancit.canton.54584/">Jobert Malobago Ga-an</a></p>
        <p>Gmail: <a href="https://mail.google.com/mail/u/0/#inbox">@jobertgaan05</a></p>
        <p>Instagram: <a href="https://www.instagram.com/itsjobertqt/"> @itsrjqt</a></p>
        <p>Figma:<a href="https://www.figma.com/design/0tlsPqZOPD5w4avVU713c7/JOBERT?node-id=8-80&node-type=frame&t=hm1pcpI0FzAZy2Jc-0">Figma.com</a></p>
      </section>
    </div>
  );
}

export default App;
