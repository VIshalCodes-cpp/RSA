import React, { useState } from "react";
import lk from "./assets/lock-alt-svgrepo-com.svg"
import Cpy from "./Textfield";
import { generateKeyPair, encryptWithPublicKey } from "./rRSAutil";
const Encrypt=()=>
{
    const [publicKey,setPublicKey]=useState("")
    const [privateKey,setPrivateKey]=useState("")
    const [selectedKeySize,setSelectedKeySize]=useState(2048);
    const [data,setData]=useState("");
    const [encData,setEncData]=useState("")

const generateRSAKeyPair = async () => {
  try {
    const { publicKeyPem, privateKeyPem } = await generateKeyPair();
    setPublicKey(publicKeyPem);
    setPrivateKey(privateKeyPem);
  } catch (err) {
    console.error("Key generation failed:", err);
  }
};

      const getData=(newData)=>
      {
      
        setData((prev)=>newData);
      }
      const encryptedHandler=()=>{
        const encr=encryptWithPublicKey(publicKey,data);
        if(encr)
        {
            setEncData((prev)=>encr);
            alert('encypted successfully',encData)
        }
      };
    return(
        <> 
        <div className="mt-[60vh] flex justify-center items-center flex-col" id="enc">
        <div className="heading flex w-full justify-center items-center flex-col">
            <img src={lk}></img>
           <div> <p className="text-white text-[40px] font-semibold" >Encrypt Your Message</p></div>
           <p className="text-white text-[20px] mt-4">Transform Your text into a secure encrypted format that only recipient ca Decrypt</p>
</div>
 <div className="flex justify-center items-center mt-10"> 

<div className="maine bg-transparent border-[0.5px] border-white rounded-lg px-10 w-[80vw]">
<div className="top">
<div className="top1 flex gap-2 items-baseline justify-start flex-col pt-4" >
<div className="flex gap-2 items-center justify-start"><div className="h-[50px] w-[50px] bg-[#4f4bf9] text-slate-300 rounded-full text-center font-extrabold"> <span className="bg-[#4F4BF9] text-[30px]">1</span></div>
<div className="text-[40px] font-semibold text-white">Generate Encryption Keys </div></div>
<p className="text-white text-[25px] mt-4">Generate a unique pair of private and public keys for RSA encryption.</p>

</div>
<div className="Form mt-4">

  <div className="w-[100%]">
  <label htmlFor="keySize" className="text-white text-[25px] font-semibold">Choose RSA Key Size:</label>
  <div className="flex justify-between gap-10">
  <div className="w-full">
    <select id="keySize" name="keySize" value={selectedKeySize} onChange={(e)=>setSelectedKeySize(e.target.value)}
    className="w-full bg-transparent border border-white text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white">
    <option value="defaultValue" disabled defaultValue="none" className="bg-gray-900">Select key size</option>
    <option value="2048" className="bg-gray-900 text-white">2048 bits</option>
    <option value="3072" className="bg-gray-900 text-white">3072 bits</option>
    <option value="4096" className="bg-gray-900 text-white">4096 bits</option>
  </select></div>
  <button className="bg-[#4f4bf9] font-semibold rounded-md text-[24px] w-[400px]  text-white hover:text-black transition-all duration-700" onClick={()=>generateRSAKeyPair(selectedKeySize)}>Generate Keys</button>
  </div>
 
  </div>
 <div className="flex justify-between">
    <Cpy name="Public key" unqKey={publicKey}/>
    <Cpy name="Private key" unqKey={privateKey}/>
 </div>
 <hr className="bg-white my-10"/>
<div className="encr">
    <div>
    <div className="flex gap-2 items-center justify-start mt-10"><div className="h-[50px] w-[50px] bg-[#4f4bf9] text-slate-300 rounded-full text-center font-extrabold"> <span className="bg-[#4F4BF9] text-[30px]">2</span></div>
    <div className="text-[40px] font-semibold text-white">Enter Your Message</div></div>
    </div>
    <Cpy name="Message to Encrypt" content="" fullWidth="true" getData={getData}/>
</div>

<div className="final">
<div>
    <div className="flex gap-2 items-center justify-start mt-10"><div className="h-[50px] w-[50px] bg-[#4f4bf9] text-slate-300 rounded-full text-center font-extrabold"> <span className="bg-[#4F4BF9] text-[30px]">3</span></div>
    <div className="text-[40px] font-semibold text-white">Encrypt Message</div></div>
    <button className="w-full bg-[#4F4BF9] py-4 rounded-md font-semibold text-[25px] text-white" onClick={encryptedHandler}>Encrypt Now</button>
    <Cpy name="Encrypt Result" unqKey="" cnt={encData}></Cpy>
    </div>
</div>
</div>

</div>
</div></div>

        </div>
       
        </>
       
    )
}
export default Encrypt;