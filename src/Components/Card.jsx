import img11 from '../assets/goo.png'
import img12 from '../assets/youtube.png'
import img13 from '../assets/Untitled5.png'
const Card = () => {
  return (
    <div className=" bg-black space-y-5 p-20 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-semibold mb-20 leading-normal upercase text-slate-500"> My experiences</h1>
    <div className="bg-slate-900  flex flex-col justify-start max-w-5xl w-full text-white rounded-md shadow-lg p-8 border border-slate-900">
      <div className='flex'>
      <img src={img11}width={30} height={30} alt="" />
            <div className=" ml-4 ">
                <h2 className="text-md">Lead Software Engineer at Google </h2>
                
                <p className=' text-sm/6 text-white '>Date</p>
                </div>           
        </div>
        
            <p className='text-justify mt-2 text-sm/6 text-white/50'> As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google is core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
        </div> 






        <div className="bg-slate-900 flex flex-col justify-start max-w-5xl w-full text-white rounded-md shadow-lg p-8 border border-slate-900">
      <div className='flex items-center'>
      <img src={img12}width={30} height={30} alt="" />

            <div className=" ml-4">
                <h2 className="text-md ">Software enginneer at youtube</h2>
                

                </div>
        </div>
        <p className='text-justify mt-2 text-sm/6 text-white'>Date</p>
                <p className='text-justify mt-2 text-sm/6 text-white/50'> At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant is dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.</p>
        </div>    





        <div className="bg-slate-900 flex flex-col justify-start max-w-5xl w-full text-white rounded-md shadow-lg p-8 border border-slate-900">
      <div className='flex items-center'>
      <img src={img13}width={30} height={30} alt="" />

            <div className=" ml-4">
                <h2 className="text-md ">Junior software enginneer at Apple </h2>
                

                </div>
        </div>
        <p className='text-justify mt-2 text-sm/6 text-white'>Date</p>
                <p className='text-justify mt-2 text-sm/6 text-white/50'> During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.</p>
        </div>    



        
    </div>
  )
}

export default Card
