
import React, { useEffect } from 'react';
import Image from 'next/legacy/image';
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);


  return (
    <section id="about" className='p-4 min-h-screen place-content-center'>
      <br/>
      <br/>
      <div className='grid  grid-cols-1 grid-rows-2  lg:grid-cols-3 md:grid-rows-1 items-center max-w-[1240px] mx-auto place-items-center gap-4'>
        <p data-aos="fade-up"  className='mx-auto text-left max-w-[380px] text-2xl font-bold py-10' >At Finik , our team is the backbone of our success. With years of collective experience, we specialize in delivering high-quality IT solutions tailored to meet the unique needs of our clients. Our expertise spans a broad range of industries, ensuring that we understand the specific challenges and opportunities each sector faces.</p>
        {/* <div data-aos="fade-left" className=' invisible  h-screen w-screen relative lg:visible'><Image src="/btst.webp" alt="bts" objectFit="contain" layout='fill' /></div> */}
        <div data-aos="fade-left" className= 'grid  grid-cols-3 gap-2 p-1  col-span-2'>
          <div className='relative span-2'><Image  className='rounded-xl'  src="/img7-about.webp" alt="img1" height={900}width={600}></Image></div>
          <div className='relative col-span-2'><Image  className='rounded-xl ' src="/img6-about.webp" alt="img2" height={400} width={600}></Image></div>
        
          <div className='mx-auto col-span-3'><Image  className='rounded-xl ' src="/img8-about.webp" alt="img3" height={300} width={500}></Image></div>
        </div>
        
      </div>

    </section>
  );
};

export default About;
