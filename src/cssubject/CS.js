import React from "react";
import {Link } from "react-router-dom";
import Footer from "../components/Footer";
import Headbar from "../components/Headbar";
import {fe} from "../cssubject/fe";

export default function CS() {
  return <div>
      <Headbar heading={"Question Papers"}/>
                <div className="main items-center  flex justify-center">
                    <div className="fes my-14 shadow-lg shadow-orange-800/25  w-5/6 ">
                        {fe.map((item, index) => {
                            return (
                                <div className="flex  " key={index}>
                                    <Link
                                        className={`p-4 text-lg  ${item.css}  hover:bg-orange-200 tracking-widest transition-all ease-in duration-300   cursor-pointer  w-full flex`}
                                        to={item.path}
                                    >
                                        <img
                                            className='sublogo className="h-6 w-8 mr-4 mx-3"'
                                            src={require("../img/logoorangepng.png")}
                                            alt=""
                                        />
                                        {item.title}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Footer />
  </div>;
}

