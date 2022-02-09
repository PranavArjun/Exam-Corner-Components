import React from "react";
import Footer from "./Footer";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="main">
        <div className=" bg-orange-900 h-24 flex justify-center items-center">
          <h2 className=" text-white font-san text-5xl"> Our Team</h2>
        </div>

        <div className="m-3 grid  grid-cols-1 lg:grid-cols-3 justify-center">
          {info.map((item, index) => {
            return (
              <>
                <div className="w-full " key={index}>
                  <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5 my-8">
                    <div className="">
                      <img
                        className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
                        src={item.imgurl}
                        alt="profile face"
                      />
                    </div>
                    <div className="text-center mt-5">
                      <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                        {item.desc}
                      </p>
                      <div className="flex align-center justify-center mt-4">
                        <a
                          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                          href="https://github.com/backslashflutter"
                        >
                          <FaGithub />
                          <span class="sr-only">Github</span>
                        </a>
                        <a
                          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300"
                          href="https://youtube.com/backslashflutter"
                        >
                          <FaYoutube />
                          <span class="sr-only">YouTube</span>
                        </a>
                        <a
                          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                          href="https://twitter.com/shivanshsinghh_"
                        >
                          <FaTwitter />
                          <span class="sr-only">Twitter</span>
                        </a>
                        <a
                          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300"
                          href="https://mailto:backslash.flutter@gmail.com"
                        >
                          <FaRegEnvelope />
                          <span class="sr-only">Email</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

const info = [
  {
    name: "Pranav Arjun",
    imgurl: require("../img/About.jpeg"),
    desc: "Founder & Web Developer",
  },
  {
    name: "Arjun",
    imgurl: require("../img/About.jpeg"),
    desc: " Web Developer",
  },
  {
    name: "Arjun",
    imgurl: require("../img/About.jpeg"),
    desc: " Web Developer",
  },
  {
    name: "Arjun",
    imgurl: require("../img/About.jpeg"),
    desc: " Web Developer",
  },
  {
    name: "Arjun",
    imgurl: require("../img/About.jpeg"),
    desc: " Web Developer",
  },
];
