import React,{useState} from 'react'
import {HiMenuAlt4,HiX} from 'react-icons/hi'
import {images} from '../../constants'
import {motion} from 'framer-motion'
import './Navbar.css'
function Navbar() {
  const [toggle,setToggle]=useState(false)
  return (
    <nav className='app-Navbar'>
      <img src={images.logo2} alt="Logobar" className='app-Navbar-logo'/>
        <ul className='app-Navbar-links'>
            {['home','about','work','skills','contact'].map((item)=>(
              <li key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              </li>    
              ))}
        </ul>


        <div className='app-Navbar-menu'>
          <HiMenuAlt4 onClick={()=>setToggle(true)} id='start'/>
        {toggle &&(
        <motion.div
        whileInView={{x:[300,0],opacity:[0,1]}}
        transition = {{duration:0.85,ease:'easeOut'}}
        id='motion-frame'
        >
          <HiX onClick={()=>setToggle(false)} id='close'/>
          <ul className='app-Navbar-menu-list'>
          {['home','about','work','skills','contact'].map((item)=>(
              <li key={item}>
                <a href={`#${item}`} onClick={()=>setToggle(false)} >{item}</a>
              </li>    
              ))}
          </ul>
        </motion.div>
        )}
        </div>
    </nav>
  )
}

export default Navbar