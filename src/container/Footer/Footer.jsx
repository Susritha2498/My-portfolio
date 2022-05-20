import React,{useState} from 'react'
import './Footer.css'
import {AppWrap} from '../../wrapper'
import {images} from '../../constants'

const Footer = ()=>{
  // const [formData,setFormData]=useState({name:'',email:'',message:''})
  const[name,setName] = useState('')
  const[email,setmail] = useState('')
  const[message,setMessage] = useState('')
  const [loading,setLoading] = useState(false)
  // const {name,email,message} = formData

  const handlenameInput = (e)=>{
   setName(e.target.value)
    // setFormData({...formData,[name]:value})
  }
  const handlemailInput = (e)=>{
    setmail(e.target.value)
  }

  const handlemessageInput = (e)=>{
    setMessage(e.target.value)
  }

  const handleSubmit =()=>{
    setLoading(true)
    setInterval(() => {
      setLoading(false)
      setName('')
      setmail('')
      setMessage('')
    }, 2000);
  }
  return (
    <div className='contact-section'>
      <h2 className='heading2'>Take a <span>Break</span> and <span>Chat</span> with me</h2>
      <div className='app-footer-cards'>

        <div className='app-footer-card'>
          <img src={images.mobile} alt='MOBILE'/>
          <a href='tel: +917702455699' className='para'>+917702455699</a>
        </div>

        <div className='app-footer-card'>
          <img src={images.email} alt='EMAIL'/>
          <a href='mailto:susritha.balusu@gmail.com' className='para'>susritha.balusu@gmail.com</a>
        </div>
        
      </div>

      { !loading ?
      <div className='app-footer-form'>
        <div id='forName' className='app-footer-formData'>
          <input className='para' type='text' name='name' placeholder='Your name' value={name} onChange={handlenameInput}/>
        </div>
        <div id='forEmail' className='app-footer-formData'>
        <input className='para' type='email' name='name' placeholder='Your email' value={email} onChange={handlemailInput}/>
        </div>

      <div className='app-footer-message'>
        <textarea className='para' placeholder='Your Message' name='message' value={message} onChange={handlemessageInput}/>
      </div>
      <button type='button' className='para' onClick={handleSubmit}>Send Message</button>
      </div>
    : <div>
      <h3 className='heading3'>Thanks for getting in touch with us</h3>
      </div>
  }
  </div>
  )
}

export default AppWrap(Footer,'contact')