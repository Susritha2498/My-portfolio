import React from 'react'
import './Skills.css'
import {AppWrap} from '../../wrapper'
import {motion} from 'framer-motion'
import {images} from '../../constants'

const skills = [
  {
    name:'Python',
    imageUrl:images.python
  },
  {
    name:'Node JS',
    imageUrl:images.node
  },
  {
    name:'Javascript',
    imageUrl:images.javascript
  },
  {
    name:'React JS',
    imageUrl:images.react
  },
  {
    name:'HTML',
    imageUrl:images.html
  },
  {
    name:'CSS',
    imageUrl:images.css
  }
]

const Skills=()=>{
  return (
    <div className='skills-section'>
      <h2 className='heading2'>My technical <span>Skills</span></h2>
      <div className='app-skills'>
        {skills.map((skill,index)=>(
          <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}
          className='app-skill-item'
          key={`skill ${index}`}
          >
            <div className='app-skill-container'>
              <img src={skill.imageUrl} alt={skill.name}/>
            </div>
            <h2 className='heading2' style={{padding:5,margin:0,color:'gray'}}>{skill.name}</h2>
            
          </motion.div>
        ))}
      </div> 
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h2>Look through my <span>resume</span>??</h2>
        <a href={images.resume} download className='downloadResume' style={{textDecoration:'none'}}> Download resume here</a>
      </div>

    </div> 
  )
}


export default AppWrap(Skills,'skills')