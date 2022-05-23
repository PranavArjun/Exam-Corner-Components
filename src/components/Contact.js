import React from "react";
import Footer from "./Footer";
import Headbar from "./Headbar";
import { MdLocationOn } from "react-icons/md";
import { GrMail } from "react-icons/gr";

function Contact() {
  return (
    <>
      <Headbar heading={"Contact Us"} />
      <div className="main">
        <div className=" text-gray-100 px-6 py-6 m-6">
          <div className="text-center w-full"></div>
          <div className="max-w-screen-xl   px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-16 py-16 mx-auto bg-white text-gray-900 rounded-lg shadow-lg shadow-orange-800/25">
            <div className="flex flex-col justify-streach">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Get in touch
                </h2>
                <div className="text-gray-700 mt-4 mb-6">
                  If you have any suggestions, please let us know. Your
                  suggestions are highly appreciated. Keep dropping your
                  priceless opinions
                </div>
              </div>
              <div className="my-6">
                <a href="https://www.google.com/maps/place/AISSMS+Institute+of+Information+Technology/@18.531246,73.8649474,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc2c0f55639f89f:0x22ed3d7c6b61cdf3!8m2!3d18.531246!4d73.8671361" target={"_blank"} rel="noreferrer" className=" flex flex-1 text-lg font-semibold font-san my-5 max-w-max" >
                  <MdLocationOn className="h-6 w-6 mx-3 fill-orange-700 " />
                  AISSMS IOIT
                </a>
                <a href="mailto:examcorner@gmail.co" className=" flex flex-1 text-lg font-semibold font-san my-5 max-w-max " >
                  <GrMail className="h-6 w-6 mx-3 fill-orange-700" />
                  examcorner@gmail.com
                </a>
                
              </div>
            </div>
            <div className="">
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Full Name
                </span>
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline  border border-gray-200  focus:border-orange-700"
                  type="text" id="Fname"
                  placeholder="xyz"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none border border-gray-200  focus:border-orange-700 focus:shadow-outline"
                  placeholder="xyz123@gmail.com"
                  id="email" type="email" 
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea
                  className="w-full resize-none  h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline  border border-gray-200  focus:border-orange-700"
                  placeholder="Write a message..."
                ></textarea>
              </div>
              <div className="mt-8">
                <button className="uppercase text-sm font-bold tracking-wide bg-orange-800 text-white border border-gray-200 hover:border-orange-900 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
