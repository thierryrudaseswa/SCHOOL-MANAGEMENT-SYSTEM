import { useEffect, useState } from "react";
import { Brightness4 as Brightness4Icon } from "@mui/icons-material";
import { WbSunny as WbSunnyIcon } from "@mui/icons-material";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`relative w-16 h-8 flex items-center ${
        darkMode ? " bg-slate-900" : " bg-blue-500"
      } cursor-pointer rounded-full p-1`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <Brightness4Icon className="text-white" fontSize="small" />
      <div
        className="absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <WbSunnyIcon
        className="ml-auto text-yellow-400 m-0 p-0"
        fontSize="small"
      />
    </div>
  );
};

export default ThemeToggle;
