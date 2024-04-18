import {Github,Facebook,Instagram} from 'lucide-react';
import img2 from '../assets/Banner-Dd1hoPws.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
import {useEffect} from 'react';
const Banner = () => {
    useEffect(() => {
    AOS.init({
        easing: 'ease-in-quart',
        delay:0,
        duration:750
    })
},[1000])
  return (
  
        <div   className="  lg:px-50 px-10 lg:py-0 py-10  gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-35 flex flex-col justify-center lg:items-start items-center text-black ">
                <h1 data-aos='fade-right' className="text-[35px] mb-8 text-left">Hello I am <span className="text-slate-900 font-bold">Ulrich CHANGO. <br/> Frontend</span>  Developer 
                 Based in <span className="text-slate-900 font-bold">Benin</span></h1>
                 <p data-aos='fade-left' className="text-slate-600 " >I am Evren Shah Lorem Ipsum is simply dummy text 
                 of the printing and typesetting industry. Lorem
                 Ipsum has been the industry is standard dummy 
                  text ever since the 1500s, when an unknown  
                  printer took a galley of type and scrambled it
                  to specimen book.</p>
                  <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="" className="text-blue-600 hover:text-blue-500 rounded-full glow p-2">
                            <Github  className="text-[28px]" />
                            </a>
                            <a href="" className="text-blue-600 hover:text-blue-500 rounded-full glow p-2">
                            <Facebook  className="text-[28px]" />
                            </a>
                            <a href="" className="text-blue-600 hover:text-blue-500 rounded-full glow p-2">
                            <Instagram  className="text-[28px]" />
                            </a>
                           

                        </div>
                        
                    </div>
                 </div>


            </div>
            <img data-aos='fade-up' src= {img2} width={700} height={700} alt="" />
    
        </div>
      
   
  )
}

export default Banner
