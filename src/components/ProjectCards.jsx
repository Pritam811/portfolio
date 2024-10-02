import React from 'react'
import './projectCards.css'

import {Card} from './Card'
import CardData from './CardData'


export const ProjectCards = () => {
  return (

    <div className='pro-c'>
      {CardData.map((val, index) => {
        console.log(val)
        return (
          <Card key={index} img={val.img} title={val.title} synopsis={val.synopsis} source={val.source} />
        )
      })}


    </div>

  )
}
