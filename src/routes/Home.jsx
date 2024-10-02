import React from 'react'
import { Nav } from '../components/Nav'
import { Front } from '../components/Front'
import { Footer } from '../components/Footer'
import {ProjectCards} from '../components/ProjectCards'


export const Home = () => {
  return (
    <div className='home-container'>
      <Nav />
      <Front />
      <ProjectCards />
      <Footer />
      
      
    </div>
  )
}
