import { Dancing_Script, Pacifico, Unna } from "next/font/google";
import {FcFilmReel} from 'react-icons/fc'



// const dancingscript = Dancing_Script({
//     weights: ["400", "500", "600", "700"],
//     subsets: ['latin'],
//   })

  const pacifico = Pacifico({
    weight: '400',
    subsets: ['latin'],
  })

//   const unna = Unna({
//     weight: ['400', '700',],
//     subsets: ['latin'],
//   })

const Navbar = () => {
  return (
    <section className={`w-full h-auto py-3 border-bottom border-b-2 border-b-slate-500 rounded-full`}>
        <div className='flex items-center justify-between max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] m-auto bg-transparent text-white'>
            <a href='/'>
                <h1 className={`flex items-center ${pacifico.className} text-4xl font-semibold`}>
                    <FcFilmReel size={80} />
                    Movie Trailer
                </h1>
            </a>
        </div>
    </section>
  )
}

export default Navbar;