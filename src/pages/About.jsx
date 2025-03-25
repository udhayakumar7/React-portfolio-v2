import React, { useEffect, useRef } from "react";
import PageLoader from "../components/pageLoader/PageLoader";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import { motion } from "motion/react";


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Animation for bio text with a 2-second delay
    gsap.from(
      '#bio', 
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2, // Stagger each text element with a slight delay
        delay: 2, // Delay before starting the animation
      }
    );
    
    // Animate the image with a 2-second delay
    gsap.from(
      '.about-image',
      {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "power3.out",
        delay: 2, // Delay image animation by 2 seconds
      }
    );

 
  }, []);


  const Skills = [ 
    {
      image: '/images/html.png',
      name: 'HTML',
      // bg: 'rgba(227, 79, 38, 1)', // HTML Primary color with opacity
    },
    {
      image: '/images/css.png',
      name: 'CSS',
      // bg: 'rgba(38, 61, 255, 0.2)', // CSS Primary color with opacity
    },
    {
      image: '/images/js.png',
      name: 'JavaScript',
      // bg: 'rgba(255, 221, 51, 0.2)', // JS Primary color with opacity
    },
    {
      image: '/images/reactjs.png',
      name: 'React.js',
      // bg: 'rgba(97, 218, 251, 0.2)', // React Primary color with opacity
    },
    {
      image: '/images/nextjs.svg',
      name: 'Next.js',
      // bg: 'rgba(0, 0, 0, 0.2)', // Next.js Primary color with opacity
    },
    {
      image: '/images/sass.svg',
      name: 'Sass',
      // bg: 'rgba(214, 45, 89, 0.2)', // Sass Primary color with opacity
    },
    {
      image: '/images/tailwind-css.svg',
      name: 'Tailwind CSS',
      // bg: 'rgba(56, 189, 248, 0.2)', // Tailwind Primary color with opacity
    },
    {
      image: '/images/gsap-1.svg',
      name: 'GSAP',
      // bg: 'rgba(38, 176, 234, 0.2)', // GSAP Primary color with opacity
    },
  ]
  

   const container = useRef(null)

    useEffect(()=>{
           const ctx = gsap.context(()=>{
                gsap.fromTo('.card:not(:first-child',

                   {
                     x: 2000,
                     rotate: -90,
                     
                   },
                   {
                    x:0,
                    rotate : 0,
                    stagger: '0.7',
                    scrollTrigger : {
                      
                      pin: container.current,
                      scrub: true,
                      pinSpacer: false,

                    }
                   }
                  
                  )
           })
    },[])



  return (
    <PageLoader>
      <Header />
      <PageHeader title={"About Me"} />

      <div className="about-container">
        <div className="container-padding container mx-auto">
          <div className="grid grid-cols-12 md:gap-8 pt-20">

            <div className="md:col-span-12 col-span-12 md:pe-16 about-me">
              <p id="bio">
                Hey there! 👋 I’m Kumar, a passionate React Developer with over 3 years of experience in building dynamic, scalable, and high-performance web applications. ⚛️💻 My journey revolves around creating seamless user interfaces and crafting robust front-end solutions that empower users and teams alike. 🚀
              </p>
              <p id="bio">
                Throughout my career, I’ve had the opportunity to work on a variety of projects—from small startups to larger enterprises—helping to bring products to life with clean, maintainable code and efficient React components. 🔧✨ I specialize in React.js, Redux, and modern front-end technologies, always staying on top of the latest trends and best practices in the React ecosystem. 📚🔍
              </p>
              <p id="bio">
                I’m a strong advocate for writing reusable, modular code, and I thrive in environments that foster collaboration and knowledge-sharing. 💬🤝 Whether it's optimizing performance, integrating APIs, or building responsive layouts, I’m always focused on delivering an exceptional user experience. 🖥️📱
              </p>
              <p id="bio">
                When I’m not coding, you’ll probably catch me exploring new JavaScript frameworks, diving into developer podcasts 🎙️, or testing out new tools and technologies. 🔧💡 I’m also a fan of community-driven learning and love contributing to open-source projects. 🌍❤️
              </p>
              <p id="bio">
                Looking forward to connecting with like-minded devs and building the future of web applications together! 🌟
              </p>
            </div>

           

          </div>
        </div>

       

        <div className='section-gap skills-section mobile-hidden'>
          <div className='container container-padding mx-auto'>
        <h2 className='section_heading mb-0'>Tech Stack</h2>

        {/* Infinite Marquee container */}
        <div className="stack-row overflow-hidden relative mt-10">
          {/* Duplicate the array for infinite loop effect */}
          {Skills.map((skill, index) => (
              <div
                className="skills-card-1 rounded-lg flex flex-col items-center justify-center"
                key={skill.name + index}
              >
                <img
                  className="max-w-[100px] "
                  src={skill.image}
                  alt={skill.name}
                />
                <p>{skill.name}</p>
              </div>
            ))}
        </div>
       
        
        </div>
       

            

        </div>


        <div className='section-gap skills-section mobile-show'>
          <div className='container container-padding mx-auto'>
        <h2 className='section_heading mb-0'>Tech Stack</h2>
        <div ref={container} className="h-screen w-full flex items-center justify-center  overflow-x-hidden">
          <div className="relative w-72  h-[300px]" >
            {
              Skills.map((skill) => (
                <>
                <div className="card skills-card rounded-lg flex items-center justify-center" >
                <img
                className="max-w-[140px]"
                  key={skill.name}
                  // className="skill-item"
                  src={skill.image}
                  alt={skill.name}
                />
                <p>{skill.name}</p>
                </div>
                
                </>
              ))
            }
          </div>
         </div>
        
        </div>
       

            

        </div>
        

      </div>
      <Footer />
    </PageLoader>
  );
};

export default About;
