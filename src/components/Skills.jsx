import React from 'react'
import '../styles/skills.css'

function Skills() {
  return (
    <article>
      <h2 className="skills-title">Skills</h2>
      <section className='skills-container'>
        <h3 className='skill-subtitle'>My primary skills:</h3>
        <div className="skills-list">
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <p>JavaScript</p>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <p>HTML5</p>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <p>CSS</p>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <p>React.js</p>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            <p>TailwindCSS</p>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <p>Git</p>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <p>GitHub</p>
          </div>

        </div>

        <h3 className='skill-subtitle'>My secondary skills:</h3>
        <div className="skills-list">
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <p>Node.js</p>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
            <p>Express.js</p>
          </div>
          <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
            <p>PHP</p>
          </div>

          
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            <p>MongoDB</p>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
            <p>MySQL</p>
          </div>

        </div>
        <h3 className='skill-subtitle'>Other technologies I worked with:</h3>

        <div className="skills-list">
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            <p>Python</p>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
            <p>Flask</p>
          </div>
          <div>
            <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" />
            <p>Postman</p>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
            <p>Figma</p>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
            <p>Bootstrap</p>
          </div>
        </div>
      </section>
    </article>
  )
}

export default Skills
