import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {SiLinkedin} from 'react-icons/si'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClink = () =>{
        setNav(!nav)
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#092042] text-gray-300'>
            <div className="">
                <img src={logo}  alt="portfolio-logo" style={{width:'250px'}}/>
            </div>
                <ul className='md:flex hidden gap-9'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
         

            <div onClick={handleClink} className="md:hidden z-10 ">
              {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full bg-[#051d41] h-screen flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
            <div className="hidden md:flex fixed flex-col top-[35%] left-0">
                <ul className='px-8'>
                    <li className='w-[150px] h-[60px] flex justify-center ml-[-110px]  hover:ml-[20px] duration-300 bg-black hover:rounded-full'>
                        <a className='flex justify-between items-center  text-gray-300 ' 
                        href="">
                           Github <FaGithub className='ml-8'  size={35}></FaGithub>
                        </a>
                    </li>    
                 
                    <li className='w-[150px] h-[60px] flex justify-center ml-[-110px]   hover:ml-[20px] duration-300 hover:rounded-full bg-[#24549b]'>
                        <a className='flex justify-between items-center  text-gray-300 hover:rounded-full' 
                        href="">
                           Linkedin <SiLinkedin className='ml-6'  size={35}></SiLinkedin>
                        </a>
                    </li>    
                 
                    <li className='w-[150px] h-[60px] flex justify-center ml-[-110px] hover:ml-[20px] duration-300 bg-green-500 hover:rounded-full'>
                        <a className='flex justify-between items-center  text-gray-300 ' 
                        href="">
                           Email <MdEmail className='ml-11'  size={35}></MdEmail>
                        </a>
                    </li>    
                 
                    <li className='w-[150px] h-[60px] flex justify-center ml-[-110px]  hover:ml-[20px] duration-300 bg-red-400 hover:rounded-full'>
                        <a className='flex justify-between items-center  text-gray-300 ' 
                        href="">
                           Resume <BsFillPersonLinesFill className='ml-7'  size={35}></BsFillPersonLinesFill>
                        </a>
                    </li>    
                 
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;