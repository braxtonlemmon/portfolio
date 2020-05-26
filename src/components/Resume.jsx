import React from 'react';
import '../assets/resumeStyle.css';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.linkColor};
  }
`;

const BackButton = styled.p`
  color: white;
  font-weight: 600;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: -2px 2px 2px grey;
  cursor: pointer;
  background: ${(props) => props.theme.colors.fadedDark};
  text-transform: uppercase;
  &:hover {
    transform: scale(1.02);
  }
`;

function Resume() {
  const history = useHistory();
  return (
  <Wrapper>
    <BackButton onClick={() => history.goBack()}>back</BackButton>
    <div className="main">
      <div className="wrapper">
        <div className="name">
          <h1 className="name-first">Braxton</h1>
          <h1 className="name-last">Lemmon</h1>
          <h2 className="name-title">Web Developer</h2>
        </div>
        <div className="info">
          <div className="info-row">
            <span className="info-label">Phone:</span>
            <span className="info-value">+32 493 12 33 08</span>
          </div>
          <div className="info-row">
            <span className="info-label">Email:</span>
            <span className="info-value">braxtonlemmon@gmail.com</span>
          </div>
          <div className="info-row">
            <span className="info-label">Website</span>
            <span className="info-value">
              <a target="blank" href="https://braxtonlemmon.com">
                braxtonlemmon.com
              </a>
            </span>
          </div>
          <div className="info-row">
            <span className="info-label">Github:</span>
            <span className="info-value">
              <a target="blank" href="https://github.com/braxtonlemmon">
                github.com/braxtonlemmon
              </a>
            </span>
          </div>
          <div className="info-row">
            <span className="info-label">LinkedIn</span>
            <span className="info-value">
              <a
                target="blank"
                href="https://www.linkedin.com/in/braxtonlemmon"
              >
                linkedin.com/in/braxtonlemmon
              </a>
            </span>
          </div>
        </div>
        <div className="section projects">
          <h2>Projects</h2>

          <div className="projects-content content">
            {/* <!-- <div className="project">
            <div className="project-title-bar">
              <h3>The Campfire</h3>
              <a target="blank" href="https://github.com/braxtonlemmon/the-campfire">(Github)</a>
              <a target="blank" href="https://murmuring-wave-95625.herokuapp.com/">(Live)</a>
            </div>
            <div className="project-info">
              <p>
              Social network site. Practiced modeling data, using PostgreSQL with Rails, and implementing OmniAuth. Built using Ruby
              on Rails, Devise, and RSpec.
            </p>
            </div>
          </div> --> */}
            <div className="project">
              <div className="project-title-bar">
                <h3>Battleship</h3>
                <a
                  target="blank"
                  href="https://github.com/braxtonlemmon/battleship-react"
                >
                  (Github)
                </a>
                <a
                  target="blank"
                  href="https://braxtonlemmon.github.io/battleship-react/"
                >
                  (Live)
                </a>
              </div>
              <div className="project-info">
                <p>
                  Browser battleship game. Practiced Test Driven Development,
                  building with functional components, implementing
                  drag-and-drop features. Built using React, Jest, CSS-in-JS.
                </p>
              </div>
            </div>
            <div className="project">
              <div className="project-title-bar">
                <h3>Find Waldo</h3>
                <a
                  target="blank"
                  href="https://github.com/braxtonlemmon/waldo-react-rails"
                >
                  (Github)
                </a>
                <a
                  target="blank"
                  href="https://pumpkin-surprise-94026.herokuapp.com/"
                >
                  (Live)
                </a>
              </div>
              <div className="project-info">
                <p>
                  Image tagging application. Practiced building a frontend with
                  styled components, using PostgreSQL with Ruby on Rails, and
                  connecting a React app to a Rails backend API. Built using
                  Ruby on Rails and React.
                </p>
              </div>
            </div>
            {/* <!-- <div className="project">
            <div className="project-title-bar">
              <h3>Weather Checker</h3>
              <a target="blank" href="https://github.com/braxtonlemmon/weather-app">(Github)</a>
              <a target="blank" href="https://braxtonlemmon.github.io/weather-app/">(Live)</a>
            </div>
            <div className="project-info">
              <p>
                Finds weather data by city. Practiced API interaction, asynchronous functions, and styled components. Built using
                OpenWeather API, React, HTML, and CSS.
              </p>
            </div>
          </div> --> */}
            <div className="project">
              <div className="project-title-bar">
                <h3>Book Library</h3>
                <a
                  target="blank"
                  href="https://github.com/braxtonlemmon/book-library-react"
                >
                  (Github)
                </a>
                <a
                  target="blank"
                  href="https://braxtonlemmon.github.io/book-library-react/"
                >
                  (Live)
                </a>
              </div>
              <div className="project-info">
                <p>
                  GUI book library. Practiced using a JavaScript framework and
                  working with components. Built using React, localStorage,
                  HTML, and CSS.
                </p>
              </div>
            </div>
            <div className="project">
              <div className="project-title-bar">
                <h3>Chess</h3>
                <a target="blank" href="https://github.com/braxtonlemmon/chess">
                  (Github)
                </a>
              </div>
              <div className="project-info">
                <p>
                  Command line game. Practiced Test Driven Development, writing
                  modular code, and storing objects in YAML. Built using Ruby
                  and RSpec.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section skills">
          <h2>Skills and Technologies</h2>
          <div className="skills-content content">
            <ul className="skills-list">
              <li className="skills-list-item">HTML5</li>
              <li className="skills-list-item">CSS3</li>
              <li className="skills-list-item">JavaScript</li>
              <li className="skills-list-item">React</li>
              <li className="skills-list-item">Ruby on Rails</li>
              <li className="skills-list-item">RSpec</li>
              <li className="skills-list-item">Jest</li>
              <li className="skills-list-item">Git</li>
              <li className="skills-list-item">Linux</li>
              <li className="skills-list-item">Express</li>
              <li className="skills-list-item">Node.js</li>
            </ul>
          </div>
        </div>
        <div className="section school">
          <h2>Education</h2>
          <div className="school-content content">
            <div className="school-item">
              <h3 className="school-name">The Odin Project</h3>
              <p className="school-date">2018 - Present</p>
              <h4 className="school-track">Full Stack Track</h4>
            </div>
            <div className="school-item">
              <h3 className="school-name">Brigham Young University</h3>
              <p className="school-date">2007 - 2014</p>
              <h4 className="school-track">
                Bachelor of Science - Recreation Management
              </h4>
            </div>
          </div>
        </div>
        <div className="section work">
          <h2>Work Experience</h2>
          <div className="work-content content">
            <div className="work-item">
              <h3 className="work-name">California State Prison</h3>
              <p className="work-location">California, USA</p>
              <h4 className="work-title">Recreation Therapist</h4>
              <p className="work-date">June 2017 - Sept. 2018</p>
            </div>
            <div className="work-item">
              <h3 className="work-name">
                Centre International d’Études Pédagogiques
              </h3>
              <p className="work-location">Lyon, France</p>
              <h4 className="work-title">Teaching Assistant</h4>
              <p className="work-date">Sept. 2015 - Apr. 2017</p>
            </div>
            <div className="work-item">
              <h3 className="work-name">HCA Medical City McKinney</h3>
              <p className="work-location">Texas, USA</p>
              <h4 className="work-title">Recreation Therapist</h4>
              <p className="work-date">Oct. 2014 - Sept. 2015</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
  );
}

export default Resume;



// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
//   <link rel="stylesheet" href="style.css">
//   <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
// </head>
// <body>
//   <div className="main">
//     <div className="wrapper">
//       <div className="name">
//         <h1 className="name-first">Braxton</h1>
//         <h1 className="name-last">Lemmon</h1>
//         <h2 className="name-title">Web Developer</h2>
//       </div>
//       <div className="info">
//         <div className="info-row">
//           <span className="info-label">
//             Phone:
//           </span>
//           <span className="info-value">
//             +32 493 12 33 08
//           </span>
//         </div>
//         <div className="info-row">
//           <span className="info-label">
//             Email:
//           </span>
//           <span className="info-value">
//             braxtonlemmon@gmail.com
//           </span>
//         </div>
//         <div className="info-row">
//           <span className="info-label">
//             Website
//           </span>
//           <span className="info-value">
//             <a target="blank" href="https://braxtonlemmon.com">braxtonlemmon.com</a>
//           </span>
//         </div>
//         <div className="info-row">
//           <span className="info-label">
//             Github:
//           </span>
//           <span className="info-value">
//             <a target="blank" href="https://github.com/braxtonlemmon">github.com/braxtonlemmon</a>
//           </span>
//         </div>
//         <div className="info-row">
//           <span className="info-label">
//             LinkedIn
//           </span>
//           <span className="info-value">
//             <a target="blank" href="https://www.linkedin.com/in/braxtonlemmon">linkedin.com/in/braxtonlemmon</a>
//           </span>
//         </div>
//       </div>
//       <div className="section projects">
//         <h2>Projects</h2>
        
//         <div className="projects-content content">
//           <!-- <div className="project">
//             <div className="project-title-bar">
//               <h3>The Campfire</h3>
//               <a target="blank" href="https://github.com/braxtonlemmon/the-campfire">(Github)</a>
//               <a target="blank" href="https://murmuring-wave-95625.herokuapp.com/">(Live)</a>
//             </div>
//             <div className="project-info">
//               <p>
//               Social network site. Practiced modeling data, using PostgreSQL with Rails, and implementing OmniAuth. Built using Ruby
//               on Rails, Devise, and RSpec.
//             </p>
//             </div>
//           </div> -->
//           <div className="project">
//             <div className="project-title-bar">
//               <h3>Battleship</h3>
//               <a target="blank" href="https://github.com/braxtonlemmon/battleship-react">(Github)</a>
//               <a target="blank" href="https://braxtonlemmon.github.io/battleship-react/">(Live)</a>
//             </div>
//             <div className="project-info">
//               <p>
//                 Browser battleship game. Practiced Test Driven Development, building with functional components, implementing drag-and-drop features. Built using React, Jest, CSS-in-JS.
//               </p>
//             </div>
//           </div>
//           <div className="project">
//             <div className="project-title-bar">
//               <h3>Find Waldo</h3>
//               <a target="blank" href="https://github.com/braxtonlemmon/waldo-react-rails">(Github)</a>
//               <a target="blank" href="https://pumpkin-surprise-94026.herokuapp.com/">(Live)</a>
//             </div>
//             <div className="project-info">
//               <p>
//                 Image tagging application. Practiced building a frontend with styled components, using PostgreSQL with Ruby on Rails, and connecting a React app to a Rails backend API. Built using Ruby on Rails and React.
//               </p>
//             </div>
//           </div>
//           <!-- <div className="project">
//             <div className="project-title-bar">
//               <h3>Weather Checker</h3>
//               <a target="blank" href="https://github.com/braxtonlemmon/weather-app">(Github)</a>
//               <a target="blank" href="https://braxtonlemmon.github.io/weather-app/">(Live)</a>
//             </div>
//             <div className="project-info">
//               <p>
//                 Finds weather data by city. Practiced API interaction, asynchronous functions, and styled components. Built using
//                 OpenWeather API, React, HTML, and CSS.
//               </p>
//             </div>
//           </div> -->
//           <div className="project">
//             <div className="project-title-bar">
//               <h3>Book Library</h3>
//               <a target="blank" href="https://github.com/braxtonlemmon/book-library-react">(Github)</a>
//               <a target="blank" href="https://braxtonlemmon.github.io/book-library-react/">(Live)</a>
//             </div>
//             <div className="project-info">
//               <p>
//                 GUI book library. Practiced using a JavaScript framework and working with components. Built using React, localStorage,
//                 HTML, and CSS.
//               </p>
//             </div>
//           </div>
//           <div className="project">
//             <div className="project-title-bar">
//               <h3>Chess</h3>
//               <a target="blank" href="https://github.com/braxtonlemmon/chess">(Github)</a>
//             </div>
//             <div className="project-info">
//               <p>
//                 Command line game. Practiced Test Driven Development, writing modular code, and storing objects in YAML. Built using
//                 Ruby and RSpec.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="section skills">
//         <h2>Skills and Technologies</h2>
//         <div className="skills-content content">
//           <ul className="skills-list">
//             <li className="skills-list-item">HTML5</li>
//             <li className="skills-list-item">CSS3</li>
//             <li className="skills-list-item">JavaScript</li>
//             <li className="skills-list-item">React</li>
//             <li className="skills-list-item">Ruby on Rails</li>
//             <li className="skills-list-item">RSpec</li>
//             <li className="skills-list-item">Jest</li>
//             <li className="skills-list-item">Git</li>
//             <li className="skills-list-item">Linux</li>
//             <li className="skills-list-item">Express</li>
//           </ul>
//         </div>
//       </div>
//       <div className="section school">
//         <h2>Education</h2>
//         <div className="school-content content">
//           <div className="school-item">
//             <h3 className="school-name">The Odin Project</h3>
//             <p className="school-date">2018 - Present</p>
//             <h4 className="school-track">Full Stack Track</h4>
//           </div>
//           <div className="school-item">
//             <h3 className="school-name">Brigham Young University</h3>
//             <p className="school-date">2007 - 2014</p>
//             <h4 className="school-track">Bachelor of Science - Recreation Management</h4>
//           </div>
//         </div>
//       </div>
//       <div className="section work">
//         <h2>Work Experience</h2>
//         <div className="work-content content">
//           <div className="work-item">
//             <h3 className="work-name">California State Prison</h3>
//             <p className="work-location">California, USA</p>
//             <h4 className="work-title">Recreation Therapist</h4>
//             <p className="work-date">June 2017 - Sept. 2018</p>
//           </div>
//           <div className="work-item">
//             <h3 className="work-name">Centre International d’Études Pédagogiques</h3>
//             <p className="work-location">Lyon, France</p>
//             <h4 className="work-title">Teaching Assistant</h4>
//             <p className="work-date">Sept. 2015 - Apr. 2017</p>
//           </div>
//           <div className="work-item">
//             <h3 className="work-name">HCA Medical City McKinney</h3>
//             <p className="work-location">Texas, USA</p>
//             <h4 className="work-title">Recreation Therapist</h4>
//             <p className="work-date">Oct. 2014 - Sept. 2015</p>
//           </div>
//         </div>
//       </div>
  
//     </div>
//   </div>
// </body>
// </html>