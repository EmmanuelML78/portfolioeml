import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import project1 from "../../public/images/projects/imagen1.PNG";
import project4 from "../../public/images/projects/porta4.PNG";
import project2 from "../../public/images/projects/porta2.PNG";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2x1 rounded-3xl border border-solid border-dark
    bg-light shadow-2xl p-12 dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2x1 xs:rounded-br-3x1 xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark  rounded-br-3x1 dark:bg-light
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <Image
          src={img}
          alt={title}
          priority
          className="w-full h-auto hover:scale-105 transition-all duration-300 ease-in-out transform"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <motion.a
            href={github}
            target="_blank"
            className="w-10"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}>
            <GithubIcon />
          </motion.a>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
            sm:px-4 sm:text-base">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github, summary }) => {
  return (
    <article>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg ">
        <Image src={img} alt={title} className="w-full h-auto " />
      </Link>
      <div className="w-full flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark ">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>EmmanuelMedina | Projects Page</title>
        <meta name="description" content="full stack developer" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 "
          />
          <div className="grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="web application for court reservations"
                img={project4}
                summary="El predio es una aplicación web, la cual tiene una estructura de Back-end, Front-end, manejo de base de datos. En el desarrollo de esta aplicación fui colaborador ya que fue el desarrollo de 5 personas. La aplicación es de reservas de canchas de futbol, esta aplicación contiene algunos componentes como Loading page, Home, detalle, pasarela de pago, sección de información, sección de calificación y comentarios, registro e ingreso de usuarios, entre otras cosas."
                link="https://el-predio.vercel.app/"
                github="https://github.com/EmmanuelML78/EL-PREDIO"
                type="El Predio Futbol"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="web application to search for dog breeds"
                img={project1}
                summary="Henry Dogs es una aplicación web, la cual tiene una estructura de Back-end, Front-end, manejo de base de datos y solicitud a API externa, esta aplicación contiene una Loanding page al recibir el usuario, procede con el Home, donde el usuario puede moverse en la aplicación buscando razas de perros o filtrarlos según su preferencia, también cuenta con una sección donde puedes crear tu propia raza."
                link="https://pi-dogs-lilac.vercel.app/"
                github="https://github.com/EmmanuelML78/PI-Dogs"
                type="Dogs"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="web application to search for character ID"
                img={project2}
                summary="Rick and Morty es una web la cual es muy dinamica y divertida, se trata de la presentación de usuarios de la serie, esta aplicacion tiene un desarrollo Front-end la cual tenía un serch-Bar para moverse en la aplicación, también cuenta con search para buscar nuevas tarjetas las cuales serían renderizadas y al presionar sobre ellas podrías tener información detallada del personaje"
                link="https://pi-dogs-lilac.vercel.app/"
                github="https://github.com/EmmanuelML78/PI-Dogs"
                type="Rick and Morty"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
