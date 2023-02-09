export default function Skills() {
  return (
    <div className="bg-slate-200 p-10 rounded-lg shadow-md">
      <section className="flex flex-col items-center text-center text-sky-500 pb-8">
        <h2 className="text-2xl font-bold tracking-wide ">
          Skills & Qualities
        </h2>
        <p className="text-sm font-thin text-black">
          Highlighting my individual strengths and interests
        </p>
      </section>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <section className="p-10 rounded-lg shadow-md bg-sky-600">
          <h3 className="text-lg font-medium uppercase tracking-wide text-white pb-4">
            Technical Abilities
          </h3>
          <ul className="list-disc pl-5 mt-4">
            <li className="text-gray-200">HTML</li>
            <li className="text-gray-200">CSS</li>
            <li className="text-gray-200">JavaScript</li>
            <li className="text-gray-200">ReactJS</li>
            <li className="text-gray-200">Git</li>
          </ul>
        </section>
        <section className="p-10 rounded-lg shadow-md bg-sky-600">
          <h3 className="text-lg font-medium uppercase tracking-wide text-white pb-4">
            Unique Skills & Qualities
          </h3>
          <ul className="list-disc pl-5 mt-4">
            <li className="text-gray-200">
              Superior problem-solving and attention to detail.
            </li>
            <li className="text-gray-200">
              Effective verbal and written communication.
            </li>
            <li className="text-gray-200">
              Adept at simplifying complex ideas through design.
            </li>
            <li className="text-gray-200">
              Proficient at working efficiently under tight deadlines.
            </li>
          </ul>
        </section>
      </div>
      <section className="p-10 mt-10 rounded-lg shadow-md bg-sky-600">
        <h3 className="text-lg font-medium uppercase tracking-wide text-white pb-4">
          Interests & Hobbies
        </h3>
        <ul className="list-disc pl-5 mt-4">
          <li className="text-gray-200">
            Enthusiastic about web development and coding.
          </li>
          <li className="text-gray-200">
            Active member in online coding communities (e.g. GitHub, Coding
            Discord).
          </li>
          <li className="text-gray-200">
            Follower of the latest advancements in frontend technology and
            programming.
          </li>
        </ul>
      </section>
    </div>
  );
}
