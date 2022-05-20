import React from 'react'
import{BsTwitter} from 'react-icons/bs'
import{FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import './SocialMedia.css'
const SocialMedia = () => {
  return (
    <div className='socialmedia_icons'>
        <div className='icon'>
            <a href='https://twitter.com/susrithab' target='_blank' rel='noreferrer'><BsTwitter className='here'/> </a>
        </div>
        <div className='icon'>
           <a href='https://www.facebook.com/susritha.balusu' target='_blank' rel='noreferrer'><FaFacebookF className='here'/></a>
        </div>
        <div className='icon'>
            <a href='https://www.linkedin.com/in/susritha-b-b40b02114' target='_blank' rel='noreferrer'><FaLinkedinIn className='here'/></a>
        </div>
        <div className='icon'>
        <a href='https://github.com/Susritha2498' target='_blank' rel='noreferrer'cls><AiFillGithub className='here'/></a>
        </div>
        
    </div>
  )
}

export default SocialMedia