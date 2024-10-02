import { Link } from 'react-router-dom'
import './pricing.css'
import React from 'react'

export const Pricing = () => {
  return (
    <div className="p-container">
        
        <div className="c-container">
            <div className="card">
                <h3>- LITE -</h3>
                <span className='bar'></span>
                <p className='price'>£100</p>
                <p>Responsive</p>
                <p>Fully Functional</p>
                <Link to='/contact' className='btn1'>Proceed</Link>
            </div>

            <div className="card">
                <h3>- ADVANCE -</h3>
                <span className='bar'></span>
                <p className='price'>£300</p>
                <p>Responsive</p>
                <p>Animation</p>
                <p>Fully Functional</p>
                <Link to='/contact' className='btn1'>Proceed</Link>
            </div>

            <div className="card">
                <h3>- PREMIUM -</h3>
                <span className='bar'></span>
                <p className='price'>£600</p>
                <p>Responsive</p>
                <p>Animation</p>
                <p>Fully Functional</p>
                <p>Free Hosting</p>
                <Link to='/contact' className='btn1'>Proceed</Link>
            </div>
        </div>
    </div>
  )
}
