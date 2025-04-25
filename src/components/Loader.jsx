import { motion, useAnimate } from "framer-motion";
import React, { useEffect } from "react";

const Loader = () => {
  const [scope, animate] = useAnimate();

  async function myAnimation() {
    await animate("#image-container", {
      clipPath: "polygon(50% 40%, 50% 40%, 50% 60%, 50% 60%)",
      display: "none",
    });

    await animate(
      "#image-container",
      {
        clipPath: "polygon(0% 40%, 100% 40%, 100% 60%, 0% 60%)",
        display: "flex",
      },
      {
        delay: 0.45,
        duration: 0.4,
        ease: "easeInOut",
      }
    );

    await animate(
      "#image-container",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        display: "flex",
      },
      {
        delay: 0.2,
        duration: 0.4,
        ease: "easeInOut",
      }
    );
  }

  useEffect(() => {
    myAnimation();
  }, []);

  const move = {
    hidden: (i) => ({
      y: "100%",
      x: i[0],
    }),
    moveUp: (i) => ({
      y: 0,
      transition: {
        delay: i[1],
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
    moveRight: {
      x: "10px",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    moveLeft: {
      x: "-10px",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const imageChange = {
    hidden: { display: "block" },
    show: (i) => ({
      display: "none",
      transition: {
        delay: i,
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
  };

  const containerUp = {
    hidden: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    show: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      display: "none",
      transition: {
        delay: 4,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div 
      className="bg-black h-screen w-full fixed inset-0 overflow-hidden z-50 loader"
      ref={scope}
      variants={containerUp}
      initial="hidden"
      animate="show"
    >
      <motion.section className="flex justify-center items-center w-full h-full">
        <div className="overflow-y-clip">
          <motion.h1
            variants={move}
            initial="hidden"
            animate={["moveUp", "moveLeft"]}
            custom={[100, 0.1]}
            className="text-white md:text-[60px] text-[30px] font-bold"
          >
            CODEBY
          </motion.h1>
        </div>

        <motion.div id="image-container" className="md:w-[200px] w-[100px] h-max relative">
          <motion.img
            variants={imageChange}
            initial="hidden"
            animate="show"
            custom={1.8}
            className="object-cover"
            src="https://i.pinimg.com/originals/9b/3a/9c/9b3a9c48203b7886bd5638fe5f7c2cea.jpg"
            alt="image-loader"
          />
          <motion.img
            variants={imageChange}
            initial="hidden"
            animate="show"
            custom={2.2}
            className="object-cover"
            src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image-loader"
          />
          <motion.img
            variants={imageChange}
            initial="hidden"
            animate="show"
            custom={5}
            transition={{ delay: 3, duration: 0.6, ease: "easeInOut" }}
            className="object-cover"
            src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image-loader"
          />
          
          
        </motion.div>

        <div className="overflow-y-clip">
          <motion.h1
            variants={move}
            initial="hidden"
            animate={["moveUp", "moveRight"]}
            custom={[100, 0.2]}
            className="text-white md:text-[60px] text-[30px] font-bold"
          >
            KUMAR
          </motion.h1>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Loader;
