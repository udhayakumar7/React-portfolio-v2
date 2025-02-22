import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { scale, slide } from '../motion/nav';

const NavOgLink = ({data, isActive}) => {

    const { title, href, index} = data;

    console.log(data.href)

  return (
    <motion.div 
        className={"link"} 
         
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className={"indicator"}>
        </motion.div>
        <Link to={href}>{title}</Link>
      </motion.div>
  )
}

export default NavOgLink