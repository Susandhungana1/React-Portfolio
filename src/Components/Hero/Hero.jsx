import React from 'react'
import './Hero.css'
import profile_img from '../../assets/susan2.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img className='pp' src={profile_img} alt="" />
        <h1><span>I'm Susan Dhungana</span>, computer science based student from Nepal.</h1>
        <p>I'm currently studying Bsc.CSIT in Lumbini ICT Campus, a TU affiliated college.</p>
        <div className='hero-action'>
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
