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
            <a href="/images/image-4.jpg" title="Palomar Mountain on March 6th"   target="_blank"  rel="noopener noreferrer">Spring</a>
          </li>
          <li>
            <a href="/images/image-3.jpg" title="Long Beach on June 20th"  target="_blank"  rel="noopener noreferrer">Summer</a>
          </li>
          <li>
            <a href="/images/image-5.jpg" title="Heart Lake on August 16th"  target="_blank"  rel="noopener noreferrer">Fall</a>
          </li>
          <li>
            <a href="/images/image-7.jpg" title="Cheesecake Factory on December 13th"  target="_blank"  rel="noopener noreferrer">Winter</a>
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
