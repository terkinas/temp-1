import { FaAngleRight } from "react-icons/fa";


export default function Button({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded p-px text-xs font-semibold leading-6  text-white inline-block
        lg:text-sm lg:leading-7 lg:px-6 lg:py-2 lg:rounded lg:shadow-3xl lg:shadow-zinc-900 lg:font-bold lg:tracking-wider lg:transition-transform lg:duration-300 lg:transform"
        {...props}>
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 
            lg:bg-transparent lg:ring-0
            ">
                <span>
                    {children}
                </span>
                <FaAngleRight /> 
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
  );
}