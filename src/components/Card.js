import React from "react";
import { FaCode, FaDesktop, FaHeadset } from "react-icons/fa";

export default function Card() {
  return (
    <>
    <div className="card-top-space"></div>
      <div className="flex flex-wrap mx-auto justify-center  h-screen ">
        <div className="py-10 px-10">
          <div className="cardouter">
            <div className="card w-64 h-80 pl-20 pr-20 p-4 pt-10 rounded overflow-hidden shadow-lg ease-out duration-300">
              <div className="box-icon with-linear-gradient">
                <div className="logo">
                  <LogoIcon icon={<FaHeadset size="38" />} />
                </div>
              </div>
              <div className=" justify-center pb-10 pt-10 text-center">
                <h2 className="font-bold text-xl mb-2">Listening</h2>
              </div>
            </div>
            <div className="info py-4 justify-center text-center">
              <h2>hey hello we are listening to u </h2>
            </div>
          </div>
        </div>

        <div className=" py-10 px-10 ">
        <div className="cardouter">
          <div className="card w-64 h-80  p-4 pt-10 pl-20 pr-20 rounded overflow-hidden shadow-lg ease-out duration-300 ">
            <div className="box-icon with-linear-gradient bg-orange-800">
              <div className="logo ">
                <LogoIcon icon={<FaDesktop size="40" />} />
              </div>
            </div>

            <div className="justify-center pb-10 pt-10 text-center">
              <div className="font-bold text-xl mb-2">
                <p>We offer</p>
              </div>
            </div>
          </div>
          <div className="info py-4 justify-center text-center">
            <h2>hey hello we are listening to u </h2>
          </div>
        </div>
        </div>

        <div className=" py-10 px-10 ">
        <div className="cardouter">
          <div className="card  w-64 h-80  p-4 pt-10 pl-20 pr-20 rounded overflow-hidden shadow-lg ease-out duration-300  ">
            <div className="box-icon with-linear-gradient bg-orange-800 ">
              <div className="logo text-center">
                <LogoIcon icon={<FaCode size="42" />} />
              </div>
            </div>

            <div className="justify-center pb-10 pt-10 text-center">
              <div className="font-bold text-xl mb-2">
                <p>Devloping</p>
              </div>
            </div>
          </div>
          <div className="info py-4 justify-center text-center">
            <h2>hey hello we are listening to u </h2>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

const LogoIcon = ({ icon }) => <div className="logo-icon">{icon}</div>;
