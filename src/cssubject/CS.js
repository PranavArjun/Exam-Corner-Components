import React from "react";
import {Link } from "react-router-dom";
import Footer from "../components/Footer";
import Headbar from "../components/Headbar";
import Tabs from "../components/Tabs";
import {fe} from "../cssubject/fe";


export default function CS() {
    
  return <div>
      <Headbar heading={"Question Papers"}/>

      {/* <div className="tabs main bg-slate-500 mt-3">
            <ul className="flex  justify-center items-center">
                <li className="">
                    <a href="/" className="bg-white inline-block py-2 px-4 font-semibold">
                        In Sem
                    </a>
                </li>
                <li className="">
                    <a href="/" className="bg-white inline-block py-2 px-4 font-semibold">
                        End Sem
                    </a>
                </li>
            </ul>
      </div>
                <div className="main items-center  flex justify-center">
                    <div className="fes mb-14 mt-4 shadow-lg shadow-orange-800/25  w-3/4 ">
                        {fe.map((item, index) => {
                            return (
                                <div className="flex" key={index}>
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
                </div> */}
                <Tabs/>


                <Footer />
  </div>;
}

