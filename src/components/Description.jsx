import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  const phrase =
    "Passionate about building websites with react, focusing on clean design, usability, and performance.";

  const descriptionRef = useRef(null);
  const wordsRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top 80%", // Starts animation when 80% of the section is visible
        // toggleActions: "play none none reset", // Play when in view, reset when out
      },
    });

    // Staggered word animation
    tl.from(wordsRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.05, // Delays each word slightly for smooth effect
    }).from(
      textRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3" // Starts slightly before words finish animating
    );
  }, []);

  return (
    <div ref={descriptionRef} className="container container-padding section-gap mx-auto  md:pb-16   description-content"
    >
      
      <div className="grid grid-cols-12 md:gap-8">
        {/* Staggered Animated Text */}
        <div className="md:col-start-1 md:col-end-9 ">
          <div className="flex flex-col justify-between h-full">

          <p className="tagline flex flex-wrap text-2xl font-semibold leading-snug text-black text-big">
            {phrase.split(" ").map((word, index) => (
              <span
                key={index}
                ref={(el) => (wordsRef.current[index] = el)}
                className="inline-block"
              >
                {word}
              </span>
            ))}
          </p>
          </div>
        


        </div>

        {/* Additional Animated Paragraph */}
        {/* <div className="md:col-start-3 md:col-end-13 mt-3.5 md:mt-0">
          <p ref={textRef} className="text-lg text-black leading-relaxed">
          I thrive at the intersection of design and code, combining beautiful visuals with cutting-edge web technology.
          Currently working independently, I help companies and organizations from around the world to bring their ideas to life in ways that add value and delight their audiences.
          </p>
          <p ref={textRef} className="text-lg text-black leading-relaxed mt-8">
          I thrive at the intersection of design and code, combining beautiful visuals with cutting-edge web technology.
          Currently working independently.
          </p>
          <p ref={textRef} className="text-lg text-black leading-relaxed mt-8">
          I thrive at the intersection of design and code, combining beautiful visuals with cutting-edge web technology.
          </p>
          <div className="flex items-center gap-10 info mt-10">
            <div>
                <h6>Product Developement</h6>
                <h5>Frontend Engineer</h5>
            </div>
            <div>
                <h6>Say hello</h6>
                <h5><Link>kumar.dev@gmail.com</Link> </h5>
            </div>
            <div>
                <h6 className="" style={{visibility: "hidden"}}>ssd</h6>
                <h5><Link>Explore LinkedIn</Link></h5>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Description;




