import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jrkfshd", "template_qmgaf46", form.current, {
        publicKey: "T4fdOFbQ7z2s_W2tP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="mt-8 space-y-4" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="w-full py-2.5 px-4 text-gray-100 bg-[#033955] border border-gray-400 focus:border-[#e9c46a] rounded-lg text-sm outline-none transition-all"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="w-full py-2.5 px-4 text-gray-100 bg-[#033955] border border-gray-400 focus:border-[#e9c46a] rounded-lg text-sm outline-none transition-all"
        />
        {/* <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full py-2.5 px-4 text-gray-100 bg-[#033955] border border-gray-400 focus:border-[#e9c46a] rounded-lg text-sm outline-none transition-all"
        /> */}
        <textarea
          placeholder="Message"
          name="message"
          rows="4"
          className="w-full py-2.5 px-4 text-gray-100 bg-[#033955] border border-gray-400 focus:border-[#e9c46a] rounded-lg text-sm outline-none transition-all"
        />
        <input
          type="submit"
          value="Send"
          className="text-white bg-black hover:bg-gray-900 tracking-wide text-lg px-4 py-2.5 w-full outline-none rounded-lg"
        />
      </form>
      <div className="mt-16">
        <div className="flex items-center justify-center mb-4 space-x-6 md:hidden">
          <Github className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer text-gray-400" />
          <Instagram className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer text-gray-400" />
          <Twitter className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer text-gray-400" />
          <Linkedin className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer text-gray-400" />
          <Facebook className="hover:text-amber-200 hover:-translate-y-2 transition-transform duration-500 cursor-pointer text-gray-400" />
        </div>
        <h3 className="text-gray-300 tracking-wider text-center">
          Designed & Built by Md Rezaul Karim
        </h3>
        <p className="text-gray-300 tracking-wider text-center mt-2">
          ©Copyright All Reserve 2025.
        </p>
      </div>
    </div>
  );
};

export default Contact;
