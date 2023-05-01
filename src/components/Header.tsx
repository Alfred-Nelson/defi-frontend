import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/main.css";
import { navItems } from "../utils/navItems";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-primary-bg text-lg px-4 flex justify-between items-center">
      <Link
        to="/"
        className="animated-gradient text-clip w-fit flex gap-x-2 items-center text-3xl"
      >
        <div className="logo w-12 h-12 after:bg-white relative"></div>
        <a className="font-bold">NeoFi</a>
      </Link>
      <nav className="flex justify-center items-center gap-x-4">
        {navItems.map((item) => (
          <NavLink
            to={item.to}
            className="w-24 h-full py-4 flex justify-center items-center relative text-secondary"
          >
            {({ isActive }) => (
              <>
                <motion.p
                  whileHover={{ scale: isActive ? 1 : 1.05 }}
                  className={`${isActive && "text-primary font-medium"}`}
                >
                  {item.name}
                </motion.p>
                {isActive && (
                  <motion.div
                    layoutId="active-line"
                    className="absolute -bottom-0.5 w-full h-1 bg-primary"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <button className="animated-gradient px-4 font-semibold rounded-full h-fit py-2">
        Connect wallet
      </button>
    </header>
  );
};

export default Header;
