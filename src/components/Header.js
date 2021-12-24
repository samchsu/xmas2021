import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header'>
      <div className='header-inner'>
        <a href='/home'>
          <div className='logo'>Xmas</div>
        </a>
        <nav className='nav'>
          <li>
            <a href='/spring'>Spring</a>
          </li>
          <li>
            <a href='/summer'>Summer</a>
          </li>
          <li>
            <a href='/fall'>Fall</a>
          </li>
          <li>
            <a href='/winter'>Winter</a>
          </li>
        </nav>
        <div className='contact'>
          <a href='/surprise'>🎄</a>
        </div>
        <div className='hamburger-menu'>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
