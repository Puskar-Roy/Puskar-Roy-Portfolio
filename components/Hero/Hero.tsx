import React from 'react'
import HeroContent from './HeroContent';
const Hero = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[-10] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent/>
    </div>
  );
}

export default Hero
