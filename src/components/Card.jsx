import React from 'react'
import { Link } from 'react-router-dom'





export const Card = (props) => {
    
  return (
    
    <div className="container">
      <div className="p-card">
        <div className="pro">
          <img src={props.img} alt="" />
          <h4 className='p-title'>{props.title}</h4>
          <p>{props.synopsis}</p>

          <Link to={props.source} className='btn'>Source</Link>

        </div>
        


      </div>
    </div>
  )
}

