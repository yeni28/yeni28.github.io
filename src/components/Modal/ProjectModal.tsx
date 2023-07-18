import React from 'react';
import { AiOutlineClose, AiFillGithub, AiTwotoneSetting, AiTwotoneLike } from 'react-icons/ai';
import { SiFigma } from 'react-icons/si';

import YouTube from 'react-youtube';

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

function ProjectModal({ title, content, videoUrl, figma, github, develop, learn, onClose }: ProjectProps) {
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
    height: '390',
    width: '640',
    playerVars: {
      origin: window.location.origin, // 현재 origin 값을 설정합니다.
    },
  };

  return (
    <div className="fixed z-30 top-0 left-0 w-[100vw] h-[100vh] flex justify-center	items-center" style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }}>
      <div className="flex flex-col justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fdfdfd] items-center w-[70%] max-h-[70%] text-center rounded-[.4rem] py-[2rem]">
        <div className="absolute top-4 right-10">
          <AiOutlineClose onClick={onClose} className="text-gray-500 text-[2rem] cursor-pointer" />
        </div>
        <div className="grid grid-cols-2 w-[100%] overflow-y-auto px-10 items-center">
          <div className="mt-5 w-full ">
            <YouTube videoId={videoId} opts={opts} />
          </div>
          <div className="pr-5 mt-10 mx-10">
            <p className="text-[1.5rem] font-NanumNeoEB  mb-4">{title}</p>
            {/* 피그마와 깃허브 */}
            <div className="flex mb-4 justify-center">
              <div className="flex mr-2 items-center text-indigo-700 border-2 font-bold border-indigo-700 hover:bg-indigo-700  hover:text-white p-2 rounded-full">
                <AiFillGithub className="text-[1.2rem]" />
                <a href={github} target="_blank" className="ml-1">
                  깃허브 바로가기
                </a>
              </div>
              <div className="flex mr-2 items-center text-[#e7447b] border-2 font-bold border-[#e7447b] hover:bg-[#e7447b] hover:text-white p-2 rounded-full">
                <SiFigma className="text-[1.2rem]" />
                <a href={figma} target="_blank" className="ml-1">
                  피그마 바로가기
                </a>
              </div>
            </div>
            <p className="font-NanumNeo text-[1rem] font-bold  mb-4 ">{content}</p>
            <div style={{ border: '0.3px solid lightgrey', width: '100%', height: '0.3px', marginBottom: '1.7rem', opacity: 0.3 }}></div>

            <div className="text-left mb-10">
              {/* 구현기능 */}
              <div className="mb-4">
                <div className="flex items-center font-NanumNeoEB text-[1.1rem] mb-2">
                  <AiTwotoneSetting />
                  <p className="ml-1">담당 구현 기능</p>
                </div>
                <ul className="font-NanumNeo text-[.9rem]">
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
                <ul className="font-NanumNeo text-[.9rem]">
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

        {/* <div className="w-full h-full flex flex-col justify-center items-center">
             
                </div> */}
      </div>
    </div>
  );
}

export default ProjectModal;
