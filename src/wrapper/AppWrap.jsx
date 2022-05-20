import React from 'react'
import {NavigationDots,SocialMedia} from '../components'
const AppWrap = (Component,idName,className) =>function Hoc(){
  return (
    <div 
    id={idName} 
    className={`app-container ${className}`}
    style={{display:'flex', marginLeft:'15px',justifyContent:'flex-start',alignItems:'flex-end', padding:'0'}}>
      <div className='social' style={{width:'5%',justifyContent:'center',alignItems:'center'}} > 
        <SocialMedia/>
      </div>
      <div className='app-wrapper' style={{width:'90%',justifyContent:'center',alignItems:'center'}}>
          <Component/>
          <div className='copyright' style={{float:'right'}}>
            <p className='para'>@2022 SUSRITHA</p>
            <p className='para'>All rights reserved</p>
          </div>
      </div>
      <div className='navDots' style={{width:'5%',justifyContent:'flex-start',alignItems:'center',padding:'0'}}> 
      <NavigationDots active={idName}/>
      </div>
    </div>
  )
}

export default AppWrap