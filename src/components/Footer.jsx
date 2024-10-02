import React from 'react'
import './footer.css'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="f-container">
            <div className="f-left">
                <div className="adress icon">
                    <FaHome size={20} style={{marginRight:'2rem'}} />
                    <p>Mossveien 14A, Oslo 0193, Norway</p>
                </div>
                <div className="contact icon">
                    <FaPhone size={20} style={{marginRight:'2rem'}} />
                    <p>+47 966 50 852</p>
                </div>
                <div className="mail icon">
                    <FaMailBulk  size={20} style={{marginRight:'2rem'}} />
                    <p>pritam.d@hiof.no</p>
                </div>
            </div>
            <div className="f-right">
                <h4>About</h4>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi velit ipsum ut amet dolore placeat nihil nesciunt dolorem odio accusamus, consequatur hic autem rerum quod. Porro dolores a alias.</p>
                <div className="social">
                    <FaFacebook size={20} style={{marginRight:'1rem'}} />
                    <FaInstagram size={20} style={{marginRight:'1rem'}} />
                    <FaX size={20} style={{marginRight:'1rem'}} />
                    <FaLinkedin size={20} style={{marginRight:'1rem'}} />
                    <FaGithub size={20} style={{marginRight:'1rem'}} />
                </div>
            </div>
        </div>
    </div>
  )
}
