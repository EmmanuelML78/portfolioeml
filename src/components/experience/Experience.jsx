import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      
      <h2>My Skills</h2>

      <div className='container experience__container'>
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Express</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PostgreSQL</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              </div>
            </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience