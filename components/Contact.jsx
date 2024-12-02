import React from 'react'
// import { useForm } from 'react-hook-form';
// import { sendEmail } from '@/utils/send-email';



export default function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  //value={name} onChange={(e) => {setName(e.target.value)}}
  // value={email} onChange={(e) => {setEmail(e.target.value)}}
  // value={message} onChange={(e) => {setMessage(e.target.value)}}
  // value={subject} onChange={(e) => {setSubject(e.target.value)}}

  return (  
    <div  className='grid max-w-[1240px] mx-auto p-10 h-screen place-items-center'>
      <form id="contact" className='max-w-[600px] m-auto'>
        <h3 className='text-2xl font-bold text-center p-4'>Contact</h3>
        <div className='grid grid-cols-2 gap-2'>
          <input className='border shadow-lg p-3 rounded-xl dark:border-gray-500' type="text" placeholder='Name' />
          <input className='border shadow-lg p-3 rounded-xl dark:border-gray-500' type="email" placeholder='Email' />
        </div>
        <input className='border shadow-lg p-3 w-full my-2 rounded-xl dark:border-gray-500' type="text" placeholder='Subject' />
        <textarea className='border shadow-lg p-3 w-full rounded-xl dark:border-gray-500' cols="30" rows="10" placeholder='Message'></textarea>
        <button className='border shadow-lg p-3 w-full mt-2  rounded-xl dark:border-gray-500'>Submit</button>
      </form>


    </div>
  )
}

