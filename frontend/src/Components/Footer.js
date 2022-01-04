import React from "react";

export default function Footer() {
  return (
    <div className="p-6 bg-black flex flex-wrap justify-center">
      <div className="mb-4 flex flex-wrap w-full">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
          <h3 className="text-3xl py-4 text-white">Contact Us</h3>
          <form action="#">
            <div className="mb-4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#eb924e] mb-5"
                id="inline-full-name"
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#eb924e] mb-5"
                id="inline-full-name"
                type="text"
                placeholder="Email"
              />
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-[#eb924e] mb-5"
                id="inline-full-name"
                type="text"
                placeholder="Contact Number"
              />
              <textarea
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-[#eb924e] mb-5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              className="bg-[#eb924e] hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="sm:w-1/2 md:w-1/2 lg:w-1/2 pl-8">
        <div className="w-full flex justify-center items-center text-white text-center">
          <ul>
            <li>
              <a
                href="#"
                className="text-gray-300 text-[20px] hover:text-gray-400"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 text-[20px] hover:text-gray-400"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 text-[20px] hover:text-gray-400"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 text-[20px] hover:text-gray-400"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 text-[20px] hover:text-gray-400"
              >
                Latest Hirings
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full text-center">
            <h3 className="text-3xl py-4 text-white">Join Us On</h3>
        </div>
        </div>
      </div>
    </div>
  );
}
