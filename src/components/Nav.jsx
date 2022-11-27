import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiMoon } from "react-icons/bi";
import { themeContext } from "../app/ThemeContext";

const Nav = () => {
  const { theme, handleThemeSwitch } = useContext(themeContext);

  return (
    <div className="w-full flex justify-between py-6 px-4 xl:px-24 border-b shadow-lg">
      <Link to="/" className="text-md md:text-xl font-bold dark:text-slate-200">
        Where in the world?
      </Link>
      <div className="flex items-center justify-center gap-2">
        <button onClick={handleThemeSwitch} className="flex items-center gap-2">
          <BiMoon className="cursor-pointer dark:text-slate-200" />
          <span className="dark:text-slate-200 font-semibold">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Nav;
