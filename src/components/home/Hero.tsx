// import { IoArrowDownCircle } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Button from "../design/Button";



export default function Hero() {
    return (
        <section id="#hero" className="z-0 relative overflow-hidden">

        {/* rings */}
        <div className="z-0 absolute top-1/2 -left-24 lg:-left-4 lg:scale-[200%]">
            <div className="z-0 shadow-lg absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-0 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="z-0 shadow-lg absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-0 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="z-0 shadow-lg absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-0 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

         {/* background gradient */}
         <span className="z-10 w-full absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-slate-300">
        </span>


        <div className="container relative mx-auto px-4 z-50">
            <div className="flex flex-col gap-4 items-center justify-center min-h-fit h-[calc(94vh)]">
                <h1 className="text-4xl font-bold text-center
                md:text-5xl lg:text-6xl text-custom-gray-900 max-w-5xl
                ">I{`'`}m Arnoldas, a freelance developer from 
                    <span className="inline bg-gradient-to-r from-green-500 to-yellow-400 inline-block text-transparent bg-clip-text pl-1">Lithuania.</span></h1>
                <p className="text-sm md:text-lg text-custom-gray-400 text-center">
                I specialize in building fast, user-friendly websites that combine clean code with intuitive design.
                </p>

                <Button>Get in touch</Button>
            </div>

            

            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                {/* <span className="w-4 h-4 bg-custom-gray-900 block rounded-full animate-bounce">

                </span> */}
                <MdOutlineKeyboardDoubleArrowDown   className="text-2xl animate-bounce" /> 
            </button>


        
        </div>

       



        </section>
    )
}