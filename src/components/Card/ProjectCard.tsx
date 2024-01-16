import React, { CSSProperties } from "react";
import "../Button/ButtonTag";
import ButtonTag from "../Button/ButtonTag";
import useMediaQuery from "../../components/Hooks/useMediaQuery";

interface CardProps {
  image: string;
  title: string;
  role: string;
  contribution: string;
  people: string;
  duration: string;
  lag: string[];
  onClick?: () => void;
  style?: CSSProperties;
}

function ProjectCard({
  style,
  image,
  title,
  role,
  contribution,
  people,
  duration,
  onClick,
  lag,
}: CardProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      {isMobile ? (
        <div
          className="bg-[#ffffff56] mx-[12.5vw] mt-7 mb-5 p-8 rounded-3xl ] cursor-pointer "
          onClick={onClick}
          style={{
            // border: 'solid 2px white',
            backdropFilter: "blur(12px)",
            transition: "transform 0.3s, box-shadow 0.3s",
            width: "77vw", // 화면 너비의 80%로 설정
            height: "62vh", // 화면 높이의 70%로 설정
          }}
        >
          <div className="mb-5">
            <img
              src={image}
              alt="alt"
              className="rounded-xl h-[20vh]"
              style={{
                boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          {/* 프로젝트 제목 */}
          <p className="font-NanumNeoEB text-violet text-[6vw] text-center ">
            {title}
          </p>
          <p className=" text-[#3c0c58cc] text-center font-NanumNeo text-[4vw] ">
            {duration}
          </p>
          {/* 역할과 기여도 */}
          <div
            className="grid grid-cols-2  text-violet px-6 py-2 text-[1rem] text-center rounded-full mt-5 "
            style={{
              border: "solid 1px #3c0c58cc",
            }}
          >
            <div>
              <p className="font-NanumNeoEB text-[4.2vw]">{role}</p>
              <p className="font-NanumNeo text-[4.8vw]">{contribution}</p>
            </div>
            <div>
              <p className="font-NanumNeoEB text-[4.2vw]">개발인원</p>
              <span className="text-[3.8vw] font-NanumNeo">{people}</span>
            </div>
          </div>
          <div className="flex flex-wrap mt-1  font-NanumNeo">
            {lag.map((value, index) => (
              <ButtonTag key={index} innerValue={value} />
            ))}
          </div>
        </div>
      ) : (
        <div
          className="bg-[#ffffff52] p-8 rounded-3xl w-[23rem] h-[35rem] cursor-pointer "
          onClick={onClick}
          style={{
            // border: 'solid 2px white',
            backdropFilter: "blur(12px)",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "";
            e.currentTarget.style.transform = "";
          }}
        >
          <div className="mb-5">
            <img
              src={image}
              alt="alt"
              className="rounded-xl h-[11rem]"
              style={{ boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)" }}
            />
          </div>
          {/* 프로젝트 제목 */}
          <p className="font-NanumNeoEB text-violet text-[2rem] text-center ">
            {title}
          </p>
          <p className=" text-[#3c0c58cc] text-center font-NanumNeo">
            {duration}
          </p>
          {/* 역할과 기여도 */}
          <div
            className="grid grid-cols-2  text-violet px-6 py-2 text-[1rem] text-center rounded-full mt-5 "
            style={{
              border: "solid 1px #3c0c58cc",
            }}
          >
            <div>
              <p className="font-NanumNeoEB">{role}</p>

              <p className="font-NanumNeo">{contribution}</p>
            </div>
            <div>
              <p className="font-NanumNeoEB">개발인원</p>
              <span className="text-[.9rem] font-NanumNeo">{people}</span>
            </div>
          </div>
          <div className="flex flex-wrap mt-5  font-NanumNeo">
            {lag.map((value, index) => (
              <ButtonTag key={index} innerValue={value} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
