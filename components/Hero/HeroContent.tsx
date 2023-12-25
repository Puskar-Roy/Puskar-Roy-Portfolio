import React from 'react'
import './Hero.css'
import Image from 'next/image';
const HeroContent = () => {
  return (
    <div>
      <div className="hero_Container">
        <div className="hero_content">
          <div className="hero_text">
            <div>
              <h1 className="Welcome-text text-[13px]">
                Puskar Roy - Fullstack Developer
              </h1>
              <span>
                Hi, I am
                <span className="name text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  Puskar Roy{" "}
                </span>
                Fullstack Developer .
              </span>
            </div>
            <div className="buttons">
            <button className='hero_btn '> Lets Connect </button>
            <button className='hero_btn '> Lets Connect </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroContent
