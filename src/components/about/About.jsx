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
          Hola, mi nombre es Emmanuel, soy un desarrollador Junior Full Stack.
          <br />
          <br />
          Soy una persona Positiva, empática y curiosa, siempre tratando de mejorar. Me gustan las actividades al aire libre, la fotografía y el fútbol.
          Empecé a programar en Enero de 2023 cuando entré en un Full Stack Developer Bootcamp y gané experiencia trabajando en algunos proyectos.
          Actualmente estoy buscando un empleo donde pueda crecer profesionalmente, aprender y mejorar. Si quieres contratarme, ponte en contacto conmigo.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>         
        </div>
      </div>
    </section>
  )
}

export default About