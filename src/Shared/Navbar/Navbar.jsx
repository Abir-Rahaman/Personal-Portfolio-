import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutLineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClink = () =>{
        setNav(!nav)
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#24549b] text-gray-300'>
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

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full bg-[#24549b] h-screen flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
            <div className="flex fixed flex-col top-[-30px] left-0">
                <ul>
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;