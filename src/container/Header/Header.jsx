import React from 'react'
import './Header.css'
import {images} from '../../constants'
import {motion} from 'framer-motion'
import {AppWrap} from '../../wrapper'
const scaleVariants = {
  whileInView:{
scale:[0,1],
opacity:[0,1],
transition:{
  duration:1,
  ease:'easeInOut'
}
  }
}

const Header=()=>{
  return (
    <div className='app-header'>
      <motion.div
      whileInView ={{x:[-100,0] ,opacity:[0,1]}}
      transition = {{duration:1}}
      className="app-header-info">
        <div className='app-header-badge'>
          <div className='badge-component'>
            <span style={{fontSize:'2rem'}}>👋</span>
            <div style={{marginLeft:20}}>
              <p className='para'>Hello there, I am</p>
              <h1 className='heading'>Susritha Balusu</h1>
            </div>
          </div>
          <div className='tag-component'>
              <p className='para'>Mern stack developer</p>
              <p className='para'>Front end developer</p>
              <p className='para'>Nature & Book lover</p>
          </div>
        </div>
      </motion.div>

    <motion.div 
    whileInView ={{opacity:[0,1]}}
    transition = {{duration:0.5, delayChildren:0.5}}
    className='app-header-image'
    >
    <img src={images.profile} 
    alt='ProfileImage' />
    </motion.div>

    <motion.div
    variants={scaleVariants}
    whileInView={scaleVariants.whileInView}
    className='app-header-circles'
    >
    {[images.python,images.html,images.css,images.javascript,images.react].map((circle,idx)=>(
      <div className='circle-component' key={`circle-${idx}`}>
        <img src={circle} alt="Circle" />
      </div>
    ))}

    </motion.div>
      
    </div>
  )
}

export default AppWrap(Header,'home')