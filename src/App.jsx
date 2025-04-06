import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./pages/components/Header";
import "./App.css";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("rezaul.coderpro@gmail.com");
    setCopied(true);
    toast.success("Email copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    // Simulate a loading delay of 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-[#023047] flex items-center justify-center">
        <div className="relative w-20 h-20">
          {/* Rectangle borders */}
          <div className="absolute top-0 left-0 w-0 h-2 bg-[#e9c46a] animate-border-top"></div>
          <div className="absolute top-0 right-0 w-2 h-0 bg-[#e9c46a] animate-border-right"></div>
          <div className="absolute bottom-0 right-0 w-0 h-2 bg-[#e9c46a] animate-border-bottom"></div>
          <div className="absolute bottom-0 left-0 w-2 h-0 bg-[#e9c46a] animate-border-left"></div>

          {/* Letter "R" */}
          <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-[#e9c46a]">
            R
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Sticky Section */}
      <div className="fixed z-10 bottom-0 left-0 pl-10 hidden md:block">
        <div className="flex flex-col items-center space-y-6">
          <a href="https://github.com/rezaulraj" target="_blank">
            <Github className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer text-gray-400" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <Instagram className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer text-gray-400" />
          </a>
          <a href="https://x.com/rezaulraj85" target="_blank">
            <Twitter className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer text-gray-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-rezaul-karim-a882aa253/"
            target="_blank"
          >
            <Linkedin className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer text-gray-400" />
          </a>
          <a href="https://www.facebook.com/rezaul85" target="_blank">
            <Facebook className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer text-gray-400" />
          </a>
          {/* Vertical Line */}
          <div className="h-24 flex justify-center">
            <span className="border-l border-gray-300 h-full"></span>
          </div>
        </div>
      </div>

      {/* right site */}
      <div className="fixed z-10 bottom-0 right-0 pr-10 hidden md:block ">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <div className="relative w-max group mx-auto mt-12">
            <p
              className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer text-gray-400 font-stretch-semi-condensed"
              style={{ writingMode: "vertical-rl" }}
              onClick={handleCopy}
            >
              rezaul.coderpro@gmail.com
            </p>
            <div className="max-w-xs absolute shadow-lg hidden group-hover:block bg-[#333] text-white font-semibold px-3 py-2 text-[13px] right-full mr-3 top-0 bottom-0 my-auto h-max w-max rounded before:w-4 before:h-4 before:rotate-45 before:bg-[#333] before:absolute before:z-[-1] before:bottom-0 before:top-0 before:my-auto before:-right-1 before:mx-auto">
              Click & Copy!
            </div>
          </div>

          {/* Vertical Line */}
          <div className="h-24 flex justify-center">
            <span className="border-l border-gray-300 h-full"></span>
          </div>
        </div>
      </div>
      <Toaster />

      <Header />

      <HomePage />
    </div>
  );
}

export default App;
