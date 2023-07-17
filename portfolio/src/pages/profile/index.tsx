import React, { useState } from 'react';
import styles from './profile.module.css';
import ButtonTag from '@/components/Button/ButtonTag';

interface PhotoProp {
  index: number;
  image: string;
}

function page() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [imageURL, setImageURL] = useState<string>('/image/gallery.png');
  const handleItemClick = ({ index, image }: PhotoProp) => {
    setSelectedItem(index);
    setImageURL(image);
  };

  return (
    <div className="flex h-full w-auto ">
      <img src="/image/background.jpg" alt="bg" className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="grid grid-cols-5 mx-10 mt-[5rem] gap-10">
        <div
          className="relative w-full h-[34.1rem] z-10  mt-[8rem] bg-[#ffffffd3] px-10 py-10 rounded-3xl "
          style={{
            backdropFilter: 'blur(12px)',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <img src={imageURL} alt="" className="w-full h-full object-contain" />
        </div>
        {/* content */}
        <div className="grid grid-cols-2 col-span-4">
          {/* left */}
          <div
            className="relative h-[34.1rem] z-10 mt-[8rem] bg-[#ffffffd3] px-10 py-10 mr-10 rounded-3xl "
            style={{
              backdropFilter: 'blur(12px)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/*  */}
            <div className="mb-10">
              <p className={`${styles.semititle}`}>교육</p>
              <p className={`${styles.element} font-NanumNeo text-[1.4rem] mt-3 hover:font-bold hover:cursor-pointer`} onClick={() => handleItemClick({ index: 1, image: '/image/ssafy.jpg' })}>
                삼성 청년 SW 아카데미 8기 수료
              </p>
            </div>
            {/*  */}
            <div className="mb-10">
              <p className={`${styles.semititle}`}>경력</p>
              <div className="mt-3">
                <div className="mb-3">
                  <p className={`${styles.element} text-[1.4rem] font-NanumNeo hover:font-bold hover:cursor-pointer`} onClick={() => handleItemClick({ index: 2, image: '/image/itcho.png' })}>
                    IT조선 편집기자 인턴
                  </p>
                  <p className="text-[1rem] font-NanumNeo ">웹 디자인 및 웹 기획</p>
                </div>
                <p className={`${styles.element} text-[1.4rem] font-NanumNeo hover:font-bold hover:cursor-pointer`} onClick={() => handleItemClick({ index: 3, image: '/image/ebs.png' })}>
                  EBS 홍보부 계약직
                </p>
                <p className="text-[1rem] font-NanumNeo ">사내/외 홍보 콘텐츠 기획 및 제작</p>
              </div>
            </div>
            {/* 수상 */}
            <div className="mb-10">
              <p className={`${styles.semititle}`}>수상</p>
              <p className={`${styles.element} mt-3 text-[1.4rem] font-NanumNeo hover:font-bold hover:cursor-pointer`} onClick={() => handleItemClick({ index: 4, image: '/image/reward.jpg' })}>
                삼성 청년 SW 아카데미 자율 프로젝트 우수상
              </p>
            </div>
          </div>
          {/* right */}
          <div
            className="relative  z-10 m-auto mt-[8rem] bg-[#ffffffd3] px-10 py-10 rounded-3xl "
            style={{
              backdropFilter: 'blur(12px)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p className={`${styles.semititle}`}> 프로그래밍 역량 </p>
            <div className="grid grid-cols-2 mt-3">
              <div className="mb-3">
                <div className="flex items-center mb-2">
                  <img src="/image/js.png" alt="bg" className="w-7 h-7 mr-1" />
                  <span className="text-[1.2rem] mr-2 font-bold"> JavaScript</span>
                  <span className="text-[1.2rem] text-blue"> ■ ■ ■ □ □</span>
                </div>
                <ul>
                  <li> - ES6+이해 및 활용해 소규모 프로젝트 진행</li>
                  <li> - JS기반 프레임워크와 라이브러리 사용 가능</li>
                </ul>
              </div>
              <div className="mb-3">
                <div className="flex items-center mb-2">
                  <img src="/image/ts.png" alt="bg" className="w-7 h-7 mr-1" />
                  <span className="text-[1.2rem] mr-2 font-bold"> TypeScript</span>
                  <span className="text-[1.2rem] text-blue"> ■ ■ ■ □ □</span>
                </div>
                <ul>
                  <li> - 구조 이해를 통한 서비스 기능 구현, 모듈 응용 가능</li>
                  <li> - 프로젝트 및 서비스 개발 경험 보유</li>
                </ul>
              </div>
              <div className="mb-3">
                <div className="flex items-center mb-2">
                  <img src="/image/react.png" alt="bg" className="w-7 h-7 mr-1" />
                  <span className="text-[1.2rem] mr-2 font-bold"> React</span>
                  <span className="text-[1.2rem] text-blue"> ■ ■ ■ □ □</span>
                </div>
                <ul>
                  <li> - Recoil기반 운영/기능 업데이트 개발 가능</li>
                  <li> - 서비스 환경에 맞는 최적화 코드 구현</li>
                </ul>
              </div>
              <div className="mb-3">
                <div className="flex items-center mb-2">
                  <img src="/image/python.png" alt="bg" className="w-7 h-7 mr-1" />
                  <span className="text-[1.2rem] mr-2 font-bold"> Python</span>
                  <span className="text-[1.2rem] text-blue"> ■ ■ □ □ □</span>
                </div>
                <ul>
                  <li> - 구조이해를 통한 기본 기능 구현</li>
                  <li> - 코드 분석 및 이슈 디버깅 </li>
                </ul>
              </div>
              <div className="mb-3">
                <div className="flex items-center mb-2">
                  <img src="/image/html.png" alt="bg" className="w-7 h-7 mr-1" />
                  <span className="text-[1.2rem] mr-2 font-bold"> HTML/CSS</span>
                  <span className="text-[1.2rem] text-blue"> ■ ■ ■ □ □</span>
                </div>
                <ul>
                  <li> - 웹 표준과 접근성 준수 </li>
                  <li> - 반응형 웹 디자인 개발 경험</li>
                </ul>
              </div>
              <div className="mb-3">
                <div className="flex items-center mb-2">
                  <img src="/image/next.png" alt="bg" className="w-7 h-7 mr-1" />
                  <span className="text-[1.2rem] mr-2 font-bold"> Next.js</span>
                  <span className="text-[1.2rem] text-blue"> ■ ■ □ □ □</span>
                </div>
                <ul>
                  <li> - 서버 사이드 렌더링(SSR) 이해 </li>
                  <li> - 구조 이해를 통핸 개발 경험</li>
                </ul>
              </div>
            </div>
            <p className={`${styles.semititle} mt-7`}> 기타 사용 Tool </p>
            <div className="flex mt-3">
              <ButtonTag innerValue="MySQL" />
              <ButtonTag innerValue="Jira" />
              <ButtonTag innerValue="GitLab" />
              <ButtonTag innerValue="Figma" />
              <ButtonTag innerValue="Blender" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
