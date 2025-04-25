import { AnimatePresence } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import MobileNav from "./Mobilenav";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const button = useRef(null);



  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isActive]);


  const toggleMenu = () => {
    setIsActive((prevState) => !prevState);
  };


  return (


    <div className="bg-white py-4  fixed w-full top-0 z-2 nav">
      <div className="flex items-center  justify-between container-padding container mx-auto">
        <h1 className=""><Link to={'/'}> Codebykumar</Link></h1>
        <ul className="md:flex items-center  hidden">
          <li className="  "><a href={'#about'}> About Me</a></li>
          <li className="  "><a href={'#works'}> Works </a> </li>
          <li className="nav-btn "><Link to={'mailto:kumarpersonalacc11@gmail.com'}> Let's connect </Link></li>
        </ul>

        <div className="mobile-menu-ham" ref={button} onClick={toggleMenu}>
        <div className={`ham-burger ${isActive == true ? "add-class" : ""}`}></div>
       

        </div>

        
        
      </div>
      <AnimatePresence mode="wait">{isActive && <MobileNav />}</AnimatePresence>
    </div>
  );
};

export default Header;
