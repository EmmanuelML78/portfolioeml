// import React, { useEffect, useState } from "react";

// const useThemeSwitcher = () => {
//   const preferDarkQuery = "(prefer-color-scheme: dark)";
//   const [mode, setMode] = useState("");

//   useEffect(() => {
//     const mediaQuery = window.matchMedia(preferDarkQuery);
//     const userPref = localStorage.getItem("theme");

//     const handleChange = () => {
//       if (userPref) {
//         setMode(localStorage.getItem("theme"));
//         let check = userPref === "dark" ? "dark" : "light";
//         setMode(check);
//         if (check === "dark") {
//           document.documentElement.classList.add("dark");
//         } else {
//           document.documentElement.classList.remove("dark");
//         }
//       } else {
//         let check = mediaQuery.matches ? "dark" : "light";
//         setMode(check);
//         if (check === "dark") {
//           document.documentElement.classList.add("dark");
//         } else {
//           document.documentElement.classList.remove("dark");
//         }
//       }
//     };

//     handleChange();

//     mediaQuery.addEventListener("change", handleChange);

//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, []);

//   useEffect(() => {
//     if (mode === "dark") {
//       localStorage.setItem("theme", "dark");
//       document.documentElement.classList.add("dark");
//     } else {
//       localStorage.setItem("theme", "light");
//       document.documentElement.classList.remove("dark");
//     }
//   }, [mode]);

//   return [mode, setMode];
// };

// export default useThemeSwitcher;

import React, { useEffect, useMediaQuery, useState } from "react";

const useThemeSwitcher = () => {
  const prefersDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState();

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersDarkQuery);
    const userPreference = localStorage.getItem("theme");
    const handleThemeChange = () => {
      if (userPreference) {
        setMode(localStorage.getItem("theme"));

        let check = userPreference === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          localStorage.setItem("theme", "dark");
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "light") {
          localStorage.setItem("theme", "light");
          document.documentElement.classList.add("light");
        } else {
          document.documentElement.classList.remove("light");
        }
      }
    };
    handleThemeChange();
    mediaQuery.addEventListener("change", handleThemeChange);
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
    if (mode === "light") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
