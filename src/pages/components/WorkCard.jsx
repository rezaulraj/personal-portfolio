import { File, Github, Link } from "lucide-react";
import React from "react";

const WorkCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* first card */}
        <div className="w-full min-h-[320px] flex flex-col justify-between px-4 py-6 rounded-lg hover:-translate-y-3 hover:-translate-x-2 transition-transform duration-500 cursor-pointer bg-[#03405f] my-4">
          <div className="flex items-center justify-between">
            <File className="hover:-translate-y-2 transition-transform duration-500 text-amber-200" />
            <span className="flex gap-1">
              <Github className="hover:-translate-y-2 transition-transform duration-500 text-gray-300 hover:text-amber-200" />
              <Link className="hover:-translate-y-2 transition-transform duration-500 text-gray-300 hover:text-amber-200" />
            </span>
          </div>
          <div>
            <h2 className="mt-4 text-2xl font-semibold text-gray-300">
              News Protal
            </h2>
            <p className="text-gray-400 mt-2">
              A news portal is a web-based platform that delivers real-time
              news, articles, and multimedia content. It categorizes news,
              supports user engagement, and offers personalized updates on
              various topics like politics, sports, and technology.
            </p>
          </div>
          <div className="flex gap-2 text-gray-500 hover:text-amber-200 font-semibold">
            <span>React</span>
            <span>Context Api</span>
            <span>Node</span>
            <span>Express</span>
          </div>
        </div>

        {/* scond card */}
        <div className="w-full min-h-[320px] flex flex-col justify-between px-4 py-6 rounded-lg hover:-translate-y-3 hover:-translate-x-2 transition-transform duration-500 cursor-pointer bg-[#03405f] my-4">
          <div className="flex items-center justify-between">
            <File className="hover:-translate-y-2 transition-transform duration-500 text-amber-200" />
            <span className="flex gap-1">
              <Github className="hover:-translate-y-2 transition-transform duration-500 text-gray-300 hover:text-amber-200" />
              <Link className="hover:-translate-y-2 transition-transform duration-500 text-gray-300 hover:text-amber-200" />
            </span>
          </div>
          <div>
            <h2 className="mt-4 text-2xl font-semibold text-gray-300">
              Learning Menagement System
            </h2>
            <p className="text-gray-400 mt-2">
              A Learning Management System (LMS) is a web-based platform that
              facilitates online education by managing courses, tracking
              progress, and enabling interactions between students and
              instructors through videos, quizzes, and assignments. 🚀📚
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-gray-500 font-semibold">
            <span>React</span>
            <span>Zustand</span>
            <span>Node</span>
            <span>Express</span>
            <span>Mongodb</span>
            <span>React Player</span>
          </div>
        </div>

        {/* Third card */}
        <div className="w-full min-h-[320px] flex flex-col justify-between px-4 py-6 rounded-lg hover:-translate-y-3 hover:-translate-x-2 transition-transform duration-500 cursor-pointer bg-[#03405f] my-4">
          <div className="flex items-center justify-between">
            <File className="hover:-translate-y-2 transition-transform duration-500 text-amber-200" />
            <span className="flex gap-1">
              <Github className="hover:-translate-y-2 transition-transform duration-500 text-gray-300 hover:text-amber-200" />
              <Link className="hover:-translate-y-2 transition-transform duration-500 text-gray-300 hover:text-amber-200" />
            </span>
          </div>
          <div>
            <h2 className="mt-4 text-2xl font-semibold text-gray-300">
              Supershop Pos
            </h2>
            <p className="text-gray-400 mt-2">
              A SuperShop POS (Point of Sale) system is a web-based application
              that manages sales, inventory, and customer transactions in a
              retail store. It supports barcode scanning, billing, stock
              tracking, and real-time reports. 🛒💳
            </p>
          </div>
          <div className="flex gap-2 flex-wrap text-gray-500 font-semibold">
            <span>React</span>
            <span>Context Api</span>
            <span>Css</span>
            <span>Local Storage</span>
            <span>Section Storage</span>
          </div>
        </div>
        {/* forth */}
        <div className="w-full min-h-[320px] flex flex-col justify-between px-4 py-6 rounded-lg hover:-translate-y-3 hover:-translate-x-2 transition-transform duration-500 cursor-pointer bg-[#03405f] my-4">
          <div className="flex items-center justify-between">
            <File className="hover:-translate-y-2 transition-transform duration-500 text-amber-200" />
            <span className="flex gap-1">
              <Github className="hover:-translate-y-2 transition-transform duration-500 text-gray-300 hover:text-amber-200" />
              <Link className="hover:-translate-y-2 transition-transform duration-500 text-gray-300 hover:text-amber-200" />
            </span>
          </div>
          <div>
            <h2 className="mt-4 text-2xl font-semibold text-gray-300">
              Maxfirmbdltd
            </h2>
            <p className="text-gray-400 mt-2">
              An overseas company website serves as a digital gateway for
              international clients, showcasing the company’s services,
              products, global presence, and contact details while enabling
              seamless communication and business expansion. 🌍🚀
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-gray-500 font-semibold">
            <span>React</span>
            <span>Context Api</span>
            <span>Node</span>
            <span>Express</span>
            <span>Mysql</span>
          </div>
        </div>
        {/* fifth */}
        <div className="w-full min-h-[320px] flex flex-col justify-between px-4 py-6 rounded-lg hover:-translate-y-3 hover:-translate-x-2 transition-transform duration-500 cursor-pointer bg-[#03405f] my-4">
          <div className="flex items-center justify-between">
            <File className="hover:-translate-y-2 transition-transform duration-500 text-amber-200" />
            <span className="flex gap-1">
              <Github className="hover:-translate-y-2 transition-transform duration-500 text-gray-300 hover:text-amber-200" />
              <Link className="hover:-translate-y-2 transition-transform duration-500 text-gray-300 hover:text-amber-200" />
            </span>
          </div>
          <div>
            <h2 className="mt-4 text-2xl font-semibold text-gray-300">
              Clothing Pos
            </h2>
            <p className="text-gray-400 mt-2">
              A Clothing POS (Point of Sale) system is a web-based application
              that manages sales, inventory, and customer transactions in a
              retail store. It supports barcode scanning, billing, stock
              tracking, and real-time reports. 🛒💳
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-gray-500 font-semibold">
            <span>React</span>
            <span>Context Api</span>
            <span>Css</span>
            <span>Authorization</span>
            <span>Mysql</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="group relative inline-block text-sm font-medium text-[#e9c46a] focus:ring-3 focus:outline-hidden ">
          <span className="absolute inset-0 border-2 border-[#e9c46a] rounded-md group-hover:bg-[#e9c46a] transition duration-500"></span>
          <span className="block border-2 border-[#e9c46a] rounded-md bg-[#023047] px-6 py-3 duration-500 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
            Show More
          </span>
        </button>
      </div>{" "}
    </>
  );
};

export default WorkCard;
