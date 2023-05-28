import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, GmailIcon } from "@/components/Icons";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setMessageError("");
  };

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === "") {
      setNameError("Por favor, ingresa tu nombre");
      isValid = false;
    }

    if (email.trim() === "") {
      setEmailError("Por favor, ingresa tu correo electrónico");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Por favor, ingresa un correo electrónico válido");
      isValid = false;
    }

    if (message.trim() === "") {
      setMessageError("Por favor, ingresa un mensaje");
      isValid = false;
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_znl1onp",
        "template_0noh24g",
        event.target,
        "6PrAnRCNFvWXbJrWN"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Correo enviado correctamente");
          resetForm();
        },
        (error) => {
          console.log(error.text);
          toast.error("Error al enviar el correo");
          setIsSubmitting(false);
        }
      );
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setNameError("");
    setEmailError("");
    setMessageError("");
  };

  return (
    <>
      <Head>
        <title>EmmanuelMedina | Contact Page</title>
        <meta name="description" content="full stack developer" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10">
          <ToastContainer position="bottom-right" />
          <AnimatedText text="Let's work together!" className="pb-8 " />
          <div className="flex items-center justify-center">
            <motion.a
              href="https://github.com/EmmanuelML78"
              passHref
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="mx-4 w-8 h-8">
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/emmanuel-medina88/"
              passHref
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="mx-4 w-8 h-8">
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="mailto:lopezemmanuel917@gmail.com"
              passHref
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="mx-4 w-8 h-8">
              <GmailIcon />
            </motion.a>
          </div>
          <div class="mt-6 mx-auto my-2 w-[500px] sm:w-[400px] xs:w-[300px]  rounded-2xl border-2 shadow-lg dark:shadow-yellow-400 border-blue-500 bg-light dark:bg-dark dark:border-yellow-400">
            <div class="p-5 space-y-5 shadow-xl  ">
              <form onSubmit={handleSubmit}>
                <div class="grid grid-cols-2 gap-5 ">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    class="rounded-2xl border-2 bg-transparent border-dark/75 dark:border-light/75 px-4 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-yellow-400 col-span-2"
                    placeholder="Your Full Name"
                  />
                  {nameError && <p>{nameError}</p>}
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    class="rounded-2xl border-2 bg-transparent border-dark/75 dark:border-light/75 px-4 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-yellow-400 col-span-2"
                    placeholder="Email"
                  />
                  {emailError && <p>{emailError}</p>}
                  <textarea
                    name="message"
                    value={message}
                    onChange={handleMessageChange}
                    cols="10"
                    rows="5"
                    class="rounded-2xl border-2 bg-transparent border-dark/75 dark:border-light/75 px-4 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-yellow-400 col-span-2"
                    placeholder="Write your message..."></textarea>
                  {messageError && <p>{messageError}</p>}
                </div>
                <input
                  type="submit"
                  disabled={isSubmitting}
                  value="Send Message"
                  className="rounded-2xl border-2 border-solid border-dark focus:outline-none mt-5 bg-dark px-4 py-2 text-light hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light font-bold w-full "
                />
              </form>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Contact;
