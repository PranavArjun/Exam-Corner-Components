import React from "react";
import Footer from "./Footer";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Headbar from "./Headbar";

export default function About() {
  return (
    <>
      <Headbar heading={"About Us"} />
      <div className="main">
        <div className="m-3 grid  grid-cols-1 lg:grid-cols-3 justify-center">
          {info.map((item, index) => {
            return (
              <div key={index}>
                <div className="w-full ">
                  <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5 my-8">
                    <div className="">
                      <img
                        className="w-32 mx-auto shadow-xl rounded-full drop-shadow-md"
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
                          href={item.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub />
                          <span className="sr-only">Github</span>
                        </a>
                        <a
                          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300"
                          href={item.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaLinkedinIn />
                          <span className="sr-only">linkedin</span>
                        </a>
                        <a
                          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300"
                          href={item.mail}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <SiGmail />
                          <span className="sr-only">YouTube</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
    linkedin: "https://www.linkedin.com/in/pranav-arjun-52454b190/",
    github: "https://github.com/PranavArjun",
    mail: "mailto:pranavarjun14@gmail.com",
  },
  {
    name: "Pranav Arjun",
    imgurl: require("../img/About.jpeg"),
    desc: "Founder & Web Developer",
    linkedin: "https://www.linkedin.com/in/pranav-arjun-52454b190/",
    github: "https://github.com/PranavArjun",
    mail: "mailto:pranavarjun14@gmail.com",
  },
  {
    name: "Pranav Arjun",
    imgurl: require("../img/About.jpeg"),
    desc: "Founder & Web Developer",
    linkedin: "https://www.linkedin.com/in/pranav-arjun-52454b190/",
    github: "https://github.com/PranavArjun",
    mail: "mailto:pranavarjun14@gmail.com",
  },
  {
    name: "Pranav Arjun",
    imgurl: require("../img/About.jpeg"),
    desc: "Founder & Web Developer",
    linkedin: "https://www.linkedin.com/in/pranav-arjun-52454b190/",
    github: "https://github.com/PranavArjun",
    mail: "mailto:pranavarjun14@gmail.com",
  },
  {
    name: "Pranav Arjun",
    imgurl: require("../img/About.jpeg"),
    desc: "Founder & Web Developer",
    linkedin: "https://www.linkedin.com/in/pranav-arjun-52454b190/",
    github: "https://github.com/PranavArjun",
    mail: "mailto:pranavarjun14@gmail.com",
  },
];
