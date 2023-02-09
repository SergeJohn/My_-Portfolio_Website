import React from "react";
import Card from "./card";
import Watermark from "../assets/wewatermark.png";
import Youtube from "../assets/youtube.png";
import Todo from "../assets/todo.png";
export const projectsData = [
  //   {
  //     title: "Personal Website",
  //     description:
  //       "A portfolio website showcasing my skills and projects. Developed using HTML, CSS, and JavaScript.",
  //     img: "#",
  //   },
  {
    title: "Online Youtube Clone",
    description:
      "A video content platform website that allows users to browse and watch videos. Developed using React, and rapidApi.",
    img: Youtube,
    url: "https://youtube-clone-react-gules.vercel.app/",
    github: "https://github.com/SergeJohn/Youtube_Clone_React",
  },
  {
    title: "WeWatermark Landing Page",
    description:
      "This Project is a landing page that was made due to client request. It is developed using React and tailwindcss",
    img: Watermark,
    url: "https://watermark-website.vercel.app/",
    github: "https://github.com/SergeJohn/watermark-website",
  },
  {
    title: "Todo List",
    description:
      "A simple application that lists and stores all your tasks in local storage. Developed using React and hooks.",
    img: Todo,
    url: "https://todo-list-react-gules.vercel.app/",
    github: "https://github.com/SergeJohn/todo_list_react",
  },
];

function Projects() {
  return (
    <div className="bg-gray-200 ">
      <main className="container mx-auto p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-center text-sky-500">
            Projects
          </h2>
          <h3 className="text-sm font-thin text-center">
            This are the projects I've created recently
          </h3>
          <ul className="text-gray-600 max-w-[820px] mx-auto flex flex-wrap items-center justify-center gap-5 py-5">
            {projectsData.map((item) => {
              return <Card {...item} key={item.title} />;
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}
export default Projects;
