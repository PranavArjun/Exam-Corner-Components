import React , {useState}from 'react';
import { HomeIcon, UserGroupIcon, ChatAlt2Icon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import {Link} from "react-router-dom";

function Sidebar() {
    const [isOpen, setisOpen] = useState(false);
  return <>
    <nav className='h-screen position: fixed w-72 bg-gray-50 border-r border-gray-200 top-0 justify-center'>
    <div className="py-4 px-6">
          <Link to="/" className="bg-transparent">
            <img src={require("../img/logo.png")} alt="" />{" "}
          </Link>
        </div>
        <div className="pt-5 ">
          <div className=" tracking-widest hover:bg-gray-200 pl-2">
            <Link to="/" className="flex items-center h3 px-6 py-3 ">
              <HomeIcon className="h-5 w-5  mx-3" />
              Home
            </Link>
          </div>
          <div className="QuestionPapers">
            <button
              className="flex items-center h3 px-6 py-3 pl-7 w-full tracking-widest  hover:bg-gray-200 "
              id="button"
              onClick={() => {
                setisOpen(!isOpen);
              }}
            >
              {isOpen ? (
                <ChevronUpIcon className="h-4 w-4  mx-3 text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-4 w-4  mx-3 text-gray-500" />
              )}
              Question Papers
            </button>
            {isOpen && (
              <div className=" flex-col " id="dropdown">
                <Link
                  to='/csfile'
                  className="flex items-center h3 px-20 py-2 transition-all  duration-300 ease-in-out hover:bg-gray-200"
                >
                  CS
                </Link>

                <Link
                  to="/itfile"
                  className="flex items-center h3 px-20 py-2 transition-all  duration-300 ease-in-out hover:bg-gray-200"
                >
                  IT
                </Link>
                
                <Link
                  to="/entcfile"
                  className="flex items-center h3 px-20 py-2 transition-all  duration-300 ease-in-out hover:bg-gray-200"
                >
                  ENTC
                </Link>
              </div>
            )}
          </div>
          <div className=" tracking-widest hover:bg-gray-200 pl-2">
            <Link to="/about" className="flex items-center h3 px-6 py-3">
              <UserGroupIcon className="h-5 w-5  mx-3" />
              About Us
            </Link>
          </div>
          <div className=" tracking-widest hover:bg-gray-200 pl-2">
            <Link to="/contact" className="flex items-center h3 px-6 py-3">
              <ChatAlt2Icon className="h-5 w-5  mx-3" />
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
  </>;
}

export default Sidebar;
