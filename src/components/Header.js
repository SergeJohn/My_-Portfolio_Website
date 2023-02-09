import React, { useState } from "react";
import Profile from "../assets/profile.jpg";
import Resume from "../assets/resume.pdf";

const Header = () => {
  const [file, setFile] = useState(Resume);

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = file;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="container pt-2 h-screen flex flex-col items-center justify-center mx-auto text-sky-100 gap-2 ">
      <p className="text-sm font-bold">Hello, I'm</p>
      <h1 className="text-3xl lg:text-5xl font-extrabold">
        Serge John Mahinay
      </h1>
      <p className="text-sm">Junior Frontend Developer </p>
      <div className="flex gap-2 my-5">
        <button
          className="bg-slate-50 text-black font-thin rounded-lg py-4 px-7 "
          onClick={downloadFile}
        >
          Download CV
        </button>
        <button className="bg-sky-800 text-white font-thin rounded-lg py-4 px-7 ">
          <a href="mailto:ssmahinay@gmail.com">Email Me</a>
        </button>
      </div>
      <img
        src={Profile}
        alt="profile image"
        className="w-72 border-t-4 rounded-t-full sm:w-96"
      />
    </div>
  );
};

export default Header;
