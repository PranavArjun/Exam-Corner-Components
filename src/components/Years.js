import React from 'react';
import { Link } from "react-router-dom";

function Years() {
  return <div className='main items-center flex justify-center'>
    <div className="Years mt-20  bg-gray-100 w-5/6 ">
      {year.map((item, index) => {
        return (
          <div className='flex' key={index}>
            <Link  className='p-3 text-lg border-b-2 border-gray-300 tracking-widest  cursor-pointer m-3 w-full' to={item.path}>
              {item.title}
            </Link>
          </div>
        )
      })}
    </div>
  </div>;
}

export default Years;

const year = [
  {
    title: 'First Year',
    path: '/firstyear'
  },
  {
    title: 'Second Year',
    path: '/secondyear'
  },
  {
    title: 'Third Year',
    path: '/thirdyear'
  },
  {
    title: 'Final Year',
    path: '/finalyear'
  }
]