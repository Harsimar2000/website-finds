"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <div>
      <nav className="text-center py-4">
        <ul className="hidden md:block">
          <Link
            href={"/"}
            className="p-2 hover:text-white rounded-lg hover:bg-green-700 mx-10"
          >
            Home
          </Link>
          <Link
            href={"/features"}
            className="p-2  hover:text-white rounded-lg hover:bg-green-700 mx-10"
          >
            Features
          </Link>
          <Link
            href={"/blog"}
            className="p-2  hover:text-white rounded-lg hover:bg-green-700 mx-10"
          >
            Blog
          </Link>
          <Link
            href={"/about"}
            className="p-2  hover:text-white rounded-lg hover:bg-green-700 mx-10"
          >
            About
          </Link>
        </ul>
        <div className="md:hidden flex items-center justify-end px-10">
          <button className="cursor-pointer text-md" onClick={toggleNavbar}>
            {isClick ? <h1>close</h1> : <h1>menu</h1>}
          </button>
        </div>
        {isClick && (
          <div className="fixed left-0 top-0 w-full h-screen py-4 px-10 bg-yellow-500 text-black md:hidden">
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-lg text-black">Finds</h1>
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleNavbar}
                >
                  {isClick ? <h1>close</h1> : <h1>menu</h1>}
                </p>
              </div>

              <div className="flex flex-col h-full justify-center items-center gap-10">
                <div>
                  <Link href={"/"} className="p-2 text-5xl hover:text-white ">
                    Home
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/features"}
                    className="p-2 text-5xl text-bold hover:text-white "
                  >
                    Features
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/blog"}
                    className="p-2 text-5xl hover:text-white "
                  >
                    Blog
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link
                    href={"/about"}
                    className="p-2 text-5xl hover:text-white "
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
