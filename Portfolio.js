import React from "react";
import girl from "./Girl.jpeg"

const Portfolio = () =>{
    return (
        <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Sanket Bodake" />
        <meta name="description" content="Portfolio website | Web Developer | Open source Enthusiast" />
        <meta name="keywords" content="Sanket, bodake, Sanket bodake, portfolio, css, javascript, software, coding, programming, web, 
  development, developer, frontend" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="IZ7Sm227j_9N0Sy_JmwOvn1_OAm_O2rHr2833ZV0Fro" />
        <title>Sanket Bodake</title>
        <link rel="stylesheet" href="./style.css" />
        <link href="https://fonts.googleapis.com/css?family=Comfortaa:400,700,300|Quattrocento" rel="stylesheet" />
        <link rel="shortcut icon" href="./img/fbavatar_1630400663387_6838396024049256103.png" type="image/x-icon" />
        <meta name="title" content="Portfolio Website | Sanket Bodake" />
        <meta name="title" content="Portfolio Website | Sanket Bodake" />
        <meta itemProp="description" content="Web Developer | Open source Enthusiast" />
        <meta name="application-name" content="Portfolio Website" />
        <meta property="og:site_name" content />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sanketbodake.ninja/" />
        <meta property="og:title" content="Sanket Bodake" />
        <meta property="og:description" content="Portfolio website | Web Developer | Open source Enthusiast" />
        <meta name="url" content="https://sanketbodake.ninja/" />
        <meta name="language" content="English" />  
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sanketbodake.ninja/" />
        <meta name="twitter:title" content="Sanket Bodake" />
        <meta name="twitter:description" content="Portfolio website | Web Developer | Open source Enthusiast" />
        <meta name="twitter:site" content="@Sanket46171296" />
        <meta name="twitter:creator" content="@Sanket46171296" />
        <meta name="url" content="https://sanketbodake.ninja/" />
        <meta property="og:locale" content="en" />
        <meta name="language" content="English" />
        <meta itemProp="image" content="https://sanketbodake.ninja/myImage.jpg" />
        <meta property="og:image" content="https://sanketbodake.ninja/myImage.jpg" />
        <meta name="twitter:image" content="https://sanketbodake.ninja/myImage.jpg" />
        <meta name="twitter:image:src" content="https://sanketbodake.ninja/myImage.jpg" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content={512} />
        <meta property="og:image:height" content={512} />
        <meta property="twitter:image:type" content="image/png" />
        <meta property="twitter:image:width" content={512} />
        <meta property="twitter:image:width" content={512} />
        <header className="header">
          <nav className="navbar">
            <div className="navbar-container container">
              <div>
                <h1 className="navbar-brand">Sanket Bodake</h1>
              </div>
              <ul className="menu-items">
                <li><a href="#about">About</a></li>
                <li><a href="#my-works">Project</a></li>
                <li><a href="#contact-me">Contact</a></li>
              </ul>
            </div>
          </nav>
          <div className="home-content" id="home-page">
            <div className="name">
              <h1>Hi,This is SWATHIIII!</h1>
              <p>I'm  a undergraduate Engineering student from skcet. I'm interested in  different field apart from my main course.  I have acquiring the skills and knowledge necessary to make my  project a success. i am passionate in learning coding skill and developing webside </p>
            </div>
            <div className="angle-down-icon">
              <a href="#about"><i className="fas fa-angle-down" /></a>
            </div>
          </div>
        </header>
        <section className="about-me" id="about">
          <div className="container">
            <div className="about-content">
              <div className="left-content">
                <div>
                  <h1 className="about-heading">About Me</h1>
                </div> 
                <img src={girl} alt="image"/>
                <p>
                  I am 19!Persuing BE ECE at Sri Krishna College of Engineering and Technology.
                </p>
                <div className="work-arrow">
                  <p>
                    <a href="#my-works">Check out my work <i className="fas fa-arrow-down" /></a>
                  </p>
                </div>
              </div>
              <div className="skills">
                <div className="right-content">
                  <div>
                    <h1 className="skills-heading">My Skills</h1>
                  </div>
                  <div className="skills-bar">
                    <div className="bar">
                      <div className="info">
                        <span>HTML</span>
                      </div>
                      <div className="progress-line"><span className="html" /></div>
                      <div className="bar">
                        <div className="info">
                          <span>CSS</span>
                        </div>
                        <div className="progress-line"><span className="css" /></div>
                        <div className="bar">
                          <div className="info">
                            <span>REACT</span>
                          </div>
                          <div className="progress-line"><span className="bootstrap" /></div>
                          <div className="bar">
                            <div className="info">
                              <span>JAVASCRIPT</span>
                            </div>
                            <div className="progress-line"><span className="javascript" /></div>
                            <div className="bar">
                              <div className="info">
                                <span>C Programming</span>
                              </div>
                              <div className="progress-line"><span className="c" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="work-arrow-2">
                    <p>
                      <a href="#my-works">Check out my work <i className="fas fa-arrow-down" /></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="my-works">
          <div className="portfolio">
            <div className="proj-heading">
              <h1>Project</h1>
            </div>
            <div className="portfolio-content container">
              <div className="proj-1">
                <img src="https://i.postimg.cc/qM9TjGTG/Screenshot-80.png" />
                <div className="proj1-details">
                  <i className="fab fa-html5" />
                  <i className="fab fa-css3-alt" />
                  <i className="fab fa-js" />
                  <h2>Restaurant Website UI</h2>
                  <p>Build Using HTML,CSS,JS</p>
                  <button><a href="https://github.com/sanketbodke/Restaurant-Website" target="blank">View source <i className="fas fa-external-link-alt" /></a>
                  </button>
                  <button><a href="https://fervent-lamarr-2bc6cf.netlify.app/" target="blank">Try it Live <i className="fas fa-external-link-alt" /></a>
                  </button>
                </div>
              </div>
              <div className="proj-2">
                <img src="https://i.postimg.cc/FR848bSm/Screenshot-76.png" />
                <div className="proj2-details">
                  <i className="fab fa-html5" />
                  <i className="fab fa-css3-alt" />
                  <h2>Profile Card</h2>
                  <p>Build Using HTML,CSS</p>
                  <button><a href="https://github.com/sanketbodke/CodePen" target="blank">View source <i className="fas fa-external-link-alt" /></a>
                  </button>
                  <button><a href="https://codepen.io/sanketbodke/pen/NWgKyZW" target="blank">Try it Live <i className="fas fa-external-link-alt" /></a>
                  </button>
                </div>
              </div>
              <div className="more-work">
                <p>
                  More
                </p>
                <a href="https://codepen.io/sanketbodke" target="blank">CodePen</a>
              </div>
            </div>
          </div>
        </section>
        <div className="contact" id="contact-me">
          <div className="container">
            <div className="contact-content">
              <h2>Wanna Contact Me?</h2>
              <p className="mail">
                Get in touch with me <i className="fas fa-arrow-right" /> swathisenthil511@gmail.com
              </p>
              <p className="links">Or find me on:</p>
              <a href="https://www.linkedin.com/in/swathi-senthil-8345a1256/" target="blank"><i className="fab fa-linkedin">
                  Linkedin</i></a>
              <a href="https://codepen.io/sanketbodke" target="blank"><i className="fab fa-codepen"> CodePen</i></a>
              <a href="https://github.com/swathhi" target="blank"><i className="fab fa-github" /> Github</a>
              <a href="https://dev.to/sanketbodake" target="blank"><i className="fab fa-dev" /> Dev Community</a>
              <a href="https://twitter.com/Sanket46171296" target="blank"><i className="fab fa-twitter"> Twitter</i></a>
              <a href="https://www.instagram.com/" target="blank"><i className="fab fa-instagram" /> Instagram</a>
            </div>
          </div>
        </div>
      </div>
    )
};
export default Portfolio;