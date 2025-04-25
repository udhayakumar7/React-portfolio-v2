import React, { useState, useEffect } from 'react';
import { motion } from "motion/react"
import HeroImage from '../assets/hero-1.png'
import { Link } from 'react-router-dom';

const Hero = () => {


  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Handle mouse move event
  const handleMouseMove = (event) => {
    const clientX = event.clientX;
    const clientY = event.clientY;

    // Calculate offset
    const offsetX = (clientX - window.innerWidth / 2) / 30;  // Adjust speed here
    const offsetY = (clientY - window.innerHeight / 2) / 30; // Adjust speed here

    setOffset({ x: offsetX, y: offsetY });
  };

  useEffect(() => {
    // Attach mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <div className='h-screen w-full  relative '>
        <div className='container mx-auto flex items-center relative justify-center h-full w-full'>
            <div className='hero-banner-container' >
                <motion.p initial={{ y: 20 }}  animate={{ y: 0 }} transition={{ type: "tween", duration: 1 , ease: "easeOut", delay: 3.4  }} >👋, My name is kumar and I am </motion.p>
                <motion.h2 initial={{ x: 800 }}  animate={{ x: 0 }} transition={{ type: "tween", duration: 2 , ease: "easeOut", delay: 3.4 }} >Webdeveloper</motion.h2>
                <motion.h3 initial={{ x: -800 }}  animate={{ x: 0 }} transition={{ type: "tween", duration: 2 , ease: "easeOut", delay: 3.4 }}>&Webdesigner</motion.h3>
                <motion.span initial={{ x: -800 }}  animate={{ x: 0 }} transition={{ type: "tween", duration: 2 , ease: "easeOut", delay: 3.4 }} className='location mt-2'>based in India.</motion.span>
                <div className='text-center flex items-center justify-center gap-3 mt-6'>
                    <Link to={'mailto:kumarpersonalacc11@gmail.com'}><button className='primary-btn'>Hire me!✌️</button></Link>
                    {/* <button className='primary-btn-outline'> together✌️</button> */}
                    
                </div>
               
            </div>
            <div className='image-container  hidden'>

            <img className='hero-image' src={HeroImage} alt="hero-image" style={{transform: `translate(${offset.x}px, ${offset.y}px)`, transition: 'transform 0.1s ease-out'}} />

            </div>

        </div>
        
     
    </div>
  )
}

export default Hero
