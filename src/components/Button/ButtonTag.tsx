import React from "react";
import useMediaQuery from "../../components/Hooks/useMediaQuery";

function ButtonTag({ innerValue }: ButtonProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      {isMobile ? (
        <div
          className="flex justify-center items-center rounded-full mt-5 mr-2 px-[2vw] py-[.5vh]  font-Pre bg-violet text-white text-center"
          style={{
            flexWrap: "wrap",
          }}
        >
          <p className="text-[.6rem]">{innerValue}</p>
        </div>
      ) : (
        <div
          className="flex justify-center items-center rounded-full mt-5 mr-2 px-[.5vw] py-[.5vh]  font-Pre bg-violet text-white text-center"
          style={{
            flexWrap: "wrap",
          }}
        >
          <p className="text-[.7vw]">{innerValue}</p>
        </div>
      )}
    </div>
  );
}

export default ButtonTag;
