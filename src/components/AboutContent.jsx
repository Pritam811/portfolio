import React from 'react'
import './aboutContent.css'
import { Link } from 'react-router-dom'
import code from '../assets/a.avif'

export const AboutContent = () => {
  return (
    <div className="a-container">
        <div className="left">
            <h3>About Me</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, totam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, totam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, totam.
            </p>
            <Link to='/contact'>
                <button className='btn'>Make Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img">
                    <img className='img' src={code} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
