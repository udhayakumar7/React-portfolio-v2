import { motion } from 'motion/react'
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import React from 'react'
import Projects from './Projects';
import { Link } from 'react-router-dom';

const MyWork = () => {

    const projects = [
        {
          title: "Ecommerce",
          src: "images/ecommerce.png",
          color: "#706D63",
          link: "https://boltz-head.netlify.app/",
        },
        {
          title: "Portfolio",
          src: "images/portfolio.png",
          color: "#8C8C8C",
          link :"https://portfolio-gsap-kumar.netlify.app/"
        },
        {
          title: "Movie app",
          src: "images/movieapp.png",
          color: "#EFE8D3",
          link: "https://newdisney.netlify.app/"
        },
        {
          title: "CRM",
          src: "images/crm.png",
          color: "#706D63",
          link: "https://crm-admin-new.netlify.app/"
        },
      ];

      const scaleAnimation = {
        initial: { scale: 0, x: "-50%", y: "-50%" },
        enter: {
          scale: 1,
          x: "-50%",
          y: "-50%",
          transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
        },
        closed: {
          scale: 0,
          x: "-50%",
          y: "-50%",
          transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
        },
      };

      const [modal, setModal] = useState({ active: false, index: 0 });
      const { active, index } = modal;
      const modalContainer = useRef(null);
      const cursor = useRef(null);
      const cursorLabel = useRef(null);
    
      let xMoveContainer = useRef(null);
      let yMoveContainer = useRef(null);
      let xMoveCursor = useRef(null);
      let yMoveCursor = useRef(null);
      let xMoveCursorLabel = useRef(null);
      let yMoveCursorLabel = useRef(null);

      useEffect(() => {
        //Move Container
        xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
          duration: 0.8,
          ease: "power3",
        });
        yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
          duration: 0.8,
          ease: "power3",
        });
        //Move cursor
        xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
          duration: 0.5,
          ease: "power3",
        });
        yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
          duration: 0.5,
          ease: "power3",
        });
        //Move cursor label
        xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
          duration: 0.45,
          ease: "power3",
        });
        yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
          duration: 0.45,
          ease: "power3",
        });
      }, []);
    
      const moveItems = (x, y) => {
        xMoveContainer.current(x);
        yMoveContainer.current(y);
        xMoveCursor.current(x);
        yMoveCursor.current(y);
        xMoveCursorLabel.current(x);
        yMoveCursorLabel.current(y);
      };
      const manageModal = (active, index, x, y) => {
        moveItems(x, y);
        setModal({ active, index });
      };

  return (
    <div className='section-gap' id="works">

        <div className='container container-padding mx-auto'>
            <h2 className='section_heading mb-10'>Recent Work</h2>
            <div className='grid grid-cols-12 desktop-version'>
            <div className="col-start-1 col-end-13">
                <>

                {projects.map((project, index) => {
                return (
                  <Link to={project.link} rel="noreferrer"  target="_blank">
                  <Projects
                    index={index}
                    title={project.title}
                    manageModal={manageModal}
                    key={index}
                  />
                  </Link>
                );
              })}
                
                </>

                <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={"popContainer"}>
            <div style={{top: index * -100 + "%"}} className={"popSlider"}>
            {
                projects.map( (project, index) => {
                    
                const { src, color } = project
                return <div className={"pop"} style={{backgroundColor: color}} key={`modal_${index}`}>
                    <img 
                    src={src}
                    width={300}
                    style={{objectPosition:"top center"}}
                    alt="image"
                    />
                    
                </div>
                })
            }
            </div>
        </motion.div>
        <motion.div ref={cursor} className={"cursor"} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={"cursorLabel"} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>



            </div>

            </div>
             <div className="grid grid-col-12 mobile-version">
              
                 {projects.map((project, index) => (
                      <Link rel="noreferrer" target="_blank" r to={project.link}>
                  <div className='col-span-12 mb-10' key={project.title}>
                    <div className={`bg-gray-200 py-14 px-5`}>
                      <img className='w-full h-full object-cover' src={project.src} alt={project.title} />


                    </div>
                    <h2>{project.title}</h2>
                    <p>Design & Development</p>


                  </div>
                  </Link>

                 ))}
              
              
             </div>

        </div>
      
    </div>
  )
}

export default MyWork
