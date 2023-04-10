import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <p>
          Hola, mi nombre es Emmanuel!
          <br />
          <br />
          Soy un Desarrollador Web Fullstack con gran capacidad para trabajar en equipo y consolidar proyectos web con entusiasmo y gran desempeño. Considero que tengo una gran capacidad de aprendizaje y adaptación, estoy constantemente aprendiendo nuevas tecnologías y mejorando mis habilidades. Soy una persona responsable y creativa, siempre intentando mejorar personal y profesionalmente.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>         
        </div>
      </div>
    </section>
  )
}

export default About