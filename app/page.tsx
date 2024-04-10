"use client";
import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(inputText);
    // You can perform further actions with the input text here
  };
  return (
    <div className="mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col items-center justify-center md:pt-20">
          <div className=" text-green-800 font-bold font-serif text-4xl pr-20 pl-20">
            <h1>Find recipes by real people made with love</h1>
          </div>
          <div className="pt-10">
            <input
              type="text"
              className="border border-black rounded-lg pl-5 w-80 h-10 focus:outline-none focus:border-blue-500 text-center"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="pt-5">
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded"
              onClick={handleButtonClick}
            >
              Join Waitlist
            </button>
          </div>
        </div>

        <div className=" flex items-center justify-center md:pt-20 pt-5">
          <img src="introView.png" alt="Image description" className="w-50" />
        </div>
      </div>
    </div>
  );
}
