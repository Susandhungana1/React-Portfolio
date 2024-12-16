import React from 'react'
import './About.css'
import logo2 from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/susan.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={logo2} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>A passionate programmer.</p>
                <p>Ready to take on the world.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Python with AI</p><hr style={{width:"75%"}} /></div>
                <div className="about-skill"><p>C & C++</p><hr style={{width:"80%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>No</h1>
            <p>Professional Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3</h1>
            <p>Projects Completed</p>
        </div>
      </div>
    </div>
  )
}

export default About
