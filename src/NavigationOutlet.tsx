import React from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./components/Header";
import { motion } from "framer-motion";

const NavigationOutlet = () => {
  const location = useLocation();

  return (
    <div className="w-full font-poppins h-[100vh] overflow-y-auto bg-base text-white flex flex-col">
      <Header />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Outlet />
      </motion.div>
    </div>
  );
};

export default NavigationOutlet;
