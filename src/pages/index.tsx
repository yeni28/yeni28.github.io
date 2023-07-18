import React, { useState, useEffect } from 'react';

import '../styles/animation.module.css';
import { prefix } from '@/components/config/config';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || document.documentElement.scrollTop);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const opacity1 = scrollY > 30 ? 1 : 0.1;
  const opacity2 = scrollY > 100 ? 1 : 0;
  const opacity3 = scrollY > 200 ? 1 : 0;
  const left = scrollY > 400 ? '50%' : '5%';
  const bg = scrollY > 400 ? '0px 0px 20px  black' : '';
  const transitionDuration = '1s';
  return (
    <div className="h-[50rem] w-auto ">
      <img src="https://yeni28.github.io/yeni28.github.io/Image/computer.jpg" alt="bg" className="absolute top-0 left-0 " />

      <div className="font-PreB">
        <div className={`text-[4rem] left-1/2  transform -translate-x-1/2  z-30 absolute text-white top-[60%] transition duration-300 ease-in-out`} style={{ opacity: `${opacity1}` }}>
          좋은 코드를 고민하는
        </div>
        <div className={`text-[4rem] left-1/2  transform -translate-x-1/2  z-30 absolute text-white top-[70%] transition duration-300 ease-in-out`} style={{ opacity: `${opacity2}` }}>
          빠르게 배우는
        </div>
        <div className={`text-[4rem] left-1/2  transform -translate-x-1/2  z-30 absolute text-white top-[80%] transition duration-300 ease-in-out`} style={{ opacity: `${opacity3}` }}>
          꾸준히 학습하는
        </div>
        <div
          className="z-30 text-[10rem] absolute text-white top-[120%] "
          style={{
            left: `${left}`,
            transitionDuration: `${transitionDuration}`,
            textShadow: `${bg}`,
          }}
        >
          FRONT-END
        </div>
        <div className="z-30 text-[10rem] absolute border-white border-3 top-[140%] left-[50%]" style={{ color: 'transparent', WebkitTextStroke: '0.2rem #fff', padding: '2rem' }}>
          김예은입니다.
        </div>
      </div>
    </div>
  );
}
