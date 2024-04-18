import {Link} from 'react-scroll';
import logo from '../assets/Untitled.png';
import {Download,Menu,History } from 'lucide-react';
import { useState } from 'react';

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-100 transition ">
        <ul className='text-center text-xl p-20'>
            <Link spy={true} smooth={true} to="About Me">
            <li className='my-4 py-4 border-b border-slate-50 hover:bg-slate-50 hover:rounded'> About Me</li>
            </Link>
            <Link spy={true} smooth={true}  to="Projects">
            <li className='my-4 py-4 border-b border-slate-50 hover:bg-slate-50 hover:rounded'> Projects</li>
            </Link>
            <Link spy={true} smooth={true}  to="Contact Me">
            <li className='my-4 py-4 border-b border-slate-50 hover:bg-slate-50 hover:rounded'> Contact Me</li>
            </Link>
            <Link spy={true} smooth={true}  to=" Skills">
            <li className='my-4 py-4 border-b border-slate-50 hover:bg-slate-50 hover:rounded'> Skills</li>
            </Link>
        </ul>

    </div>
    
    </>
  return (
    <nav>
        <div className='h-10vh flex justify-between  z-50 text-black lg:py-5 px-20 py-4 border-b border-slate-200'>
            <div className='flex items-center flex-1'>
                <img src={logo} alt="Logo" className='mr-2' />
                <span className='text-xl font-bold'>Personal</span>
            </div>
            <div className='lg:flex md:flex lg:flex-1 items-center justify-center font-normal hidden'>
                <div className='flex-10'>
                <ul className='flex gap-8 mr-16 text-[16px] justify-center '>
                <Link spy={true} smooth={true}  to="About Me">
            <li className='hover:text-blue-600 transition border-b-2 border-slate-900 hover:border-blue-600 cursor-pointer'> About Me</li>
            </Link>
            <Link spy={true} smooth={true}  to="Projects">
            <li className='hover:text-blue-600 transition border-b-2 border-slate-900 hover:border-blue-600 cursor-pointer'> Projects</li>
            </Link>
            <Link spy={true} smooth={true}  to="Contact Me">
            <li className='hover:text-blue-600 transition border-b-2 border-slate-900 hover:border-blue-600 cursor-pointer'> Contact Me</li>
            </Link>
            <Link spy={true} smooth={true}  to=" Skills">
            <li className='hover:text-blue-600 transition border-b-2 border-slate-900 hover:border-blue-600 cursor-pointer'> Skills</li>
            </Link>

            <button className='bg-black text-white hover:bg-slate-800 py-2 px-4 flex items-end rounded mr-2'>  Resume <Download /> </button>
            </ul>
           
                </div>
            </div>
            <div>
                {click && content}

            </div>

            <button className='block sm:hidden transition'onClick = {handleClick}>
                {click ? <History /> : <Menu />}
            </button>
        </div>

    </nav>
  )
}

export default Nav
