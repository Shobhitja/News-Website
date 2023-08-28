

import { PiBird } from 'react-icons/pi'
import React, { useState } from 'react'
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxCross1 } from 'react-icons/rx'

const Navbar = () => {
    const [isToggled, setIsToggled] = useState(false)


    const toggleHandler = () => {
        setIsToggled(prevState => !prevState);
    };

    return <>
        <div className='sticky top-0 z-50  bg-[#0dddce]  px-4 flex flex-row w-full  h-auto justify-between items-center p-2 '>
            <div className='flex gap-3 items-center'>
                <PiBird className='text-2xl md:text-4xl text-gray' />
                <Link href="/"><span className=' text-xl md:text-2xl font-bold '>Early Bird News</span></Link>
            </div>


            <nav className={` w-[100%] md:w-auto h-[30rem] md:h-fit  absolute  md:static  left-0  top-[2.8rem] transition-all ease-in duration-[400ms]  ${isToggled ? "block" : "left-[-100%]"}  `}>

                <ul className='text-lg flex flex-col md:flex-row gap-8 md:gap-4 text-black font-semibold bg-teal-400  md:bg-inherit items-center justify-center h-full bg-opacity-90'>
                    <li onClick={() => setIsToggled(false)}  ><Link className='hover:text-blue-500' href="/about">About us</Link> </li>
                    <li onClick={() => setIsToggled(false)}><Link className='hover:text-blue-600' href="/entertainment">Entertainment</Link></li>
                    <li onClick={() => setIsToggled(false)} ><Link className='hover:text-blue-600' href="/business">Business</Link></li>
                    <li onClick={() => setIsToggled(false)} ><Link className='hover:text-blue-600' href="/health">Health</Link></li>
                    <li onClick={() => setIsToggled(false)} ><Link className='hover:text-blue-600' href="/science">Science</Link></li>
                    <li onClick={() => setIsToggled(false)} ><Link className='hover:text-blue-600' href="/sports">Sports</Link></li>
                    <li onClick={() => setIsToggled(false)} ><Link className='hover:text-blue-600' href="/technology">Technology</Link></li>

                    <li className='md:hidden' onClick={() => setIsToggled(false)} ><Link className='hover:text-blue-600' href="/signup">Sign Up</Link></li>
                </ul>


            </nav>


            <div className='hidden md:block'>
                <Link className='hover:text-blue-600 ' href="/signup"><span className='font-semibold'>Sign Up</span></Link>
            </div>

            <div className='text-3xl md:text-4xl md:hidden'>
                <div onClick={toggleHandler}>
                    {isToggled ? <RxCross1 /> : <RxHamburgerMenu />}
                </div>
            </div>

        </div >


    </>
}

export default Navbar


// bg - [#e0ffc2]