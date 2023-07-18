import React, { CSSProperties } from 'react';
import '../Button/ButtonTag';
import ButtonTag from '../Button/ButtonTag';

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

function ProjectCard({ style, image, title, role, contribution, people, duration, onClick, lag }: CardProps) {
  return (
    <div
      className="bg-[#ffffff52] p-8 rounded-3xl w-[23rem] h-[35rem] cursor-pointer "
      onClick={onClick}
      style={{
        // border: 'solid 2px white',
        backdropFilter: 'blur(12px)',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.transform = '';
      }}
    >
      <div className="mb-5">
        <img src={image} alt="alt" className="rounded-xl h-[11rem]" style={{ boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)' }} />
      </div>
      {/* 프로젝트 제목 */}
      <p className="font-NanumNeoEB text-violet text-[2rem] text-center ">{title}</p>
      <p className=" text-[#3c0c58cc] text-center ">{duration}</p>
      {/* 역할과 기여도 */}
      <div
        className="grid grid-cols-2  text-violet px-6 py-2 text-[1rem] text-center rounded-full mt-5 "
        style={{
          border: 'solid 1px #3c0c58cc',
        }}
      >
        <div>
          <p className="font-NanumNeoEB">{role}</p>

          <p>{contribution}</p>
        </div>
        <div>
          <p className="font-NanumNeoEB">개발인원</p>
          <span className="text-[.9rem]">{people}</span>
        </div>
      </div>
      <div className="flex mt-5 ">
        {lag.map((value, index) => (
          <ButtonTag key={index} innerValue={value} />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
