import { CiLock } from "react-icons/ci";
import React from "react";
const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-around bg-opacity-90 backdrop-blur-sm border-b border-white" id='nav'>
            <div className="right-part flex-row flex justify-center items-center cursor-pointer" onClick={() => navigate("/")}>
                <CiLock className="text-[#4F4BF9] font-extrabold text-[60px]" />
                <span className="text-white font-sans text-[35px] font-semibold">Krptonites</span>
            </div>

            <div className="middle-part text-white flex gap-8 font-semibold z-50 px-10 ">
                <button className=""  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>Home</button>
                <button className="" onClick={() => document.getElementById('enc')?.scrollIntoView({ behavior: 'smooth' })}>Encrypt</button>
                <button className="" onClick={() => document.getElementById('dec')?.scrollIntoView({ behavior: 'smooth' })}>Decrypt</button>
                <button className=""  onClick={() => window.open("https://en.wikipedia.org/wiki/RSA_cryptosystem", "_blank")}>How it works</button>
            </div>

            <div className="left-part  z-50">
                <button
                    className="bg-[#4f4bf9] font-semibold rounded-md px-6 py-4 text-white hover:text-black transition-all duration-700 z-60"
                    
                    onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Navbar;
