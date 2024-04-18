import img3 from '../assets/HTML5.png'
import img4 from '../assets/css3.png'
import img5 from '../assets/Untitled4.png'
import img6 from '../assets/php-logo.svg'
import img7 from '../assets/React_logo.png'
import img8 from '../assets/TAIL.png'
import img9 from '../assets/bootstrap.png'
import img10 from '../assets/Untitled2.png'
const Skills = () => {
  return (
    <div id='Skills' className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos='fade-right' className="text-6xl font-semibold mb-20 leading-normal upercase text-slate-500"> My skills</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <h2 data-aos='fade-up' className="flex flex-col text-[26px] flex items-center justify-center font-semibold text-slate-800 rounded-3xl h-36 w-44 border-2 border-blue-800 b_glow">
        <img src={img3}width={50} height={50} alt="" />
        HTML5</h2>
        <h2 data-aos='fade-down' className="flex flex-col text-[26px] flex items-center justify-center font-semibold text-blue-600 rounded-3xl h-36 w-44 border-2 border-blue-800 b_glow">
        <img src={img4}width={50} height={50} alt="" />CSS3</h2>
        <h2 data-aos='fade-up' className="flex flex-col text-[26px] flex items-center justify-center font-semibold text-slate-900 rounded-3xl h-36 w-44 border-2 border-blue-800 b_glow">
          <img src={img5}width={50} height={50} alt="" />Javascrpt</h2>
        <h2 data-aos='fade-down' className="flex flex-col text-[26px] flex items-center justify-center font-semibold text-blue-900 rounded-3xl h-36 w-44 border-2 border-blue-800 b_glow">
          <img src={img6}width={50} height={50} alt="" />PHP</h2>
        <h2 data-aos='fade-up' className="flex flex-col text-[26px] flex items-center justify-center font-semibold text-blue-500 rounded-3xl h-36 w-44 border-2 border-blue-800 b_glow">
        <img src={img7}width={70} height={70} alt="" />React JS</h2>
        <h2 data-aos='fade-down' className="flex flex-col text-[26px] flex items-center justify-center font-semibold text-blue-500 rounded-3xl h-36 w-44 border-2 border-blue-800 b_glow">
        <img src={img8}width={50} height={50} alt="" />Tailwinds </h2>
        <h2 data-aos='fade-up' className="flex flex-col text-[26px] flex items-center justify-center font-semibold text-violet-800 rounded-3xl h-36 w-44 border-2 border-blue-800 b_glow">
          <img src={img9}width={80} height={80} alt="" />Bootstrap</h2>
        <h2 data-aos='fade-down' className="flex flex-col text-[26px] flex items-center justify-center font-semibold text-slate-800 rounded-3xl h-36 w-44 border-2 border-blue-800 b_glow">
          <img src={img10}width={50} height={50} alt="" />Git</h2>
      </div>
      
    </div>
  )
}

export default Skills
