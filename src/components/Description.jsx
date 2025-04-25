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
    <div id="about" ref={descriptionRef} className="container container-padding section-gap mx-auto  md:pb-16   description-content"
    >
       <h2 className='section_heading mb-10'>About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8">
  {/* Left Column: Animated Text */}
  <div className="md:col-start-1 md:col-end-6 mb-6 md:mb-0">
    <div className="flex flex-col justify-between h-full">
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
  </div>

  {/* Right Column: Paragraph + Info */}
  <div className="md:col-start-6 md:col-end-13">
    <p ref={textRef} className="text-lg text-black leading-relaxed">
     I specialize in crafting seamless digital experiences by blending thoughtful UI design with modern frontend technologies. Whether it's a startup or a global brand, I collaborate closely to turn ideas into responsive, engaging interfaces that leave a lasting impression.
    </p>
    <p ref={textRef} className="text-lg text-black leading-relaxed mt-6">
     From wireframes to pixel-perfect interfaces, I enjoy every step of the frontend development journey. With a passion for clean code and design-driven thinking, I help teams ship fast, beautiful, and functional products across the web.
    </p>
    <p ref={textRef} className="text-lg text-black leading-relaxed mt-6">
      With a strong foundation in design systems and frontend architecture, I build scalable and accessible interfaces that perform beautifully on every device. My work focuses on solving real-world problems through creative, user-focused solutions.
    </p>

    <div className="md:flex items-center gap-10 info mt-10 space-y-6 md:space-y-0">
      <div>
        <h6>Role</h6>
        <h5>Frontend Developer</h5>
      </div>
      <div>
        <h6>Say hello</h6>
        <h5><Link to={'mailto:kumarpersonalacc11@gmail.com'}>kumarpersonalacc11@gmail.com</Link></h5>
      </div>
      <div>
        <h6 className="invisible">hidden</h6>
        <h5><Link to={'https://www.linkedin.com/in/kumar-d85985a18a'}>Explore LinkedIn</Link></h5>
      </div>
    </div>
  </div>
</div>

<div className="mt-12">
  <h2 className='section_heading mb-10'>Experience</h2>
  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
    <p id="bio" className="bio_1 md:col-span-3 md:col-start-1">
      2022 - Present
    </p>

    <div className="exptable md:col-span-4 md:col-start-4">
      <table id="bio">
        <tr>
          <td>Position</td>
          <td>Frontend Developer</td>
        </tr>
        <tr>
          <td>Location</td>
          <td>Madurai, Tamil Nadu, IN</td>
        </tr>
        <tr>
          <td>Industry</td>
          <td>Technogenesis Software Solutions</td>
        </tr>
        <tr>
          <td>Website</td>
          <td>www.technogenesis.in</td>
        </tr>
      </table>
    </div>

    <div className="md:col-span-5 md:col-start-8">
      <p id="bio" className="bio_1">
        As a Frontend Developer at Technogenesis, I was responsible for designing and implementing user-facing features across various web applications. I collaborated closely with cross-functional teams to transform complex requirements into responsive, interactive, and intuitive interfaces.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Description;




