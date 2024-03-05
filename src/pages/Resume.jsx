import React from 'react'
import '../styles/resume.css'

const Resume = () => {
  return (
    <div className='resume'>
      <h1 className='center'>Raphael De Los Reyes</h1>
      <p className='center'>Software developer</p>
      <a className='center' href="mailto:graphael.dr@gmail.com">graphael.dr@gmail.com</a>
      <div className='center'>
        <div>
          <a href="https://github.com/RD2P">GitHub</a>
          <span> | </span>
          <a href="https://linkedin.com/in/glennraphaeldlr">LinkedIn</a>
          <span> | </span>
          <a href="https://blog.raphaeldelosreyes.com/">Blog</a></div>
      </div>

      <h2>Experience</h2>
      <hr />
      <div className='job-title'>
        <h3>General Dynamics Missions Systems – Canada</h3>
        <span>2022-2023</span>
      </div>
      <p>Systems Enginer Analyst - Coop</p>

      <div className='job-description'>
        <ul>
          <li>
            Employing Agile methodologies, contributed to the successful development of over 60 server build books
            for deployment to the Canadian Army.
          </li>
          <li>
            Generated initial drafts and facilitated technical writer reviews for server documentation, ensuring
            accuracy and completeness.
          </li>
          <li>
            Ensured sustained software functionality by conducting comprehensive patch testing on General Dynamics
            servers.
          </li>
          <li>
            Shared expertise with colleagues through informative presentations to General Dynamics members,
            promoting knowledge sharing and team development.
          </li>
        </ul>
      </div>

      <div className='job-title'>
        <h3>Canadian Armed Forces</h3>
        <span>2017-2021</span>
      </div>
      <p>Infantry Officer</p>
      <div className='job-description'>
        <ul>
          <li>
            Managed personnel records to monitor training advancement and career development of soldiers.
          </li>
          <li>
            Orchestrated military training exercises and live fire shooting ranges, composing detailed exercise orders
            and liaising with officers and senior personnel to ensure thorough preparation.
          </li>
          <li>
            Served as a course officer for military courses, overseeing candidate information, and preparing
            comprehensive reports on candidate progress and staff performance.
          </li>
        </ul>
      </div>

      <h2>Projects</h2>
      <hr />

      <div className='job-title'>
        <h3>Spelling Bee Web App</h3>
        <span>2023</span>
      </div>
      <p>Software Developer</p>
      <div className='job-description'>
        <ul>
          <li>
            Developed "Spelling Bee" app from concept to deployment, including designing architecture, coding frontend and backend, and creating database schema.</li>
          <li>
            Implemented cloud-based deployment for frontend, backend, and database, ensuring scalability and reliability.</li>
          <li>
            Conducted thorough testing, identifying and resolving issues to ensure a high-quality user experience.</li>
          <li>
            Managed full software development lifecycle, from design to deployment, demonstrating strong problem-solving and project skills.</li>
        </ul>
      </div>

      <div className='job-title'>
        <h3>AGTECH Hackathon Canada’s Farm Show</h3>
        <span>2023</span>
      </div>
      <p>Software Developer</p>
      <div className='job-description'>
        <ul>
          <li>
            Contributed as a developer on the first prize-winning team at the AGTECH Hackathon at Canada’s Farm Show, winning a $9000 prize</li>
          <li>
            Engaged in cross-functional communication with software developers, a designer, and a business lead to plan and execute a web application project.</li>
        </ul>
      </div>

      <h2>Education</h2>
      <hr />

      <div className='job-title'>
        <h3>Anatomy and Cell Biology, BSc Hon</h3>
        <span>2015 - 2020</span>
      </div>
      <p>University of Saskatchewan, Saskatoon, SK</p>

    </div>
  )
}

export default Resume
