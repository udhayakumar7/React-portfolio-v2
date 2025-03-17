import React, { useEffect, useState } from 'react';
import PageLoader from '../components/pageLoader/PageLoader';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from 'motion/react';
import { motion } from 'motion/react';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
  const { scrollYProgress } = useScroll(); // Detect scroll position
  const [scrollPos, setScrollPos] = useState(0);

  // Update scroll position to control the background movement
  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      setScrollPos(v); // Track the scroll percentage
    });
  }, [scrollYProgress]);

  return (
    <PageLoader>
      <Header />
      <PageHeader title={"SELECTED WORKS"} />
      <div className='works-container'>
        <div className='container-padding container mx-auto'>
          <div className='works-list'>
            {/* Work 1 */}
            <div className='work-item' >
              <h3 >E-COMMERCE <br />  WEBSITE</h3>
              <motion.div
                className='image-bg right'
                style={{
                  backgroundImage: `url('https://img.freepik.com/free-photo/black-cubes-background-abstract_1123-401.jpg?t=st=1742029440~exp=1742033040~hmac=4aa0be4695d1cb4f274a95cba7dbe680a0780e81825fa469f0aa99588ab13a65&w=740')`,
                  y: scrollPos * -500,
                  backgroundPositionY: `${scrollPos * 500}%`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 30,
                  damping: 30,
                  mass: 1,
                }}
              >
                <img src="images/ecommerce.png" alt="ecommerce.png" />
              </motion.div>
            </div>

            {/* Work 2 */}
            <div className='work-item'>
              <h3 className='even'>PORTFOLIO <br /> WEBSITE</h3>
              <motion.div
                className='image-bg left'
                style={{
                  y: scrollPos * -250,
                  backgroundPositionY: `${scrollPos * 200}%`,
                  backgroundImage: `url('https://images.pexels.com/photos/3137079/pexels-photo-3137079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 30,
                  damping: 30,
                  mass: 1,
                }}
              >
              <img src="images/ecommerce.png" alt="ecommerce.png" />
              </motion.div>
            </div>

            {/* Work 3 */}
            <div className='work-item'>
              <h3>MOVIE <br /> APPLICATION</h3>
              <motion.div
                className='image-bg right'
                style={{
                  y: scrollPos * -280,
                  backgroundPositionY: `${scrollPos * 500}%`,
                  backgroundImage: `url('https://images.pexels.com/photos/9665192/pexels-photo-9665192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 30,
                  damping: 30,
                  mass: 1,
                }}
              >
               <img src="images/ecommerce.png" alt="ecommerce.png" />
              </motion.div>
            </div>

            {/* Work 4 */}
            <div className='work-item ' style={{paddingBottom:"200px"}}>
              <h3 className='even'>CRM <br /> ADMIN</h3>
              <motion.div
                className='image-bg left'
                style={{
                  y: scrollPos * -100,
                  backgroundPositionY: `${scrollPos * 500}%`,
                  backgroundImage: `url('https://images.pexels.com/photos/7828698/pexels-photo-7828698.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 30,
                  damping: 30,
                  mass: 1,
                }}
              >
              <img src="images/ecommerce.png" alt="ecommerce.png" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PageLoader>
  );
}

export default ShowCase;
