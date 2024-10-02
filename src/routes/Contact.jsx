import React from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ProjectIndex } from '../components/ProjectIndex'
import { Form } from '../components/Form'

export const Contact = () => {
  return (
    <div>
      <Nav />
      <ProjectIndex title='Contact' text='Keep in touch' />
      <Form />
      <Footer />
    </div>
  )
}
