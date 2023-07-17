import React from 'react';
import Link from 'next/link';

function Navbar() {
    return (
        <div>
            <nav className='fixed mx-[3.75rem] p-3 py-8 top-0 right-10 z-30 w-full"'>
                <ul className="flex space-x-[2.3rem] font-PreB text-[18px] h-[4rem]">
                    <li className="text-[#ffffff8c] hover:text-white">
                        <Link href="/">HOME</Link>
                    </li>
                    <li className="text-[#ffffff8c] hover:text-white">
                        <Link href="/profile">PROFILE</Link>
                    </li>
                    <li className="text-[#ffffff8c] hover:text-white">
                        <Link href="/project">PROJECT</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
