import React from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ProjectIndex } from '../components/ProjectIndex'
import { AboutContent } from '../components/AboutContent'

export const About = ({title,text}) => {
  return (
    <div>
      <Nav />
      <ProjectIndex title ='About' text ='Things you need to know...' />
      <AboutContent />
      <Footer />
    </div>
  )
}
