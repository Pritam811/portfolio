import React from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ProjectIndex } from '../components/ProjectIndex'
import { Pricing } from '../components/Pricing'
import { ProjectCards } from '../components/ProjectCards'
import { Card } from '../components/Card'

export const Projects = ({title,text}) => {
  return (
    <div>
      <Nav />
      <ProjectIndex title = 'Projects' text = 'Some projects for showcasing...' />
      <ProjectCards />
      <Pricing />
      <Footer />
    </div>
  )
}
