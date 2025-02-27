import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Works from "./components/Works";

const HomePage = () => {
  return (
    <div className=" pt-40  px-6 md:px-20 lg:px-20 xl:px-20 2xl:px-0 relative overflow-hidden">
      <section className="space-y-12 md:space-y-8  relative max-w-[1080px] min-h-screen mx-auto">
        <h3 className="text-[#e9c46a] tracking-widest text-[18px]">
          Hi, my name is
        </h3>
        <div className="space-y-2">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-100">
            MD Rezaul Karim.
          </h1>
          <h1 className="font-bold text-4xl md:text-6xl text-gray-400">
            I build things for the web
          </h1>
        </div>
        <p className="max-w-[550px] text-gray-300 text-justify tracking-wide">
          I'm a Software Developer at{" "}
          <a href="http://merinasoft.com/" className="text-[#e9c46a] underline">
            MerinaSoft
          </a>
          , specializing in{" "}
          <span className="font-semibold text-[#e9c46a]">
            "JavaScript Full-Stack Development"
          </span>
          . I focus on building scalable, high-performance applications with
          seamless user experiences. Passionate about problem-solving and clean
          architecture, I turn ideas into reality through innovative
          development.
        </p>
        <button className="group relative inline-block text-sm font-medium text-[#e9c46a] focus:ring-3 focus:outline-hidden ">
          <span className="absolute inset-0 border-2 border-[#e9c46a] rounded-md group-hover:bg-[#e9c46a] transition duration-500"></span>
          <span className="block border-2 border-[#e9c46a] rounded-md bg-[#023047] px-6 py-3 transition duration-500 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
            Check out my profile!
          </span>
        </button>
      </section>
      <section
        id="#about"
        className="relative max-w-[1080px] min-h-screen mb-12 mx-auto lg:px-4"
      >
        <div className="flex items-center pb-8">
          <h1 className="text-gray-100 text-2xl md:text-4xl font-mono">
            <span className="text-[#e9c46a] text-xl md:text-3xl pr-1">01.</span>
            About Me
          </h1>
          <hr className="w-32 md:w-64 ml-4 text-gray-600" />
        </div>
        <AboutMe />
      </section>

      {/* Where I've word */}

      <section
        id="#about"
        className="relative max-w-[980px] min-h-screen mx-auto lg:px-10"
      >
        <div className="flex items-center pb-8">
          <h1 className="text-gray-100 text-2xl md:text-4xl font-mono">
            <span className="text-[#e9c46a] text-xl md:text-3xl pr-1">01.</span>
            Where I've Worked
          </h1>
          <hr className="w-8 sm:w-28 md:w-60 ml-4 text-gray-600" />
        </div>
        <Experience />
      </section>

      <section
        id="#about"
        className="relative max-w-[1080px] min-h-screen mx-auto"
      >
        <div className="flex items-center pb-8">
          <h1 className="text-gray-100 text-2xl md:text-4xl font-mono">
            <span className="text-[#e9c46a] text-xl md:text-3xl pr-1">03.</span>
            Some Things I'vd Build
          </h1>
          <hr className="w-44 md:w-60 ml-4 text-gray-600" />
        </div>
        <Works />
      </section>
    </div>
  );
};

export default HomePage;
