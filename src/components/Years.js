import React from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';
import Headbar from './Headbar';

function Years() {
  return <>
  <Headbar heading={"Question Papers"} />
  <div className='main items-center  flex justify-center'>
    <div className="Years my-28 shadow-lg shadow-orange-800/25  w-5/6 ">
      {year.map((item, index) => {
        return (
          <div className='flex '  key={index}>
            <Link  className={`p-4 text-lg  ${item.css}  hover:bg-orange-200 tracking-widest transition-all ease-in duration-300   cursor-pointer  w-full flex`} to={item.path}>
            <img className='sublogo className="h-6 w-8 mr-4 mx-3"' src={require("../img/logoorangepng.png")} alt="" />
              {item.title}
            </Link>
          </div>
        )
      })}
    </div>
  </div>
  
  <Footer/>
  </>
}

export default Years;

const year = [
  {
    title: 'First Year',
    path: '/firstyear',
    css : 'border border-orange-100'
  },
  {
    title: 'Second Year',
    path: '/secondyear',
    css : 'border-b border-orange-100'
  
  },
  {
    title: 'Third Year',
    path: '/thirdyear',
    css : 'border-b border-orange-100'
  },
  {
    title: 'Fourth Year',
    path: '/fourthyear'
  }
]