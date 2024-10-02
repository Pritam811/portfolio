import React from 'react'
import './projectIndex.css'

export const ProjectIndex = ({title,text}) => {
  return (
    <div className="container">
        <div className="heading">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}
