import React from 'react';
import { Link , useLocation } from 'react-router-dom';
import {AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen} from 'react-icons/ai'
import useMediaQuery from '../../components/Hooks/useMediaQuery';

function Navbar() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const location = useLocation();
  const currentPath = location.pathname;

  return (

    <div>
      {isMobile ? 
      <div >
        <nav className="fixed bottom-0 z-40 w-[100vw]  bg-black" >
          <ul className="grid grid-cols-3 text-center font-NanumNeoLt py-[1vh]  text-[.7rem] h-[3.7rem] mx-3">
            <Link to="/"className={` ${currentPath === '/' ? 'text-white' : 'text-[#ffffff8c]'}`}>
                <AiOutlineHome className="text-[5vw] w-[31vw] mb-1" />
              <p>HOME</p>
            </Link>
            <Link to="/profile"className={`text-[#ffffff8c] ${currentPath === '/profile' ? 'text-white' : 'text-[#ffffff8c]'}`}>
              <AiOutlineUser className="text-[5vw] w-[31vw] mb-1 "/>
              <p>PROFILE</p>
            </Link>
            <Link to="/project"className={`text-[#ffffff8c] ${currentPath === '/project' ? 'text-white' : 'text-[#ffffff8c]'}`}>
              <AiOutlineFolderOpen className="text-[5vw] w-[31vw] mb-1 "/>
              <p>PROJECT</p>
            </Link>
          </ul>
        </nav>
      </div> 
      
      : 
      
      <div>
        <nav className='fixed mx-[3.75rem] p-3 py-8 top-0 right-10 z-30 w-full"'>
          <ul className="flex space-x-[2.3rem] font-PreB text-[18px] h-[4rem]">
            <li className={`${currentPath === '/' ? 'text-white' : 'text-[#ffffff8c]'} hover:text-white $`}>
              <Link to="/">HOME</Link>
            </li>
            <li className={`${currentPath === '/profile' ? 'text-white' : 'text-[#ffffff8c]'} hover:text-white $`}>
              <Link to="/profile">PROFILE</Link>
            </li>
            <li className={`${currentPath === '/project' ? 'text-white' : 'text-[#ffffff8c]'} hover:text-white $`}>              <Link to="/project">PROJECT</Link>
            </li>
          </ul>
        </nav>
      </div> 
      }
    </div>
  );
}

export default Navbar;
