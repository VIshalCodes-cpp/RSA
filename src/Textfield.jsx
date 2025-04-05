import React, { useState } from "react";

const Cpy = ({
  name = "Public key",
  unqKey,
  fullWidth = false,
  cnt = "",
  getData,
  id,
  getPrivateKey,
  getMessage
}) => {
  const [textContent, setContent] = useState("");

  const copyToClipboard = async () => {
    try {
      if(cnt?.length!==0) await navigator.clipboard.writeText(cnt)
        else{
          const textToCopy = unqKey || textContent;
          await navigator.clipboard.writeText(textToCopy);
          alert("Copied!");
      }

    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const clearData = () => setContent("");

  const updateContent = (e, id) => {
    const value = e.target.value;
    setContent(value);
    if(getMessage) getMessage(value)
    if (getData) getData(value);
    if (id && getPrivateKey) getPrivateKey(value);
  };

  return (
    <div className={`${fullWidth || cnt ? "w-full" : "w-1/2"} p-4`}>
      <div className="flex justify-between items-center">
        <div className="text-[25px] text-white">{name}</div>
        <button
          className="bg-transparent text-[#4f4bf9] text-[20px] disabled:opacity-40"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col border border-white rounded-lg p-4">
        {fullWidth ? (
          <div>
            <textarea
              className="w-full bg-transparent text-[25px] text-white outline-none"
              placeholder="Type Your message here....."
              onChange={(e) => updateContent(e, id)}
              value={textContent}
            />
            <button className="text-[#4f4bf9]" onClick={clearData}>
              Clear
            </button>
          </div>
        ) : (
          <div className="w-full break-words whitespace-pre-wrap text-white">
            {unqKey?.length === 0 ? cnt : unqKey}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cpy;
