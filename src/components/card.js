import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white rounded min-w-lg shadow p-6 w-[240px] shadow ">
      <img src={props.img} alt="ceit image" className="" />
      <h3 className="text-lg font-medium my-2 text-sky-500">{props.title}</h3>
      <p className="text-gray-700 mb-4 text-start text-sm font-light">
        {props.description}
      </p>
      <div className="flex gap-2 items-center ">
        <a
          href={props.url}
          className="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600"
        >
          Live link
        </a>
        <a
          href={props.github}
          className="bg-red-500 text-white p-2 rounded hover:bg-indigo-600"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Card;
