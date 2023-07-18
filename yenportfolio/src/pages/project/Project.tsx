import ProjectCard from '../../components/Card/ProjectCard';
import React, { useState } from 'react';
import ProjectModal from '../../components/Modal/ProjectModal';

interface ProjectProps {
  title: string;
  content: string;
  figma: string;
  github: string;
  develop: string[];
  learn: string[];
  videoUrl: string;
}

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', content: '', videoUrl: '', figma: '', github: '', develop: [] as string[], learn: [] as string[] });

  const openModal = (data: ProjectProps) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-black w-screen h-screen flex items-center justify-center relative">
      <img src='/Image/background1.jpg' alt="bg" className="absolute top-0 left-0 w-full h-full object-cover opacity-90" />
      <p className="absolute top-20 left-1/2 z-30  transform -translate-x-1/2 text-violet text-[1.2rem]"> 클릭하면 프로젝트 상세보기가 가능합니다. </p>
      <div className="grid grid-cols-3 gap-[7rem] relative z-10">
        <ProjectCard
          image="/Image/pjt1.png"
          title="씨유어게인"
          role="프론트엔드"
          contribution="30%"
          people="FE(3) BE(3)"
          duration="2023.04.10 ~ 2023.05.19"
          onClick={() =>
            openModal({
              title: '씨유어게인',
              content: '안전 거래 장소 추천과 상호 실시간 위치정보 확인을 통해 이용자간 안전 거래를 돕는 동네 대여 서비스 플랫폼',
              videoUrl: 'https://www.youtube.com/watch?v=Z-crKDgZrnU',
              figma: 'https://www.figma.com/file/Qyz0VyiZuiHK36oeqInElB/%EB%8B%A4%EC%8B%9C%EB%A7%8C%EB%82%AC%EC%A1%B0?type=design&node-id=0%3A1&mode=design&t=lNPAjYap0hO7Fe5U-1',
              github: 'https://github.com/yeni28/SeeYouAgain',
              develop: ['게시글 CRUD', 'Next.js와 PWA 적용', '안전거래 장소 데이터 시각화'],
              learn: [
                'Next.js의 hydration오류 해결로 SSR에 대한 이해를 높였습니다.',
                'PWA를 적용하며 lighthouse를 활용해 성능과 보안을 확인할 수 있었습니다.',
                '데이터 시각화 UI를 개선하며 사용자 관점 UX/UI에 대한 이해를 높였습니다.',
              ],
            })
          }
          lag={['React', 'TypeScript', 'Next.js', 'PWA']}
        />
        <ProjectCard
          image="/Image/pjt2.png"
          title="팅크"
          role="프론트엔드"
          contribution="30%"
          people="FE(3) BE(3)"
          duration="2023.02.27 ~ 2023.04.07"
          onClick={() =>
            openModal({
              title: 'Tink',
              content: '뜨개질 과정을 3D로 볼 수 있고, 도안 사이트의 빅데이터를 통해 색상, 실정보, 키워드를 기준으로 도안을 추천해주는 뜨개 사이트',
              videoUrl: 'https://www.youtube.com/watch?v=8p5PYxKrEoE',
              figma: 'https://www.figma.com/file/x50c9FDAEuH6kPKLP9OO85/Tink?type=design&node-id=23%3A2&mode=design&t=lNPAjYap0hO7Fe5U-1',
              github: 'https://github.com/yeni28/Tink',
              develop: ['게시글 CRUD', '스크롤 애니메이션 적용', 'three.js 일부 적용 및 3D 모델 제작', '아토믹 디자인 적용'],
              learn: [
                '아토믹 디자인을 활용해 컴포넌트의 재사용성을 높이고 효율적으로 개발했습니다.',
                'Three.js를 활용해 interactive Design web을 구현해 볼 수 있었습니다.',
                'axios Instance를 활용해 리팩토링을 진행했습니다.',
              ],
            })
          }
          lag={['React', 'TypeScript', 'Three.js']}
        />
        <ProjectCard
          image="/Image/pjt3.png"
          title="플랜토"
          role="프론트엔드"
          contribution="100%"
          people="FE(1) BE(2) EMB(3)"
          duration="2023.01.10 ~ 2023.02.16"
          onClick={() =>
            openModal({
              title: '플랜토',
              content: '센서데이터를 통해 식물의 상태를 웹 및 표정으로 확인할 수 있고, 상호작용을 통해 꾸준히 반려식물을 돌볼 수 있도록 돕는 스마트 IoT화분',
              videoUrl: 'https://www.youtube.com/watch?v=PGoaQIW4X2A',
              figma: 'https://www.figma.com/file/jU9iF1VTgfSYqSWjvSn0Ox/%ED%94%8C%EB%9E%9C%ED%86%A0?type=design&node-id=0%3A1&mode=design&t=lNPAjYap0hO7Fe5U-1',
              github: 'https://github.com/yeni28/Planto',
              develop: ['외부 api활용 식물 육성정보 제공 및 상태 확인', '센서 데이터 시각화', 'QR코드 등록', '소셜로그인', '전역 상태관리'],
              learn: [
                'A부터 Z까지 프론트엔드의 전 과정을 혼자 맡아서 진행해 기술적으로 성장했습니다.',
                '임베디드, 백엔드와 협업하며 가독성 높고 통일성 있는 코드를 작성했습니다.',
                'react 서버를 통한 배포는 2초 이상 소요되었지만 nginx 빌드를 통해 배포 속도가 0.7초로 배포 방법에 따른 속도 개선을 경험하고 이해했습니다.',
              ],
            })
          }
          lag={['React', 'JavaScript', 'Recoil']}
        />
      </div>
      {isModalOpen && (
        <ProjectModal
          title={modalData.title}
          content={modalData.content}
          videoUrl={modalData.videoUrl}
          figma={modalData.figma}
          github={modalData.github}
          develop={modalData.develop}
          learn={modalData.learn}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Project;
