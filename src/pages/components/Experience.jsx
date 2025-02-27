import { ArrowBigRight, Play } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "MerinaSoft",
      content: [
        {
          title: "Software Developer",
          company: "@ MerinaSoft",
          link: "http://merinasoft.com/",
          date: "Sep  2023  -  Present",
          lists: [
            {
              list: `Maintaining and developing user-friendly interfaces 
improving components, functions and performance, as well as 
updating technology of customized web applications to 
enhance scalability, responsiveness, functionality, and overall 
user experience.`,
            },
            {
              list: `Implemented REST APIs to connect the application to the 
backend services.
`,
            },
            {
              list: `Optimized REST API calls to reduce load times resulting 15% 
increase in page speed.`,
            },
            {
              list: ` Collaborated with cross-functional teams to ensure timely 
delivery of the project milestones.
`,
            },
            {
              list: `Debugged and resolved application issues to improve user 
experience.`,
            },
          ],
        },
      ],
    },
    {
      title: "Us Software Ltd.",

      content: [
        {
          title: "Train Program",
          company: "@ Us Software Ltd",
          link: "https://www.ussoftwareltd.com/",
          date: "June  2023  -  Sep  2023",
          lists: [
            {
              list: `I completed a MERN stack course 
at US Software Ltd, where I 
gained practical experience by 
working on several projects. This 
hands-on exposure enhanced my 
skills in developing full-stack web 
applications using MongoDB, 
Express, React, and Node.js.`,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Tabs */}
      <div className="flex flex-row md:flex-col w-full md:w-1/4 md:border-l-2 border-gray-300">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`p-4 cursor-pointer transition-all duration-500 relative ${
              activeTab === index
                ? "text-[#e9c46a]" // Active tab text color
                : "text-gray-300 hover:text-[#e9c46a]" // Inactive tab text color
            }`}
          >
            {/* Active tab border */}
            {activeTab === index && (
              <>
                {/* Bottom border for horizontal layout (mobile) */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e9c46a] md:hidden"></div>
                {/* Left border for vertical layout (desktop) */}
                <div className="absolute md:left-[-2px] top-0 h-full w-[2px] bg-[#e9c46a] hidden md:block"></div>
              </>
            )}
            {tab.title}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 pt-8 md:p-8">
        {tabs[activeTab].content.map((item, indx) => (
          <div key={indx}>
            <h2 className="text-2xl font-bold mb-4 text-gray-100">
              {item.title}{" "}
              <a
                href={item.link}
                target="_blank"
                className="text-[#e9c46a] cursor-pointer"
              >
                {item.company}
              </a>
            </h2>
            <h3 className="text-gray-300">{item.date}</h3>
            <ul className="max-w-[550px] mt-2 space-y-3">
              {item.lists.map((list, inx) => (
                <li
                  key={inx}
                  className="flex items-start text-gray-300 list-disc "
                >
                  <span>
                    <ArrowBigRight className="pr-2 text-[#e9c46a]" />
                  </span>{" "}
                  <p>{list.list}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
