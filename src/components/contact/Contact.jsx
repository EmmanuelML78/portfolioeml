import React from 'react'
import './contact.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_znl1onp', 'template_0noh24g', form.current, '6PrAnRCNFvWXbJrWN')
    
    e.target.reset();
    
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/> 
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/emmanuel-medina88/" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaGithub className='contact__option-icon'/> 
            <h4>Github</h4>
            <a href="https://github.com/EmmanuelML78" target="_blank">Send a message</a>
          </article>
        </div>
        {/* */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact