import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';

const Scroller = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;


  useLayoutEffect( () => { requestAnimationFrame(animate)},[])


  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <div className='scroller w-full overflow-hidden' >
        <div className='h-full w-full flex items-center  whitespace-nowrap' ref={slider}>
        <h1 ref={firstText} className=' flex items-center' > Design interaction between humans and brands <span className=' h-2.5 w-2.5  md:h-5 md:w-5 mx-3 bg-white  inline-block'></span></h1>
        <h1 ref={secondText} className=' flex items-center shadow-text' >Design interaction between humans and brands <span className='h-2.5 w-2.5  md:h-5 md:w-5  mx-3 bg-white inline-block'></span></h1>
        </div>

    </div>
  );
};

export default Scroller;
