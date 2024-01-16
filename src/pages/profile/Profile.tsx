import React, { useState } from 'react';
import useHistory from 'react-router-dom'
import styles from './profile.module.css';
import ButtonTag from '../../components/Button/ButtonTag';
import useMediaQuery from '../../components/Hooks/useMediaQuery';
import {AiOutlineZoomIn} from 'react-icons/ai';

interface PhotoProp {
  index: number;
  image: string;
}

function Profile() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [imageURL, setImageURL] = useState<string>('/Image/gallery.png');
  const handleItemClick = ({ index, image }: PhotoProp) => {
    setSelectedItem(index);
    setImageURL(image);
  };
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleImageClick = () => {
    if (selectedItem) {
      setIsModalOpen(!isModalOpen);
    }  };


  return (
   <div>
    {isMobile 
      ? 
      <div>
        <img src="/Image/background.jpg" alt="bg" className="absolute top-0 left-0 w-full h-[170vh] object-cover" />
        <div className='absolute  '>
          <div className='bg-[#ffffffd3] overflow-y-auto w-[80%] z-30 mx-[11vw] p-4 rounded-2xl mt-[10vh]'>
          <p className="font-PreB text-blue text-[1.3rem] text-center"> 프로그래밍 역량 </p>
                <div className=" mt-8">
                  <div className="mb-3">
                    <div className="flex items-center mb-2">
                      <img src="/Image/js.png" alt="bg" className="w-6 h-6 mr-1" />
                      <span className="text-[1rem] mr-2 font-PreB"> JavaScript</span>
                      <span className="text-[.8rem] text-blue"> ■ ■ ■ □ □</span>
                    </div>
                    <ul className='text-[.8rem]'>
                      <li> - ES6+이해 및 활용해 소규모 프로젝트 진행</li>
                      <li> - JS기반 프레임워크와 라이브러리 사용 가능</li>
                    </ul>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center mb-2">
                      <img src="/Image/ts.png" alt="bg" className="w-6 h-6 mr-1" />
                      <span className="text-[1rem] mr-2 font-PreB"> TypeScript</span>
                      <span className="text-[.8rem] text-blue"> ■ ■ ■ □ □</span>
                    </div>
                    <ul className='text-[.8rem]'>
                      <li> - 구조 이해를 통한 서비스 기능 구현, 모듈 응용 가능</li>
                      <li> - 프로젝트 및 서비스 개발 경험 보유</li>
                    </ul>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center mb-2">
                      <img src="/Image/react.png" alt="bg" className="w-6 h-6 mr-1" />
                      <span className="text-[1rem] mr-2 font-PreB"> React</span>
                      <span className="text-[.8rem] text-blue"> ■ ■ ■ □ □</span>
                    </div>
                    <ul className='text-[.8rem]'>
                      <li> - Recoil기반 운영/기능 업데이트 개발 가능</li>
                      <li> - 서비스 환경에 맞는 최적화 코드 구현</li>
                    </ul>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center mb-2">
                      <img src="/Image/python.png" alt="bg" className="w-6 h-6 mr-1" />
                      <span className="text-[1rem] mr-2 font-PreB"> Python</span>
                      <span className="text-[.8rem] text-blue"> ■ ■ □ □ □</span>
                    </div>
                    <ul className='text-[.8rem]'>
                      <li> - 구조이해를 통한 기본 기능 구현</li>
                      <li> - 코드 분석 및 이슈 디버깅 </li>
                    </ul>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center mb-2">
                      <img src="/Image/html.png" alt="bg" className="w-6 h-6 mr-1" />
                      <span className="text-[1rem] mr-2 font-PreB"> HTML/CSS</span>
                      <span className="text-[.8rem] text-blue"> ■ ■ ■ □ □</span>
                    </div>
                    <ul className='text-[.8rem]'>
                      <li> - 웹 표준과 접근성 준수 </li>
                      <li> - 반응형 웹 디자인 개발 경험</li>
                    </ul>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center mb-2">
                      <img src="/Image/next.png" alt="bg" className="w-6 h-6 mr-1" />
                      <span className="text-[1rem] mr-2 font-PreB"> Next.js</span>
                      <span className="text-[.8rem] text-blue"> ■ ■ □ □ □</span>
                    </div>
                    <ul className='text-[.8rem]'>
                      <li> - 서버 사이드 렌더링(SSR) 이해 </li>
                      <li> - 구조 이해를 통핸 개발 경험</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='bg-[#ffffffd3] absolute w-[80%] z-30 mx-[11vw] p-4 rounded-2xl mt-[5vh] '>
              <div className="mb-3">
                <p className="text-[1.3rem] font-NanumNeoEB text-blue text-center">교육</p>
                <p className={`${styles.element} font-NanumNeoEB text-[.8rem] mt-3 hover:font-bold hover:cursor-pointer`} onClick={() => handleItemClick({ index: 1, image: '/Image/ssafy.jpg' })}>
                  삼성 청년 SW 아카데미 8기 수료
                </p>
                <p className='text-[.6rem]'>2022.07 ~ 2023.06</p>
              </div>
              {/*  */}
              <div className="mb-3">
                <p className="text-[1.3rem] font-NanumNeoEB text-blue text-center">경력</p>
                <div className="mt-3">
                  <div className="mb-3">
                    <p className={`${styles.element} text-[.8rem] font-NanumNeoEB hover:font-bold hover:cursor-pointer`} onClick={() => handleItemClick({ index: 2, image: '/Image/itcho.png' })}>
                      IT조선 편집기자 인턴
                
                    </p>
                    <span className='text-[.6rem] ml-2'>2021.01 ~ 2021.04</span>
                    <p className="text-[.7rem] font-NanumNeo ">웹 디자인 및 웹 기획</p>
                    
                  </div>
                </div>
              </div>
              {/* 수상 */}
              <div className="mb-3">
                <p className="text-[1.3rem] font-NanumNeoEB text-blue text-center">수상</p>
                <p className={`${styles.element} mt-3 text-[.8rem] font-NanumNeoEB hover:font-bold hover:cursor-pointer`} onClick={() => handleItemClick({ index: 3, image: '/Image/reward.jpg' })}>
                  삼성 청년 SW 아카데미 자율 프로젝트 우수상
                </p>
              </div>
              </div>
        </div>
      </div>
      :
      <div className="flex h-full w-auto ">
         {isModalOpen && 
        <div className='absolute bg-[#00000011] top-[9vh] left-1/2 transform -translate-x-1/2 z-50'>
        <p className='absolute  text-[1.2rem] bg-blue right-0 rounded-2xl w-[4vw] text-center text-white' onClick={handleImageClick}>닫기</p>
        <img src={imageURL} alt="" className="mt-10 z-60 w-[110%] h-[43rem] rounded-2xl shadow-2xl" onClick={handleImageClick}/>
         </div> 
         }
        <img src="/Image/background.jpg" alt="bg" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="grid grid-cols-5 mx-10 mt-[5rem] gap-10">
          {/* picture */}
          <div
            className="relative w-full h-[34.1rem] z-10  mt-[8rem] bg-[#ffffffd3] px-10 py-10 rounded-3xl "
            style={{
              backdropFilter: 'blur(12px)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
          
            <img src={imageURL} alt="" className=" object-contain cursor-pointer" onClick={handleImageClick}/>
            {selectedItem ? 
              <div className='text-center cursor-pointer ' onClick={handleImageClick}>
                <AiOutlineZoomIn className='text-[2rem] m-auto mt-5 mb-2'/>
                <p>클릭해서 크게보기</p>
              </div>
            :
              <div className='text-center mt-8 '>
                <p>교육/경력/수상의 소제목을 누르면</p>
                <p>사진을 확인할 수 있습니다.</p>
              </div> 
            }
          </div>
          {/* content */}
          <div className="grid grid-cols-2 col-span-4">
            {/* left */}
            <div
              className="relative h-[35rem] z-10 mt-[8rem] bg-[#ffffffd3] px-10 py-10 mr-10 rounded-3xl "
              style={{
                backdropFilter: 'blur(12px)',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/*  */}
              <div className="mb-10">
                <p className={`${styles.semititle}`}>교육</p>
                <p className={`${styles.element} font-NanumNeo text-[1.4rem] mt-3 hover:font-bold hover:cursor-pointer`} onClick={() => handleItemClick({ index: 1, image: '/Image/ssafy.jpg' })}>
                  삼성 청년 SW 아카데미 8기 수료
                </p>
                <p>2022.07 ~ 2023.06</p>
              </div>
              {/*  */}
              <div className="mb-10">
                <p className={`${styles.semititle}`}>경력</p>
                <div className="mt-3">
                  <div className="mb-3">
                    <p className={`${styles.element} text-[1.4rem] font-NanumNeo hover:font-bold hover:cursor-pointer`} onClick={() => handleItemClick({ index: 2, image: '/Image/itcho.png' })}>
                      IT조선 편집기자 인턴
                
                    </p>
                    <span className='text-sm ml-2'>2021.01 ~ 2021.04</span>
                    <p className="text-[1rem] font-NanumNeo ">웹 디자인 및 웹 기획</p>
                    
                  </div>
                </div>
              </div>
              {/* 수상 */}
              <div className="mb-10">
                <p className={`${styles.semititle}`}>수상</p>
                <p className={`${styles.element} mt-3 text-[1.2rem] font-NanumNeo hover:font-bold hover:cursor-pointer`} onClick={() => handleItemClick({ index: 3, image: '/Image/reward.jpg' })}>
                  삼성 청년 SW 아카데미 자율 프로젝트 우수상 (23.05.26)
                </p>
                <p className={`${styles.element} mt-3 text-[1.2rem] font-NanumNeo hover:font-bold hover:cursor-pointer`} onClick={() => handleItemClick({ index: 4, image: '/Image/posco.jpg' })}>
                  포스코 취업 아카데미 과제수행 창의상(20.11.13)
                </p>
                <p className={`${styles.element} mt-3 text-[1.2rem] font-NanumNeo hover:font-bold hover:cursor-pointer`} onClick={() => handleItemClick({ index: 5, image: '/Image/at.jpg' })}>
                  식품산업 취창업 워크숍 창업 아이디어 최우수상 (17.11.25)
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
                    <img src="/Image/js.png" alt="bg" className="w-7 h-7 mr-1" />
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
                    <img src="/Image/ts.png" alt="bg" className="w-7 h-7 mr-1" />
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
                    <img src="/Image/react.png" alt="bg" className="w-7 h-7 mr-1" />
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
                    <img src="/Image/python.png" alt="bg" className="w-7 h-7 mr-1" />
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
                    <img src="/Image/html.png" alt="bg" className="w-7 h-7 mr-1" />
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
                    <img src="/Image/next.png" alt="bg" className="w-7 h-7 mr-1" />
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
              <div className="flex mt-3 items-center">
                <img src="/Image/mysql.png" alt="bg" className=" h-8 mr-4" />
                <img src="/Image/jira.png" alt="bg" className=" h-10 mr-4" />
                <img src="/Image/gitlab.png" alt="bg" className=" h-5 mr-4" />
                <img src="/Image/figma.png" alt="bg" className=" h-10 mr-4" />
                <img src="/Image/blender.png" alt="bg" className=" h-7 mr-4" />
           
              </div>
            </div>
       
        <div>
        </div>
        </div>
</div>
    </div>
  }
   </div>
  );
}

export default Profile;
