import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light
    dark:border-light relative z-10 sm:text-base ">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span> {new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build with <span className="text-red-500">❤</span> by{" "}
          <Link
            href="https://github.com/EmmanuelML78"
            target={"_blank"}
            className="underline underline-offset-2">
            EmmanuelMedina
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
