import React from "react";
import  kn from "./assets/key-svgrepo-com.svg"
import { useNavigate } from "react-router";
const Hero=()=>
{
    const nav=useNavigate();
    return(
<>
<div className="main-hero flex justify-center items-center" id="hero">
    <div className="flex w-[100vw] absolute justify-center opacity-30">
        <img src={kn} className="mt-[150px] "/>
    </div>
<div className="righ-part w-[50%] mt-24">

    <div className="content text-[70px] font-semibold flex flex-col">
   <div className="text-center"> <span className="text-[#4F4BF9] mr-5">Secure </span><span className="text-[70px] font-semibold text-white">Your messages</span></div>
    <p className="text-[70px] font-semibold text-white"></p>   

    <div className="text-center"><span className="text-[#4F4BF9] mr-5">RSA </span><span className="text-[70px] font-semibold text-white">Encryption</span></div>
    </div>
    <div className="p-content text-[30px] text-white text-center leading-snug font-extralight">
        Experience the power of RSA algorithm with a good-grade Encryption. Protect Your communications with cutting edge Prime Hashing.
    </div>
    <div className="buttons flex justify-around mt-4">
    <button className="bg-transparent font-semibold rounded-md px-10 py-4 text-[#4f4bf9] z-50 hover:text-white transition-all duration-700 border-[2px] border-[#4f4bf9] hover:bg-[#4f4bf9]" onClick={() => document.getElementById('enc')?.scrollIntoView({ behavior: 'smooth' })}>Start Encrypting</button>
    </div>

</div>
</div>
</>
    )
}
export default Hero;