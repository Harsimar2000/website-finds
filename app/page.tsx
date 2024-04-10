"use client";
import { useState } from "react";
import { toast } from "sonner";
export default function Home() {
  let success = false;
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(inputText);
    // You can perform further actions with the input text here
    if (inputText != "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      success = emailRegex.test(inputText);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col items-center justify-center">
          <div className="pl-10">
            <h1 className="text-green-800 font-bold font-serif text-4xl  ">
              Find recipes by real people,
            </h1>
            <h1 className="text-green-800 font-bold font-serif text-4xl  ">
              made with love
            </h1>
          </div>
          <div className="p-10">
            <ol className=" text-xl text-green-700">
              <li>1. Join the wailtist to hear about when we launch</li>
              <li>
                2. To know more about the app visit{" "}
                <a href="/features" className=" underline hover:text-gray-800">
                  features section
                </a>
              </li>
            </ol>
          </div>
          <div className="">
            <input
              type="text"
              className="border border-black rounded-lg pl-10 pr-10 w-80 h-10 focus:outline-none text-left"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="pt-5">
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800"
              onClick={() => {
                handleButtonClick();
                if (success) {
                  toast.success("Congrats! you are on the waitlist");
                } else {
                  toast.error("Incorrect email try again");
                }
              }}
            >
              Join Waitlist
            </button>
          </div>
        </div>

        <div className=" flex items-center justify-center md:pl-20 sm:pt-7">
          <img src="intro.png" alt="Image description" className="" />
        </div>
      </div>
    </div>
  );
}
