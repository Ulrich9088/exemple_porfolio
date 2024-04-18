import img16 from '../assets/shadcn.jpeg'

const Testimonial = () => {
  return (

    <div id='' className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos='fade-right' className="text-6xl font-semibold mb-20 leading-normal upercase text-slate-500"> My Testimonial</h1>
      <div className="flex space-x-4 max-w-5xl  ">

        <div className=" h-full  bg-white/75 p-8 rounded-xl text-center ">
        <img src= {img16} className='h-20 w-20 rounded-full object-cover inline-block border-2 border-gray-700 bg-opacity-10 items-center ' alt="" />
        <p className='text-sm leading-7 my-3 font-light opacity-50'>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
        <span className='inline-flex h-1 w-20 rounded bg-black mt-2'></span>
        <p className='bold-font tracking-wider mt-3'>Evren Shah</p>
        <p className='bold-font font-light opacity-50  mt-3'>Designer</p>
        </div>


        <div className=" h-full bg-slate-700 p-8 rounded-xl text-center ">
        <img src= {img16}  className='h-20 w-20 rounded-full object-cover inline-block border-2 border-gray-700 bg-opacity-10 items-center ' alt="" /> 
        <p className='text-white text-sm leading-7 my-3 '>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
        <span className='inline-flex h-1 w-20 rounded bg-white mt-2'></span>
        <p className='bold-font text-white mt-3'>Flora Sheen</p>
        <p className='bold-font text-white  mt-3'>Designer</p>
        </div>

        <div className="h-full bg-white/75 p-8 rounded-xl text-center ">
        <img src= {img16} className='h-20 w-20 rounded-full object-cover inline-block border-2 border-gray-700 bg-opacity-10 items-center ' alt="" />
        <p className='text-sm leading-7 my-3 font-light opacity-50'>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
        <span className='inline-flex h-1 w-20 rounded bg-black mt-2'></span>
        <p className='bold-font mt-3'>Evren Shah</p>
        <p className='bold-font font-light opacity-50  mt-3'>Designer</p>
        </div>
      
    </div>
    </div>
  )
}

export default Testimonial
