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
      name: 'Understand',
      content:"I start by getting to know the project inside and out. This means meetings with the team to understand their goals and what they hope to achieve",
    },
    {
      name: 'Ideation',
      content:"I use user flows, sketches, and storyboards to visualise the user journey and ensure the visual design is effective.",
    },
    {
      name: 'Visual design',
      content:"In the visual design phase, I turn my ideas into reality. This is where I create the actual look and feel of the product, including the user interface, prototypes, and interactive elements.",
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

          <div className="md:col-span-12 col-span-12  about-me">
              <p id="bio" className="bio_head">
                I'm glad you stopped by to learn more about me. I'm a passionate
                React front-end developer from India, dedicated to crafting
                intuitive and engaging user interfaces. Whether you're here out
                of curiosity or looking for collaboration, welcome!
              </p>
              <p id="bio" className="bio_head">
                My name is Kumar. I'm a developer, video game geek, and a
                serious foodie. I also enjoy dabbling in the kitchen (and I’ve
                been told I’m not too bad at it). Oh, and when I'm not coding or
                gaming, you'll probably find me geeking out over the latest tech
                or sci-fi stuff!
              </p>

              <p id="bio" className="bio_head">
                <b>Becoming a Developer </b>
              </p>
              <p id="bio" className="bio_1">
                My journey into development began with curiosity and a drive to
                build things that make an impact. Over the past 3 years, I've
                grown from a beginner learning the basics on YouTube to a
                confident front-end developer working on real-world projects.
                I’m a self-motivated learner — constantly exploring new
                technologies, reading documentation, and pushing myself to stay
                updated with the latest trends in web development. Most of what
                I’ve learned came from online resources, tutorials, and hands-on
                practice, which has helped me build a strong foundation in React
                and front-end technologies. This journey hasn’t just been about
                writing code — it’s also about solving problems, thinking
                creatively, and learning every single day. And honestly, I
                wouldn’t want it any other way
              </p>
              <p id="bio" className="bio_head">
                <b>  Personal Interests </b>
              </p>
              <p id="bio" className="bio_1">
              In my free time, I enjoy cooking, watercolor painting, listening to dubstep, traveling, and watching sci-fi movies. For a break from the city noise, I love taking walks in the local park—an activity I'd recommend to anyone.
              </p>

            </div>
          </div>
        </div>


        <div className='section-gap idea-section hidden'>
          <div className='container container-padding mx-auto'>
        <h2 className='section_heading mb-0'>Process</h2>
        <div ref={container} className="h-[600px] w-full flex items-center justify-center  overflow-hidden">
          <div className="relative w-[800px]  h-[400px]" >
            {
              Skills.map((skill) => (
                <>
                <div className="card skills-card rounded-lg " >
                <h3>{skill.name}</h3>
                <h6>{skill.content}</h6>
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
