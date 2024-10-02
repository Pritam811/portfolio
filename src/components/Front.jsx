import React from 'react'
import './front.css'
import img1 from '../assets/front.jpg'
import { Link } from 'react-router-dom'

export const Front = () => {
  return (
    <div className="container">
        <div className="front-img">
            <img className='img' src={img1} alt="" />
        </div>
        <div className="content">
            <p>Hi, thanks for the visit...</p>
            <h3>React Developer</h3>
            <div className="btn">
                <Link to='/projects' className='btn1'>Projects</Link>
                <Link to='/contact' className='btn2'>Contact</Link>
            </div>
        </div>
    </div>
  )
}
