import React, { useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiFillGithub,
  AiTwotoneSetting,
  AiTwotoneLike,
} from "react-icons/ai";
import { SiFigma } from "react-icons/si";
import useMediaQuery from "../../components/Hooks/useMediaQuery";
import YouTube from "react-youtube";

interface ProjectProps {
  title: string;
  content: string;
  figma: string;
  github: string;
  develop: string[];
  learn: string[];
  videoUrl: string;
  onClose: () => void;
}

function ProjectModal({
  title,
  content,
  videoUrl,
  figma,
  github,
  develop,
  learn,
  onClose,
}: ProjectProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  //뷰포트 크기에 맞춰 유튜브 영상 크기 조절
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 유튜브 영상 링크 처리
  const extractVideoId = (videoUrl: string) => {
    const regExp =
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\/\?v=|embed\/|v\/|youtu\.be\/|\/v\/|watch\?v=|ytscreeningroom\?v=|\/embed\/|watch\?v%3D|%2Fv%2F|e\/|embed\/|v=|v%3D|ytscreeningroom\?v%3D|watch\?v%3D|youtu\.be\/)([^#\&\?\n]+)/;
    const match = videoUrl.match(regExp);
    return match && match[1] ? match[1] : undefined;
  };
  const videoId = extractVideoId(videoUrl);
  // 유튜브 영상 사이즈 조정
  const opts = {
    height: "320",
    width: "530",
    playerVars: {
      origin: window.location.origin, // 현재 origin 값을 설정합니다.
    },
  };
  const mopts = {
    height: "230",
    width: "330",
    playerVars: {
      origin: window.location.origin, // 현재 origin 값을 설정합니다.
    },
  };

  // 뷰포트의 너비에 따라 영상 크기를 동적으로 결정합니다.
  const getVideoOpts = () => {
    if (viewportWidth >= 1658) {
      return {
        height: "450",
        width: "600",
        playerVars: {
          origin: window.location.origin,
        },
      };
    } else if (viewportWidth >= 1492) {
      return {
        height: "300",
        width: "480",
        playerVars: {
          origin: window.location.origin,
        },
      };
    } else if (viewportWidth >= 798) {
      return {
        height: "220",
        width: "380",
        playerVars: {
          origin: window.location.origin,
        },
      };
    }
  };

  // 영상 크기 설정을 위해 동적으로 옵션을 받아옵니다.
  const videoOpts = getVideoOpts();
  return (
    <div>
      {isMobile ? (
        <div
          className="fixed z-30 top-0 left-0 w-[100vw] h-[100vh] flex justify-center	items-center"
          style={{ backgroundColor: "rgba(0,0,0, 0.5)" }}
        >
          <div className="flex flex-col justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fdfdfd] items-center w-[90%] max-h-[70%] text-center rounded-[.4rem] py-[2rem]">
            <div className="absolute top-3 right-3">
              <AiOutlineClose
                onClick={onClose}
                className="text-gray-500 text-[1.3rem] cursor-pointer"
              />
            </div>
            <div className="w-[100%] overflow-y-auto px-2 items-center">
              <div className="mt-2 w-full ">
                <YouTube videoId={videoId} opts={mopts} />
              </div>
              <div className="pr-5 mt-10 mx-2">
                <p className="text-[1.5rem] font-NanumNeoEB  mb-4">{title}</p>
                {/* 피그마와 깃허브 */}
                <div className="flex mb-4 justify-center">
                  <div className="flex mr-2 items-center bg-indigo-700 text-white px-[1rem] rounded-full h-[1.9rem]">
                    <AiFillGithub className="text-[1rem]" />
                    <a
                      href={github}
                      target="_blank"
                      className="ml-1 text-[.8rem]"
                    >
                      깃허브
                    </a>
                  </div>
                  <div className="flex mr-2 items-center font-bold  bg-[#e7447b] text-white p-2 rounded-full px-[1rem] h-[1.9rem]">
                    <SiFigma className="text-[1rem]" />
                    <a
                      href={figma}
                      target="_blank"
                      className="ml-1 text-[.8rem]"
                    >
                      피그마
                    </a>
                  </div>
                </div>
                <p className="font-NanumNeoEB text-[.8rem]   mb-4 ">
                  {content}
                </p>
                <div
                  style={{
                    border: "0.3px solid lightgrey",
                    width: "100%",
                    height: "0.3px",
                    marginBottom: "1.7rem",
                    opacity: 0.3,
                  }}
                ></div>

                <div className="text-left mb-10">
                  {/* 구현기능 */}
                  <div className="mb-4">
                    <div className="flex items-center font-NanumNeoEB text-[1.1rem] mb-2">
                      <AiTwotoneSetting />
                      <p className="ml-1">담당 구현 기능</p>
                    </div>
                    <ul className="font-NanumNeo text-[.8rem]">
                      {develop.map((item, index) => (
                        <li key={index} className="mb-2">
                          - {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* 배운점 */}
                  <div>
                    <div className="flex  items-center font-NanumNeoEB text-[1.1rem] mb-2">
                      <AiTwotoneLike />
                      <span className="ml-1">배운 점</span>
                    </div>
                    <ul className="font-NanumNeo text-[.8rem]">
                      {learn.map((item, index) => (
                        <li key={index} className="mb-2">
                          - {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="fixed z-30 top-0 left-0 w-[100vw] h-[100vh] flex justify-center	items-center"
          style={{ backgroundColor: "rgba(0,0,0, 0.5)" }}
        >
          <div className="flex flex-col justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fdfdfd] items-center w-[80%] max-h-[70%] text-center rounded-[.4rem] py-[2rem]">
            <div className="absolute top-4 right-10">
              <AiOutlineClose
                onClick={onClose}
                className="text-gray-500 text-[2vw] cursor-pointer"
              />
            </div>
            <div className="grid grid-cols-2 w-[100%] overflow-y-auto px-10 items-center">
              <div className=" w-full ml-[3vw]">
                <YouTube videoId={videoId} opts={videoOpts} />
              </div>
              <div className="pr-5 mt-10 mx-10">
                <p className="text-[1.5vw] font-NanumNeoEB  mb-4">{title}</p>
                {/* 피그마와 깃허브 */}
                <div className="flex mb-4 justify-center">
                  <div className="flex mr-2 items-center text-indigo-700 border-2 font-bold border-indigo-700 hover:bg-indigo-700  hover:text-white p-2 rounded-full">
                    <AiFillGithub className="text-[1vw]" />
                    <a
                      href={github}
                      target="_blank"
                      className="ml-1 text-[1vw]"
                    >
                      깃허브 바로가기
                    </a>
                  </div>
                  <div className="flex mr-2 items-center text-[#e7447b] border-2 font-bold border-[#e7447b] hover:bg-[#e7447b] hover:text-white p-2 rounded-full">
                    <SiFigma className="text-[1vw]" />
                    <a href={figma} target="_blank" className="ml-1 text-[1vw]">
                      피그마 바로가기
                    </a>
                  </div>
                </div>
                <p className="font-NanumNeo text-[.9vw] font-bold  mb-4 ">
                  {content}
                </p>
                <div
                  style={{
                    border: "0.3px solid lightgrey",
                    width: "100%",
                    height: "0.3px",
                    marginBottom: "1.7rem",
                    opacity: 0.3,
                  }}
                ></div>

                <div className="text-left mb-10">
                  {/* 구현기능 */}
                  <div className="mb-4">
                    <div className="flex items-center font-NanumNeoEB text-[1.1rem] mb-2">
                      <AiTwotoneSetting />
                      <p className="ml-1 text-[1.2vw]">담당 구현 기능</p>
                    </div>
                    <ul className="font-NanumNeo text-[.9vw]">
                      {develop.map((item, index) => (
                        <li key={index} className="mb-2">
                          - {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* 배운점 */}
                  <div>
                    <div className="flex  items-center font-NanumNeoEB text-[1.2vw] mb-2">
                      <AiTwotoneLike />
                      <span className="ml-1">배운 점</span>
                    </div>
                    <ul className="font-NanumNeo text-[.9vw]">
                      {learn.map((item, index) => (
                        <li key={index} className="mb-2">
                          - {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectModal;
