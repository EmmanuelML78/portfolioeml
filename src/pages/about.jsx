import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/me2.png";
import Skills from "@/components/Skills";

const about = () => {
  return (
    <>
      <Head>
        <title>EmmanuelMedina | About Page</title>
        <meta name="description" content="full stack developer" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10 ">
          <AnimatedText
            text="About Me"
            className="mb-16 lg:!text-7x1 sm:!text-6x1 xs:!text-4x1 sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-12 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-center xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                Biography
              </h2>
              <p className="font-medium mt-4 lg:text-base">
                Hola, mi nombre es Emmanuel Medina!
              </p>
              <p className="my-4 font-medium text-base">
                Soy un Desarrollador Web Full stack con gran capacidad para
                trabajar en equipo y consolidar proyectos web con entusiasmo y
                gran desempeño. Considero que tengo una gran capacidad de
                aprendizaje y adaptación, estoy constantemente aprendiendo
                nuevas tecnologías y mejorando mis habilidades. Soy una persona
                responsable y creativa, siempre intentando mejorar personal y
                profesionalmente.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt="Emmanuel Medina"
                priority
                className="w-full h-auto rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;
