import React from "react";
import Image from "next/legacy/image";


const Footer = () => {
	return (
		<div className="">
			<div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10 ">
				<div className="p-5 ">
					<ul>
						<Image alt="" src='/finik-logo.webp' width="200" height="100" className="dark:invert-0 invert" />

					</ul>
				</div>
				<div className="p-5">
					<ul className=" rounded-xl p-5">
						<p className="text-black dark:text-white font-bold text-xl pb-4">Contact Us</p>
						<li className=" text-black dark:text-white text-sm pb-2  hover:text-gray-200 cursor-pointer">
							<p> Grand Wijaya Center D12, South Jakarta , Indonesia </p>

						</li>
						<li className="flex text-black text-sm pb-2  hover:text-gray-200 cursor-pointer dark:text-white">
							<p className="flex" id="footer">021 50820005</p>
						</li>
						<li className="flex  text-black text-sm pb-2  hover:text-gray-200 cursor-pointer dark:text-white">
							<p className="flex" >info@finik-tech.com</p>
						</li>

					</ul>
				</div>


			</div>
			<div className="flex py-4 flex-col justify-center items-center text-center  pb-5 bg-gray-50 dark:bg-[#1c1c1c] ">
				<h1 className=" text-gray-800 dark:text-white font-semibold dark:bg-[#1c1c1c]">©All rights reserved.  PT. Finik Teknologi Solusi 2024</h1>
			</div>
		</div>
	)
}
export default Footer