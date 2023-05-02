import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";
import "../styles/common.css";
import { navItems } from "../utils/navItems";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
    initial={{ y: "-200%" }}
    animate={{ y: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-primary-bg sticky top-0 z-30 text-lg px-4 pt-4 md:pt-0 flex flex-wrap md:flex-nowrap justify-between gap-y-5 items-center">
      {/* Main icon */}
      <Link
        to="/"
        className="animated-gradient order-1 text-clip w-fit flex gap-x-2 items-center text-3xl"
      >
        <div className="logo w-12 h-12 after:bg-white relative"></div>
        <a className="font-bold">NeoFi</a>
      </Link>

      {/* Main navigation */}
      <nav className="w-full flex justify-center order-3 md:order-2 items-center gap-x-4">
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

      {/* Action button */}
      <button className="animated-gradient whitespace-nowrap px-4 order-2 md:order-3 font-semibold rounded-full h-fit py-2">
        Connect wallet
      </button>
    </motion.header>
  );
};

export default Header;
