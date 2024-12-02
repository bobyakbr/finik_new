
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


const Solutions = ({ }) => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="solutions" className='min-h-screen bg-gradient-to-r place-content-center from-cyan-500 to-blue-500'>
      <div className='container mx-auto grid items-center justify-center'>
        <div className='p-5 text-grey z-[2] '>
          <div className='items-center text-center relative'>
            <h3 data-aos="zoom-out" className='text-3xl font-bold '>Our Key Strengths</h3>
            <br />
          </div>
          <br />
          <div data-aos="zoom-out" className="  grid grid-cols-1 gap-4 overflow-y-auto lg:grid-cols-5 md:max-w-[1000px] dark:text-gray-400 ">

            <div className="justify-center text-center p-6 bg-gray-100 hover:text-white dark:hover:text-white dark:bg-gray-600 rounded-xl hover:bg-black dark:hover:bg-black overflow-y-auto">
              <h1 className='font-bold text-xl dark:text-white'>Innovative Thinking</h1>
              <br />

              <p >We pride ourselves on staying ahead of the curve with the latest technological advancements and creative problem-solving approaches.</p>
            </div>
            <div className="justify-center text-center p-6 bg-gray-100  hover:text-white dark:hover:text-white dark:bg-gray-600 rounded-xl hover:bg-black dark:hover:bg-black">
              <h1 className='font-bold text-xl dark:text-white '>Customer-Centric Approach</h1>
              <br />
              <p >We believe in building strong relationships with our clients, understanding their needs, and delivering solutions that exceed their expectations.</p>
            </div>
            <div className="justify-center text-center p-6 bg-gray-100 hover:text-white dark:hover:text-white  dark:bg-gray-600 rounded-xl hover:bg-black dark:hover:bg-black">
              <h1 className='font-bold text-xl dark:text-white'>Dedicated Professionals</h1>
              <br />
              <p>Our team comprises highly skilled professionals who are passionate about technology and committed to excellence.</p>
            </div>
            <div className="justify-center text-center p-6 bg-gray-100 hover:text-white dark:hover:text-white dark:bg-gray-600 rounded-xl hover:bg-black dark:hover:bg-black">
              <h1 className='font-bold text-xl dark:text-white'>Continuous Learning</h1>
              <br />
              <p>We invest in ongoing training and development to ensure our team remains at the forefront of the IT industry.</p>
            </div>
            <div className="justify-center text-center p-6 bg-gray-100 hover:text-white dark:hover:text-white dark:bg-gray-600 rounded-xl hover:bg-black dark:hover:bg-black">
              <h1 className='font-bold text-xl dark:text-white'>Proven Track Record</h1>
              <br />
              <p>Our portfolio includes numerous successful projects that have transformed businesses and driven growth.</p></div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Solutions;
