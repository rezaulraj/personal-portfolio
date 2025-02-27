import React from "react";
import Ecommarce from "../../assets/ecommarce1.webp";
import Airbnb from "../../assets/airbnb.jpg";
import Spotify from "../../assets/motify.png";
import { Github, Link } from "lucide-react";
import WorkCard from "./WorkCard";

const Works = () => {
  return (
    <div className="space-y-16">
      {/* First Project */}
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 gap-x-8">
        {/* Text Section (Will be on Left on md Screens) */}
        <div className="flex flex-col md:items-end space-y-3 md:order-2">
          <h3 className="text-[#e9c46a] text-lg md:text-start font-semibold">
            Full Stack E-commerce
          </h3>
          <div className="hidden md:block bg-[#00090e] text-gray-300 w-full p-2 rounded-xl">
            A web-based platform where users can explore a variety of products,
            add items to their cart, and complete purchases with secure
            payments. Customers can track their order history, while admins can
            manage inventory and orders.
          </div>
          {/* Tools */}
          <div className="flex">
            <ul className="flex flex-wrap text-gray-200 md:items-end md:justify-end gap-2">
              {[
                "React",
                "Tailwind",
                "Node",
                "Express",
                "MongoDB",
                "Redis",
                "Zustand",
                "Cloudinary",
              ].map((item, indx) => (
                <li
                  key={indx}
                  className="hover:text-[#e9c46a] border-2 px-2 py-1 border-gray-500 rounded-xl hover:scale-x-105 transition-transform duration-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-start gap-x-4 text-amber-50">
            <Github className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer" />
            <Link className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer" />
          </div>
        </div>

        {/* Image Section (Will be on Right on md Screens) */}
        <div className="group relative md:order-1">
          <div className="relative inline-block transition-transform duration-500">
            <img
              src={Ecommarce}
              className="h-[380px] w-full rounded-md transition-all duration-300 grayscale group-hover:grayscale-0"
              alt="Project"
            />
            <div className="absolute inset-0 bg-[#3c9ac9] mix-blend-multiply opacity-60 transition-opacity rounded-md duration-500 group-hover:opacity-0"></div>
          </div>
        </div>
      </div>
      {/* second project */}
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 gap-8">
        {/* Text Section (Will be on Left on md Screens) */}
        <div className="flex flex-col md:items-start space-y-3 md:order-1">
          <h3 className="text-[#e9c46a] text-lg md:text-start font-semibold">
            Motify
          </h3>
          <div className="hidden md:block bg-[#00090e] text-gray-300 w-full p-2 rounded-xl">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
          {/* Tools */}
          <div className="flex">
            <ul className="flex flex-wrap gap-2 text-gray-200 md:items-start md:justify-start">
              {[
                "React",
                "TypeScript",
                "Tailwind",
                "Node",
                "Express",
                "MongoDB",
                "Shadcn UI",
                "Zustand",
                "Cloudinary",
              ].map((item, indx) => (
                <li
                  key={indx}
                  className="hover:text-[#e9c46a] border-2 px-2 py-1 border-gray-500 rounded-xl hover:scale-x-105 transition-transform duration-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-start gap-x-4 text-amber-50">
            <Github className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer" />
            <Link className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer" />
          </div>
        </div>

        {/* Image Section (Will be on Right on md Screens) */}
        <div className="group relative md:order-2">
          <div className="relative inline-block transition-transform duration-500">
            <img
              src={Spotify}
              className="h-[380px] w-full rounded-md transition-all duration-300 grayscale group-hover:grayscale-0"
              alt="Project"
            />
            <div className="absolute inset-0 bg-[#3c9ac9] mix-blend-multiply opacity-60 transition-opacity rounded-md duration-500 group-hover:opacity-0"></div>
          </div>
        </div>
      </div>
      {/* third project */}
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 gap-x-8">
        {/* Text Section (Will be on Left on md Screens) */}
        <div className="flex flex-col md:items-end space-y-3 md:order-2">
          <h3 className="text-[#e9c46a] text-lg md:text-start font-semibold">
            Airbnb
          </h3>
          <div className="hidden md:block bg-[#00090e] text-gray-300 w-full p-2 rounded-xl">
            A web-based platform where users can book accommodations, list their
            own properties, and manage bookings seamlessly. The app connects
            travelers with hosts, offering a variety of stays, from apartments
            to luxury villas.
          </div>
          {/* Tools */}
          <div className="flex">
            <ul className="flex flex-wrap text-gray-200 md:items-end md:justify-end gap-2">
              {[
                "React",
                "Tailwind",
                "Node",
                "Express",
                "MongoDB",
                "Redis",
                "Zustand",
                "Cloudinary",
              ].map((item, indx) => (
                <li
                  key={indx}
                  className="hover:text-[#e9c46a] border-2 px-2 py-1 border-gray-500 rounded-xl hover:scale-x-105 transition-transform duration-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-start gap-x-4 text-amber-50">
            <Github className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer" />
            <Link className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer" />
          </div>
        </div>

        {/* Image Section (Will be on Right on md Screens) */}
        <div className="group relative md:order-1">
          <div className="relative inline-block transition-transform duration-500">
            <img
              src={Airbnb}
              className="h-[380px] w-full rounded-md transition-all duration-300 grayscale group-hover:grayscale-0"
              alt="Project"
            />
            <div className="absolute inset-0 bg-[#3c9ac9] mix-blend-multiply opacity-60 transition-opacity rounded-md duration-500 group-hover:opacity-0"></div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-center text-gray-200 font-bold mb-6">
          Other Noteworthy Projects
        </h2>
        <WorkCard />
      </div>
    </div>
  );
};

export default Works;
