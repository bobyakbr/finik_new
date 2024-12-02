
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


const Solutions = ({ }) => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="solutions" className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
      <br/>
      <br />
      <div className='grid items-center justify-center h-screen md:h-screen '>

        <div className='p-5 text-grey z-[2] mt-[-10rem]'>
          <div className='items-center text-center'>
            <h3 data-aos="zoom-out" className='text-center items-center text-3xl font-bold relative md:relative'>Our Solutions</h3>
            <br />
          </div>
          <br />
          <div data-aos="zoom-out" className=" grid grid-cols-1 gap-4 overflow-y-auto max-h-screen md:grid-cols-4 md:max-w-[900px] dark:text-gray-400 ">

            <div className="justify-center text-center p-6 bg-gray-100 hover:text-white dark:hover:text-white dark:bg-gray-600 rounded-xl hover:bg-black dark:hover:bg-black overflow-y-auto">
              <h1 className='font-bold text-xl dark:text-white'>Technology</h1>
              <br />

              <p >We provide both software and hardware solutions with the performance you need to manage your business.</p>
            </div>
            <div className="justify-center text-center p-6 bg-gray-100  hover:text-white dark:hover:text-white dark:bg-gray-600 rounded-xl hover:bg-black dark:hover:bg-black">
              <h1 className='font-bold text-xl dark:text-white '>Support</h1>
              <br />
              <p >Our support team offers around-the-clock support to keep your business operating at peak performance.</p>
            </div>
            <div className="justify-center text-center p-6 bg-gray-100 hover:text-white dark:hover:text-white  dark:bg-gray-600 rounded-xl hover:bg-black dark:hover:bg-black">
              <h1 className='font-bold text-xl dark:text-white'>Scalability</h1>
              <br />
              <p>Our technology solutions are adaptable to a wide range of business models to suit the needs of our customers ever growing businesses.</p>
            </div>
            <div className="justify-center text-center p-6 bg-gray-100 hover:text-white dark:hover:text-white dark:bg-gray-600 rounded-xl hover:bg-black dark:hover:bg-black">
              <h1 className='font-bold text-xl dark:text-white'>QA</h1>
              <br />
              <p>We believe in prevention over inspection. We undertake Quality testing services as an integral part of every project to be sure our customers get what they paid for and more.</p>
            </div>

          </div>
        </div>
      </div>
    </section >
  );
};

export default Solutions;
