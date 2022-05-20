import React from 'react'
import './About.css'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import {AppWrap} from '../../wrapper'
const Details = [
  {
    title:'Web Development',
    description:'I am a good web developer',
    imageUrl:images.about01
  },
  {
    title:'UI/UX Design',
    description:'I am a good web developer',
    imageUrl:images.about02
  },
  {
    title:'Web Design',
    description:'I am a good web developer',
    imageUrl:images.about03
  },
  {
    title:'Web Animations',
    description:'I am a good web developer',
    imageUrl:images.about04
  }

]

const About=()=>{
  return (
    <div className='about-section'>
        <h2 className='heading2'>I know that <span>Good Applications</span><br/> ensures <span>Good Business</span></h2>

    <div className='app-profiles'>
        {Details.map((about,index)=>(
          <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}
          className='app-profile-item'
          key={index}
          >
            <img src={about.imageUrl} alt={about.title}/>
            <h2 className='heading2' style={{padding:5,margin:0}}>{about.title}</h2>
            <p className='para'style={{padding:5,margin:'0 0 5 0'}}>{about.description}</p>
          </motion.div>
        ))}
    </div>
  </div>
  )
}

export default AppWrap(About,'about')