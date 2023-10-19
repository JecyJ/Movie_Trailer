import {FcFilmReel} from 'react-icons/fc'
import {Link, useNavigate} from 'react-router-dom'
import {TbMenuOrder} from 'react-icons/tb'
import { useState } from 'react';
import {motion} from 'framer-motion'
import { UserAuth } from './context/AuthContext';


const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const {user, logOut} = UserAuth("")
  const navigate = useNavigate("")

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
        await logOut()
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}


  return (
    <section className={`absolute w-full h-auto py-1 z-[100]`}>
        <div className='flex items-center justify-between max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] m-auto bg-transparent text-white'>
            <Link to={'/'}>
                <h1 className='flex items-center text-xl sm:text-3xl text-blue-500 font-semibold font-pacifico'>
                    <FcFilmReel size={60} />
                    Movie Trailer
                </h1>
            </Link>
            <div className='hidden sm:flex items-center text-lg w-[250px] justify-between'>
              <Link to={'/movies'}>
                <h2 className='hover:text-blue-900'>Movies</h2>
              </Link>
              <Link to={'/toprated'}>
                <h2 className='hover:text-blue-900'>Film</h2>
              </Link>
              <Link to={'/series'}>
                <h2 className='hover:text-blue-900'>Series</h2>
              </Link>
            </div>
            {user?.email ? (
              <div className='flex items-center justify-between mx-3 space-x-3'>
                <Link to={'/account'}>
                  <button className='hover:text-black bg-blue-600 border hover:bg-blue-800 border-blue-600 py-1 w-20 '>Account</button>
                </Link>
                <button onClick={handleLogout} className='hover:text-black bg-blue-600 border hover:bg-blue-800 border-blue-600 py-1 w-20 '>log Out</button>
              </div>
            ) : (
              <div className='flex items-center justify-between mx-3 space-x-3'>
                <Link to={'/signup'}>
                  <button className='hover:text-black bg-blue-600 border hover:bg-blue-800 border-blue-600 py-1 w-20 '>Sign Up</button>
                </Link>
                <Link to={'/login'}>
                  <button className='hover:text-black bg-blue-600 border hover:bg-blue-800 border-blue-600 py-1 w-20 '>log In</button>
                </Link>
              </div>
            )}
            <div className="relative sm:hidden inline-block">
              <TbMenuOrder
                size={25}
                className='animate-pulse cursor-pointer text-blue-700'
                onMouseEnter={() => setIsHovered(true)}
                onClick={() => setIsHovered((prevIsHovered) => !prevIsHovered)}
                // onClick={() => setIsHovered(false)}
                // onMouseLeave={() => setIsHovered(false)}
              />
              {isHovered && (
                <motion.div 
                  initial={{opacity:0}}
                  animate={{opacity:1, transition:{duration:1.2}}}
                  exit={{opacity:0}}
                  className="absolute top-6 -left-14 text-xl bg-transparent p-2 rounded space-y-1 cursor-pointer"
                >
                  <Link to={'/movies'}>
                    <motion.h2
                    onClick={() => setIsHovered((prevIsHovered) => !prevIsHovered)}
                    whileHover={{scale:1.1, transition:{duration:0.2}}}
                    className='hover:text-blue-900'
                    >Movies</motion.h2>
                  </Link>
                  <Link to={'/toprated'}>
                    <motion.h2
                    onClick={() => setIsHovered((prevIsHovered) => !prevIsHovered)}
                    whileHover={{scale:1.1, transition:{duration:0.2}}}
                    className='hover:text-blue-900'
                    >Film</motion.h2>
                  </Link>
                  <Link to={'/series'}>
                    <motion.h2
                    onClick={() => setIsHovered((prevIsHovered) => !prevIsHovered)}
                     whileHover={{scale:1.1, transition:{duration:0.2}}}
                     className='hover:text-blue-900'
                     >Series</motion.h2>
                  </Link>
                </motion.div>
              )}
            </div>
        </div>
    </section>
  )
}

export default Navbar;