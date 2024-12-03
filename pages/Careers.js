import Aos from "aos";
import React, {useEffect } from 'react';
import Link from "next/link";

export default function Careers() {
    // Simulated dynamic job data
    const jobs = [
      {
        id: 1,
        title: 'Software Engineer',
        location: 'Remote',
        description: 'Join our team to develop innovative software solutions...',
        applyLink: '/#Contact'
      },
      {
        id: 2,
        title: 'Field Support Engineer',
        location: 'Indonesia, Jakarta',
        description: 'Assist project deployment, including installation and training with the end user, and support post-sales process...',
        applyLink: '/apply/data-scientist'
      },
      {
        id: 3,
        title: 'Project Manager',
        location: 'Indonesia, Jakarta',
        description: 'Lead cross-functional teams to deliver complex technology projects...',
        applyLink: '/apply/project-manager'
      },
    
    ];
    useEffect(() =>{
      Aos.init({duration:2500,
    });
    },[]);
  
    return (

        <div data-aos="zoom-out" className='min-h-screen bg-[url("/pic3.webp")] bg-center bg-fixed  bg-cover bg-opacity-90 text-white'>
        <div className='bg-black bg-opacity-90 bg-auto bg-fixed min-h-screen '>
          <div className="py-36">

        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Careers at FINIK</h1>
        <p className="text-lg text-center mb-8">
          Explore career opportunities across various fields and join a team dedicated to shaping the future of technology.
        </p>
  
        {/* Job Listings */}
        <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{job.location}</p>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <Link
                  href="/#contact"
                  className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full mt-4 hover:bg-blue-700 transition duration-300"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
          </div>
        </div>
        </div>
        </div>

    );
  }