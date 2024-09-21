import { projects } from "@/constants";
import Image from "next/image";


export default function Work() {
    return (
        <section className="py-20">
            <h2 className="text-3xl font-bold text-center">Selected Work</h2>

            <ul className="px-4 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 mt-8
            max-w-7xl mx-auto">
                {projects.map((project) => {
                    return (
                        <li key={project.id} className="rounded overflow-hidden">
                            <Image src={project.imageSource} alt={project.title} className="w-full rounded object-contain object-center" />
                            <div className="p-4">
                                <h3 className="text-xl lg:text-2xl font-semibold text-custom-gray-700">{project.title}</h3>
                                <p className="text-gray-500">{project.description}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}