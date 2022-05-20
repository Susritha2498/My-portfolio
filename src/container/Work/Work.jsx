import React,{useState} from 'react'
import './Work.css'
import {AppWrap,MotionWrap} from '../../wrapper'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import {AiFillEye,AiFillGithub} from 'react-icons/ai'

const works = [
  {
    title:'Instagram Clone',
    description:'A clone of Instagram using MERN Stack. UNDER CONSTRUCTION',
    imageUrl:images.project1,
    projectlink:'https://susritha2498.github.io/Dogs-party/',
    codelink:"https://github.com/Susritha2498/Resort",
    tags:['UI/UX','Web Application','Mobile Application','HTML CSS','MERN Stack','React JS','Express JS'],
  },
  {
    title:'Beach Resort',
    description:'Resort app filters rooms according to price and other factors',
    imageUrl:images.project2,
    projectlink:'https://resort.pages.dev/',
    codelink:"https://github.com/Susritha2498/Resort",
    tags:['UI/UX','Web Application','HTML CSS','JavaScript','React JS'],
  },
  {
    title:'Personal Portfolio',
    description:'This includes information about my skills and links to my projects',
    imageUrl:images.project3,
    projectlink:"https://susritha98-portfolio.pages.dev/",
    codelink:"https://github.com/Susritha2498/susritha-portfolio",
    tags:['UI/UX','Web Application','Mobile Application','HTML CSS','JavaScript','React JS'],
  },
  {
    title:'Dogs party',
    description:'Sample front page of a website related to dogs',
    imageUrl:images.project4,
    projectlink:'https://susritha2498.github.io/Dogs-party/',
    codelink:"https://github.com/Susritha2498/Dogs-party",
    tags:"['UI/UX','Web Application','HTML CSS',]",
  }
]

const Work=()=>{
  const [filterWork,setFilterWork] = useState(works)
  const [animateCard,setAnimateCard] = useState([{y:0, opacity:1}])
  const [activeFilter, setActiveFilter] = useState('All')
  const [tag,setTag] = useState('UI/UX')
  const handleWorkFilter = (item)=>{
    setActiveFilter(item)
    setAnimateCard([{y:100,opacity:0}])
    setTimeout(()=>{
      setAnimateCard([{y:0,opacity:1}])
      if(item==='All'){
        setFilterWork(works)
        setTag('UI/UX')
      }
      else{
        setFilterWork(works.filter((work)=>work.tags.includes(item)))
        setTag(item)
      }
    },500)
  }
  return ( 
    <div className='works-section'>
      <h2 className='heading2'>My Creative <span>Portfolio</span> Section</h2>
      <div className='app-work-filter'>
        {['All','Web Application','Mobile Application','HTML CSS','JavaScript','React JS','Express JS','MERN Stack'].map((item,index)=>(
          <div
          key ={index}
          onClick={()=>handleWorkFilter(item)}
          className={`app-work-filter-item ${activeFilter === item?'item-active':''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
      animate ={animateCard}
      transition={{duration:0.5, delayChildren:0.5}}
      className="app-work-details"
      >
        {filterWork.map((work,index)=>(
          <div className='app-work-item' key={`workItem:${index}`}>
            <div className='app-work-image'>
              <img src={work.imageUrl} alt={work.name}/>
            <motion.div
            whileHover={{opacity:[0,1]}}
            transition={{duration:0.25,
              ease:'easeInOut',
              staggerChildren:0.5,}}
            className='app-work-hover'
            >
            <a href={work.projectlink} target='_blank' rel='noreferrer'>

            <motion.div
            whileInView={{scale:[0,1]}}
            whileHover={{scale:[1,0.90]}}
            transition={{duration:0.25}}
            className='app-work-project-icon'
            >
            <AiFillEye/>
            </motion.div>
            </a>
            <a href={work.codelink} target='_blank' rel='noreferrer'>

            <motion.div
            whileInView={{scale:[0,1]}}
            whileHover={{scale:[1,0.90]}}
            transition={{duration:0.25}}
            className='app-work-code-icon'
            >
            <AiFillGithub/>
            </motion.div>
            </a>
            </motion.div>
            </div>

            <div className='app-work-content'>
              <div className='app-work-tag'>
                <p className='para'>{tag}</p>
              </div>
              <h4 className='heading4'>{work.title}</h4>
              <p className='para'>{work.description}</p>
            </div>

          </div>
        ))}
      
      </motion.div>

    </div> 
  )
}


export default AppWrap(MotionWrap(Work,'works-section'),'work','app_primarybg',)