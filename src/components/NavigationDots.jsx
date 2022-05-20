import React from 'react'
import './NavigationDots.css'
// active tells us which section is currently active
const NavigationDots = ({active}) => {
  return (
    <div className='app-nav-dots'>
{['home','about','work','skills','contact'].map((item,index)=>(
    <a href={`#${item}`} 
    key = {item + index}
    className="nav-dots"
    style={active===item?{color: '#313BAC'}:{}}
    >.</a>  
    ))}
    </div>
  )
}

export default NavigationDots