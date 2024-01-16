import React, { useState, useEffect } from "react";
import useMediaQuery from "../../components/Hooks/useMediaQuery";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || document.documentElement.scrollTop);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const opacity1 = scrollY > 30 ? 1 : 0.1;
  const opacity2 = scrollY > 100 ? 1 : 0;
  const opacity3 = scrollY > 200 ? 1 : 0;
  const left = scrollY > 400 ? "40vw" : "0vw";
  const bgs = scrollY > 400 ? "0px 0px 20px  black" : "";
  const mopacity1 = scrollY > 30 ? 1 : 0.1;
  const mopacity2 = scrollY > 100 ? 1 : 0;
  const mopacity3 = scrollY > 120 ? 1 : 0;
  const mleft = scrollY > 200 ? "40vw" : "0vw";
  const mbgs = scrollY > 400 ? "0px 0px 20px  black" : "";
  const transitionDuration = "1s";
  return (
    <div className={`h-[50rem] w-auto`}>
      {isMobile ? (
        <img
          src="/Image/longcom.jpg"
          alt="bg"
          className={`absolute top-0 left-0  w-[100vw] h-[150vh]`}
        />
      ) : (
        <img
          src="/Image/computer.jpg"
          alt="bg"
          className={`absolute top-0 left-0  w-[100vw] h-[200vh]`}
        />
      )}

      <div className="font-PreB">
        {isMobile ? (
          <div>
            <div
              className={`text-[7vw] w-[60vw] ml-[54%]  transform -translate-x-1/2  z-30 absolute text-white top-[30%] transition duration-300 ease-in-out`}
              style={{ opacity: `${mopacity1}` }}
            >
              좋은 코드를 고민하는
            </div>
            <div
              className={`text-[7vw] w-[60vw] ml-[54%]   transform -translate-x-1/2  z-30 absolute text-white top-[35%] transition duration-300 ease-in-out`}
              style={{ opacity: `${mopacity2}` }}
            >
              빠르게 배우는
            </div>
            <div
              className={`text-[7vw] w-[60vw] ml-[54%]  transform -translate-x-1/2  z-30 absolute text-white top-[40%] transition duration-300 ease-in-out`}
              style={{ opacity: `${mopacity3}` }}
            >
              꾸준히 학습하는
            </div>
            <div
              className="z-20 text-[10vw] absolute text-white top-[96%] "
              style={{
                left: `${mleft}`,
                transitionDuration: `${transitionDuration}`,
                textShadow: `${mbgs}`,
              }}
            >
              FRONT-END
            </div>
            <div className="z-30 text-[15vw] absolute text-white top-[103%] right-0">
              김예은입니다.
            </div>
          </div>
        ) : (
          <div>
            <div
              className={`text-[3.5vw] left-1/2  transform -translate-x-1/2  z-30 absolute text-white top-[60%] transition duration-300 ease-in-out'} `}
              style={{ opacity: `${opacity1}` }}
            >
              좋은 코드를 고민하는
            </div>
            <div
              className={`text-[3.5vw] left-1/2  transform -translate-x-1/2  z-30 absolute text-white top-[70%] transition duration-300 ease-in-out`}
              style={{ opacity: `${opacity2}` }}
            >
              빠르게 배우는
            </div>
            <div
              className={`text-[3.5vw] left-1/2  transform -translate-x-1/2  z-30 absolute text-white top-[80%] transition duration-300 ease-in-out`}
              style={{ opacity: `${opacity3}` }}
            >
              꾸준히 학습하는
            </div>
            <div
              className="z-30 text-[10vw] absolute text-white top-[120%] "
              style={{
                left: `${left}`,
                transitionDuration: `${transitionDuration}`,
                textShadow: `${bgs}`,
              }}
            >
              FRONT-END
            </div>
            <div
              className="z-30 text-[10vw] absolute border-white border-3 top-[140%] right-0"
              style={{
                color: "transparent",
                WebkitTextStroke: "0.2rem #fff",
                padding: "2rem",
              }}
            >
              김예은입니다.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
