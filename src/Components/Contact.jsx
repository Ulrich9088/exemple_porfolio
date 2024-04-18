import {Github,Facebook,Instagram,Twitter} from 'lucide-react';
const Contact = () => {
  return (
    <div className="my-6">
    <div id='' className="grid xl:grid-cols-2 items-center   gap-16  mx-auto max-w-5xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
   <form action="" className=" ml-auo space-y-4">
   
    <input className="w-full rounded-md py-2.5 px-2 border text-sm outline-[#007bff]    border-blue-900 b_glow  text-slate-500" placeholder="Your Name" type="text" />
    <input className="w-full rounded-md py-2.5 px-2 border text-sm outline-[#007bff]   border-blue-900 b_glow  text-slate-500" placeholder="Email" type="text" />
    <input className="w-full rounded-md py-2.5 px-2 border text-sm outline-[#007bff]    border-blue-900 b_glow  text-slate-500" placeholder="Your Website(If exists) " type="text" />
  
   <textarea className="w-full rounded-md px-2 border text-sm pt-2.5 outline-[#007bff]   border-blue-900 b_glow  text-slate-500" placeholder="How can I help" name="" id="" cols="20" rows="4"></textarea>
   <div className="flex mt-4 gap-2">
     <div className="flex items-center justify-center">
       <div className="flex space-x-4">
                          
   <button className="neno-button bg-blue-900 shadow-xl hover:shadow-blue-800/50 text-black-600 border-2 border-blue-800 hover:bg-blue-900 rounded-lg py-1 px-12 uppercase relative overflow-hidden b_glow text-xl text-bold " type="submit">submit</button>
   <button className="neno-button shadow-xl hover:shadow-blue-800/50 text-black-600 border-2 border-blue-800 hover:bg-blue-900 rounded-lg py-1 px-4 uppercase relative overflow-hidden b_glow text-xl text-bold " type="submit"><Github  className="text-[28px]" /></button>
   <button className="neno-button shadow-xl hover:shadow-blue-800/50 text-black-600 border-2 border-blue-800 hover:bg-blue-900 rounded-lg py-1 px-4 uppercase relative overflow-hidden b_glow text-xl text-bold " type="submit"><Facebook   /></button>
   <button className="neno-button shadow-xl hover:shadow-blue-800/50 text-black-600 border-2 border-blue-800 hover:bg-blue-900 rounded-lg py-1 px-4 uppercase relative overflow-hidden b_glow text-xl text-bold " type="submit"><Instagram   /></button>
   <button className="neno-button shadow-xl hover:shadow-blue-800/50 text-black-600 border-2 border-blue-800 hover:bg-blue-900 rounded-lg py-1 px-4 uppercase relative overflow-hidden b_glow text-xl text-bold " type="submit"><Twitter  /></button>
   
   </div>
   </div>
   </div>
   
   </form>

   <div className=" lg:py-40 flex flex-col space-y-8 justify-center lg:items-start items-center text-black ">
   <h1  data-aos='fade-right' className="text-5xl ">My  <span className='font-bold'>Let's Talk</span> </h1>
   <p  data-aos='fade-left' className="text-lg text-gray-400 mt-3 " >Let’s talk for Something special I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
   <p  data-aos='fade-left' className="text-slate-600 text-lg  font-bold mt-3 " >changoulrich@gmail.com</p>
   <p  data-aos='fade-left' className="text-slate-600 text-lg font-bold mt-3 " >229 90884955</p>
   </div>

      </div>
    </div>
  )
}

export default Contact
