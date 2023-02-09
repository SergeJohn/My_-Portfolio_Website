import React, { useState } from "react";
import Coding from "../assets/coding.jpg";
import Resume from "../assets/resume.pdf";
export default function AboutMe() {
  const [file, setFile] = useState(Resume);

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = file;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold text-white text-center">About Me</h1>
      <h3 className="font-light text-white text-center text-sm">
        Introduction
      </h3>

      <div className="flex justify-between items-center py-6 mt-2 md:mt-5">
        <div className="hidden flex-1 lg:block">
          <img
            src={Coding}
            alt="image"
            className="w-[480px] xl:w-[600px] pl-10"
          />
        </div>
        <div className="flex-1 px-10 lg:px-2">
          <p className="text-white font-thin mb-5">
            As a self-taught frontend developer, I am passionate about creating
            websites that not only look great but also provide an engaging user
            experience. My expertise includes HTML, CSS, JavaScript, and
            ReactJS, and I have a talent for building dynamic and responsive web
            pages with an eye for detail. I thrive in a collaborative
            environment and am quick to adapt to new technologies.
          </p>
          <div className="flex gap-5 mb-5">
            <div className="text-center">
              <h1 className="text-lg font-bold text-white">+01</h1>
              <h3 className="text-white font-thin text-sm">
                Years of Experience
              </h3>
            </div>
            <div className="text-center">
              <h1 className="text-lg font-bold text-white">+05</h1>
              <h3 className="text-white font-thin text-sm">
                Completed Projects
              </h3>
            </div>
          </div>
          <button
            onClick={downloadFile}
            className="bg-sky-800 text-white font-thin rounded-lg py-4 px-7"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
