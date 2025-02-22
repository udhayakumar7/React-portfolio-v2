import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

import { motion } from 'framer-motion';

import Curve from './utils/Curve';
import NavOgLink from './utils/NavOgLink';
import { menuSlide } from './motion/nav';



const MobileNav = () => {

    const navItems = [
        {
          title: "Home",
          href: "/",
        },
        {
          title: "About Me",
          href: "/about",
        },
        {
          title: "Showcase",
          href: "/show-case",
        },
        {
        
            title: "Let's Connect",
            href: "/show-case",
         
        }
      ]

      const pathname = useLocation();
      const [selectedIndicator, setSelectedIndicator] = useState(pathname?.state);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={'menu'}
      >
       <div className={'body'}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname?.state)}} className={'nav'}>
                    <div className={'header'}>
                    {
                      navItems.map( (data, index) => {
                        return <NavOgLink key={index} 
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.href} 
                        />
                      })
                    }
                    </div>
 
            </div>
            
        </div>
        <Curve />
    </motion.div>
  )
}   

export default MobileNav