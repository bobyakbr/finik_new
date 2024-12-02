import Link from 'next/link'

export default function CareersSection() {
  return (
    <section id="about" className="bg-black py-16 lg:py-24">
        <div className="container mx-auto px-6  py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 justify-center gap-8  max-w-5xl mx-auto md:grid-cols-2">
          <div className="bg-auto bg-cover rounded-lg">
          <div className="bg-black bg-opacity-70 bg-auto bg-cover p-6 rounded-lg h-full   ">
          <p className="text-gray-100 text-xl">
          We are dedicated to providing unparalleled service and delivering IT solutions that empower our clients to achieve their goals. Your success is our success, and together, we can create a future filled with possibilities.
          </p>
           </div>
          </div>
          
          <div className="bg-auto bg-cover rounded-lg">
          <div className="bg-black bg-opacity-70 bg-auto bg-cover p-6 rounded-lg h-full ">
          <p className="text-gray-100 text-xl">With a deep understanding of the latest technologies and industry best practices, our team ensures that your systems run smoothly and efficiently. We are committed to delivering reliable, timely, and innovative solutions tailored to your unique needs, helping you stay ahead in a rapidly evolving digital landscape.</p>
         
         </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 text-center py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
          Join Our Team
        </h2>
        <p className="text-lg text-gray-100 mb-8">
          We are constantly looking for talented individuals to join our growing team.
          Together, we can drive innovation, solve complex challenges, and create a better future.
        </p>
        <Link href="/Careers" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-medium py-3 px-8 rounded-full shadow-lg hover:text-black transition duration-300">

            Explore Careers
 
        </Link>
      </div>
    </section>
  )
}