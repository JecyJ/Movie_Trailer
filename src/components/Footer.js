import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
    weight: '400',
    subsets: ['latin'],
  })

const Footer = () => {
  return (
    <section className="w-full h-auto pt-4 border-top border-t-2 border-t-slate-500 rounded-full">
        <div className="text-center max-w-[600px] m-auto">
            <h1 className={`text-white font-extralight text-xl ${pacifico.className}`}>Created by Jecy Jehu</h1>
            <h2 className="text-gray-500">Moviedb Trailer</h2>
        </div>
    </section>
  )
}

export default Footer;