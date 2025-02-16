import { motion } from 'motion/react'
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import React from 'react'
import Projects from './Projects';

const MyWork = () => {

    const projects = [
        {
          title: "Ecommerce",
          src: "https://tse4.mm.bing.net/th?id=OIP.Ce2m8qM-qT6o1vVpH-0OrAHaEo&pid=Api&P=0&h=180",
          color: "#706D63",
        },
        {
          title: "Portfolio",
          src: "https://cdn.photographylife.com/wp-content/uploads/2014/06/Nikon-D810-Image-Sample-6.jpg",
          color: "#8C8C8C",
        },
        {
          title: "Movie app",
          src: "https://tse3.mm.bing.net/th?id=OIP.9nXsUmBntvg_xZ_39pljogHaDt&pid=Api&P=0&h=180",
          color: "#EFE8D3",
        },
        {
          title: "CRM",
          src: "https://tse2.mm.bing.net/th?id=OIP.iAZA6wk3EEJgfJWbJ830ugHaEb&pid=Api&P=0&h=180",
          color: "#706D63",
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
    <div className='section-gap'>

        <div className='container container-padding mx-auto'>
            <h2 className='section_heading mb-10'>Recent Work</h2>
            <div className='grid grid-cols-12'>
            <div className="col-start-2 col-end-12">
                <>

                {projects.map((project, index) => {
                return (
                  <Projects
                    index={index}
                    title={project.title}
                    manageModal={manageModal}
                    key={index}
                  />
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
        </div>
      
    </div>
  )
}

export default MyWork
