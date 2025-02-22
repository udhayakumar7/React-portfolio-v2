import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  const phrase =
    "Together, we’ll break boundaries and create experiences that resonate. With a focus on design, functionality, and interaction, I help brands stand out and make a meaningful impact in today’s digital world.";

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
      <div className="grid grid-cols-12 mg:gap-8">
        {/* Staggered Animated Text */}
        <div className="md:col-span-7 col-span-12">
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
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
