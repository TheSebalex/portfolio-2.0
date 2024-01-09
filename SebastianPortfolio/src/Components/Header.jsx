import React from "react";
import ProfilePicture from "../assets/profile-picture.svg";
import { useNavigate, useMatch, Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="h-full px-2 bg-blackpurple flex gap-6">
        <div className="flex justify-center items-center md:pl-[10%] pl-[5%]">
          <img
            className="h-[80%] max-w-[30vw] max-h-[30vw] border-[1px] border-black aspect-square object-cover rounded-full"
            src={ProfilePicture}
          />
        </div>
        <div className="flex flex-col justify-center h-full text-white">
          <h1 className="font-black text-xl lg:text-2xl leading-none font-mono">
            Sebastián Leañez
          </h1>
          <h2 className="text-md lg:text-xl font-medium leading-none font-mono">
            Desarrollador
          </h2>
          <h2 className="text-sm lg:text-lg leading-none font-mono">
            <span className="text-yellow-200">Javascript</span> |{" "}
            <span className="text-sky-400">.NET</span>
          </h2>
        </div>
      </header>
    </>
  );
}
