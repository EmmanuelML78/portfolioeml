import React from "react";
import IMG1 from "../../assets/porta1.PNG";
import IMG2 from "../../assets/porta2.PNG";
import IMG3 from "../../assets/porta3.PNG";
import IMG4 from "../../assets/porta4.PNG";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Dogs App",
    github: "https://github.com/EmmanuelML78/PI-Dogs",
    demo: "https://pi-dogs-lilac.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Rick and Morty",
    github: "https://github.com/EmmanuelML78/rick_and_morty",
    demo: "https://rick-and-morty-delta-seven.vercel.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Snake",
    github: "https://github.com/EmmanuelML78/game-2",
    demo: "https://game-seven-eta.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "El Predio",
    github: "https://github.com/EmmanuelML78/EL-PREDIO",
    demo: "https://el-predio.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
