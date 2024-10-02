import React, { useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

export const Nav = () => {
    const[visible,setVisible] = useState(true)
   
    const handleClick = () => {
        setVisible((visible)=>!visible)
    };

    const[scrollNav, setScrollNav] = useState(false)
    const handleNav = () =>{
        if(window.scrollY >= 100){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    };
    window.addEventListener('scroll',handleNav)

    return (
            <div className={scrollNav?'nav nav-bg':'nav'}>
                <Link to='/'>
                    <h2>Showcase</h2>
                </Link>
                {visible? 
                <ul className='nav-menu'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>

                    <li>
                        <Link to='/about'>About</Link>
                    </li>

                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>

                </ul>
                :
                <>
                </>
                }
                
                <div onClick={handleClick} className="hamburger">
                    {visible?(<FaTimes size={20} />):<FaBars size={20}/>}
                    
                    
                </div>
            </div>
        

    )
}
