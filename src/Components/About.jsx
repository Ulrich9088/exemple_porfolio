
import img14 from '../assets/about-me.png'

const About = () => {
  return (
    <div id='About' className="lg:px-20 px-10 lg:py-0 py-15  gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
    <img src= {img14} width={500} height={500} alt="" />
   
    <div       className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-black ">
        <h1  data-aos='fade-right' className="text-[40px] mb-8 leading-normal uppercase"> About <span className='font-bold'>Me</span> </h1>
         <p  data-aos='fade-left' className="text-slate-600 " >I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
         <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
                <div className="flex space-x-2">
                    <button className='neno-button shadow-xl hover:shadow-blue-800/50 text-black border-2 hover:bg-blue-800 border-blue-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden '>Resume</button>
                   

                </div>
                
            </div>
         </div>


    </div>
   

</div>

  )
}

export default About
