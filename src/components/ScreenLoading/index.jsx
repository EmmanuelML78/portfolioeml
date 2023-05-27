import React, { useState, useEffect } from "react";
import style from "./index.module.css";

const CustomLoader = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div
      className={`w-full justify-center flex z-20 top-0 left-0 text-dark dark:text-light items-center min-h-[100vh] fixed loading bg-light dark:bg-dark`}>
      <h2 className="text-2xl font-semibold uppercase flex flex-col items-center">
        <span className={`${style.letterloading} uppercase`}>Emmanuel</span>
        <span className={`${style.letterloading} uppercase`}>developer</span>
      </h2>
    </div>
  );
};

export default CustomLoader;
