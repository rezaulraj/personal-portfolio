import React from "react";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center md:items-start">
      {/* text box */}
      <div>
        <p className="text-gray-300 text-justify pb-2 tracking-wide">
          Hello! My name is Rezaul Karim, a dynamic and results-driven software
          developer with a passion for crafting seamless, user-centric digital
          experiences. With a strong foundation in both frontend and backend
          technologies, I thrive at the intersection of creativity and
          functionality, delivering robust solutions that drive impact.
        </p>
        <li className="text-gray-300 text-justify pb-2 tracking-wide">
          <span className="font-bold text-[#e9c46a]">Frontend Mastery :</span>{" "}
          Proficient in building responsive, high-performance web applications
          using <span className="text-[#e9c46a]">React.js</span>,
          <span className="text-[#e9c46a]">Tailwind CSS</span> and{" "}
          <span className="text-[#e9c46a]">Bootstaps</span>. I specialize in
          creating intuitive, visually stunning interfaces that elevate user
          engagement.
        </li>
        <li className="text-gray-300 text-justify pb-2 tracking-wide">
          <span className="font-bold text-[#e9c46a]">Backend Expertise :</span>{" "}
          Skilled in designing and implementing scalable backend systems with
          <span className="text-[#e9c46a]"> Node.js </span>,
          <span className="text-[#e9c46a]">MongoDB</span>, and{" "}
          <span className="text-[#e9c46a]">MySQL</span>. I ensure seamless data
          management, API integrations, and server-side logic that powers modern
          applications.
        </li>
        <li className="text-gray-300 text-justify pb-2 tracking-wide">
          <span className="font-bold text-[#e9c46a]">
            Full-Stack Versatility :
          </span>
          From concept to deployment, I excel in end-to-end development,
          bridging the gap between frontend and backend to deliver cohesive,
          efficient solutions.
        </li>
        <li className="text-gray-300 text-justify pb-2 tracking-wide">
          <span className="font-bold text-[#e9c46a]">
            Problem-Solving Mindset :
          </span>
          I love tackling complex challenges, optimizing code, and finding
          innovative ways to improve performance and user experience.
        </li>
      </div>
      {/* image box */}
      <div className="">
        <div className="group relative inline-block focus:ring-3 focus:outline-hidden">
          {/* Border moves slightly bottom-right on hover */}
          <span className="absolute inset-0 translate-x-4 translate-y-3 border-2 border-yellow-300 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 rounded-md"></span>

          {/* Image with custom color overlay initially, normal on hover */}
          <span className="relative inline-block transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 duration-500">
            <div className="relative flex items-center justify-center">
              <img
                src="./rezaulkarim.png"
                alt=""
                className="rounded-md transition-all duration-300 group-hover:brightness-100"
              />
              {/* Custom Color Overlay */}
              <div className="absolute inset-0 bg-[#3c9ac9] mix-blend-multiply opacity-60 transition-opacity rounded-md duration-500 group-hover:opacity-0"></div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
