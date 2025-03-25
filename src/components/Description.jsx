import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  const phrase =
    "Creative Web Developer with 3+ years of experience in web development and UI design. Specializing in building custom websites and user interfaces, I bring a versatile skill set and a passion for creating engaging, responsive digital experiences. With expertise in front-end and back-end development, I focus on delivering seamless, visually appealing, and functional web solutions that meet the needs of modern businesses";

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
    <div ref={descriptionRef} className="container container-padding section-gap mx-auto  md:py-16   description-content"
    >
      <div className="grid grid-cols-12 md:gap-8">
        {/* Staggered Animated Text */}
        <div className="md:col-span-7 col-span-12 md:pe-16">
          <p className="tagline flex flex-wrap text-2xl font-semibold leading-snug text-black">
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

        {/* Additional Animated Paragraph */}
        <div className="md:col-span-5 col-span-12 mt-3.5 md:mt-0">
          <p ref={textRef} className="text-lg text-black leading-relaxed">
          I thrive at the intersection of design and code, combining beautiful visuals with cutting-edge web technology.
          Currently working independently, I help companies and organizations from around the world to bring their ideas to life in ways that add value and delight their audiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;




