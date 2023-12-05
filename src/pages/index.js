import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilesPic from "../../public/images/profile/port.png";
import AnimatedText from "@/components/AnimatedText";
import Loading from "../components/ScreenLoading/index";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Portafolio | Emmanuel Medina</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <main className="flex items-center text-dark w-full min-h-screen dark:text-light ">
          <Layout className="pt-0 md:pt-16 sm:pt-8">
            <div className="flex items-center justify-between w-full lg:flex-col">
              <div className="w-1/2 md:w-full">
                <Image
                  src={profilesPic}
                  alt="Emmanuel Medina"
                  priority
                  className="w-100 h-auto lg:hidden md:inline-block md:w-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                <AnimatedText
                  text="Full stack Developer"
                  className="!text-6x1 !text-left xl:!text-5x1 lg:!text-center lg:!text-6x1 md:!5x1 sm:!text-3x1"
                />
                <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                  Descubre mis trabajos recientes y habilidades. Si estás
                  buscando una desarrollador web para tus próximos proyectos,
                  estoy aquí para ayudarte. Revisa mi portafolio y contáctame
                  para más detalles.
                </p>
                <div className="flex items-center self-start mt-2 lg:self-center">
                  <Link
                    rel="preload"
                    href="/EmmanuelMedina_CV_FullStack.pdf"
                    target={"_blank"}
                    className="flex items-center bg-dark text-light p-2 px-6 
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark whitespace-nowrap
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:p-2 md:px-4 md:text-base"
                    download={true}>
                    Download CV <LinkArrow className={"w-6 ml-1"} />
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center bg-light text-dark p-2 px-6 rounded-lg text-lg 
                  font-semibold hover:bg-dark hover:text-light border-2 border-solid  
                  border-blue-900 hover:border-dark whitespace-nowrap mx-4
                  dark:bg-dark dark:text-light dark:border-yellow-400 hover:dark:bg-light hover:dark:text-dark hover:dark:border-light
                  md:text-base">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
          <HireMe />
        </main>
      )}
    </>
  );
}
