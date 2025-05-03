import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/blog", label: "Blog" },
    { path: "*", label: "NotFound" }, 
  ];

  return (
    <nav className=" opacity-55  text-power py-4 shadow-md ">
      <ul className="flex justify-center gap-6 text-sm font-bold uppercase tracking-wide">
        {navItems.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`px-4 py-2 rounded transition-all duration-200 cursor-pointer 
                ${location.pathname === path 
                  ? "bg-power text-cloud" 
                  : "hover:bg-power hover:text-cloud"}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
