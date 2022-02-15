import React from "react";
import Footer from "./Footer";
import Headbar from "./Headbar";

function Contact() {
  return (
    <>
      <Headbar heading={"Contact Us"} />
      <div className="main">
        <div className=" text-gray-100 px-6 py-6 m-6">
          <div className="text-center w-full"></div>
          <div className="max-w-screen-xl   px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-white text-gray-900 rounded-lg shadow-lg shadow-orange-800/25">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Heading
                </h2>
                <div className="text-gray-700 mt-8">Desc</div>
              </div>
              <div>Img</div>
            </div>
            <div className="">
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Full Name
                </span>
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline  border border-gray-200  focus:border-orange-700"
                  type="text"
                  placeholder="xyz"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none border border-gray-200  focus:border-orange-700 focus:shadow-outline" placeholder="xyz123@gmail.com"
                  type="email"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline  border border-gray-200  focus:border-orange-700"
                  placeholder="Write a message"
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
