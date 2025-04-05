import React, { useState } from "react";
import lk from "./assets/key-svgrepo-com (copy).svg"
import forge from "node-forge";
import Cpy from "./Textfield";
const Decrypt=()=>
{
    const [privateKey, setPrivateKey]=useState('');
    const [enM,setEnm]=useState("");
    const [dec,setDec]=useState("");
    const getMessage=(msg)=>
    {
        setEnm((prev)=>msg)
        console.log(enM)
    }
    const getPrivateKey=(newPrivateKey)=>
    {
        console.log(newPrivateKey);
        setPrivateKey((prev)=>(newPrivateKey))
    }
    const decHandler=()=>
    {
        try {
            const privKey = forge.pki.privateKeyFromPem(privateKey);
            const decodedBase64 = forge.util.decode64(enM);
            const decryptedText = privKey.decrypt(decodedBase64, "RSA-OAEP");
      
            setDec(decryptedText);
            alert("Message decrypted successfully!");
          } catch (err) {
            alert("Failed to decrypt. Check your key/message.");
            console.error("Decryption error:", err);
          }
        };
    return(
        <> 
        <div className="mt-[60vh] flex justify-center items-center flex-col" id="dec">
        <div className="heading flex w-full justify-center items-center flex-col">
            <img src={lk}></img>
           <div> <p className="text-white text-[40px] font-semibold" >Decrypt A Message</p></div>
           <p className="text-white text-[20px] mt-4">Use your private key to Decrypt the message that has been sent to you</p>
</div>
 <div className="flex justify-center items-center mt-10"> 

<div className="maine bg-transparent border-[0.5px] border-white rounded-lg px-10 w-[80vw]">
<div className="top">
<div className="top1 flex gap-2 items-baseline justify-start flex-col pt-4" >
<div className="flex gap-2 items-center justify-start"><div className="h-[50px] w-[50px] bg-[#4f4bf9] text-slate-300 rounded-full text-center font-extrabold"> <span className="bg-[#4F4BF9] text-[30px]">1</span></div>
<div className="text-[40px] font-semibold text-white">Enter Your Private Key</div></div>
</div>
<div className="Form mt-4">

 <div className="flex justify-between">
    <Cpy name="Private key" fullWidth="true" getPrivateKey={getPrivateKey} id="dec"/>
 </div>
 <hr className="bg-white my-10"/>
<div className="encr">
    <div>
    <div className="flex gap-2 items-center justify-start mt-10"><div className="h-[50px] w-[50px] bg-[#4f4bf9] text-slate-300 rounded-full text-center font-extrabold"> <span className="bg-[#4F4BF9] text-[30px]">2</span></div>
    <div className="text-[40px] font-semibold text-white">Enter Your Encrypted Message</div></div>
    </div>
    <Cpy name="Message to Decrypt" content="" fullWidth="true" getMessage={getMessage}/>
</div>

<div className="final">
<div>
    <div className="flex gap-2 items-center justify-start mt-10"><div className="h-[50px] w-[50px] bg-[#4f4bf9] text-slate-300 rounded-full text-center font-extrabold"> <span className="bg-[#4F4BF9] text-[30px]">3</span></div>
    <div className="text-[40px] font-semibold text-white">Decrypt Message </div></div>
    <button className="w-full bg-[#4F4BF9] py-4 rounded-md font-semibold text-[25px] text-white" onClick={decHandler}>Decrypt Now</button>
    <Cpy name="Decrypted result" unqKey="" cnt={dec}></Cpy>
    </div>
</div>
</div>

</div>
</div></div>

        </div>
       
        </>
       
    )
}
export default Decrypt;