import { socials } from "@/constants";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className=" text-center p-4 flex flex-col-reverse gap-4">
            <p className="text-xs opacity-50">&copy; {new Date().getFullYear()} Arnoldas. All rights reserved.</p>
            <ul className="text-black flex flex-row items-center justify-center gap-2 text-custom-gray-900">
                {socials.map((social) => (
                    <a href={social.link} target="_blank" rel="noreferrer" key={social.id} className="p-2 bg-slate-200 rounded hover:bg-slate-300">
                        {social.icon}
                    </a>
                ))}
            </ul>
            <h6 className="text-xs opacity-50">Made with ❤️ in Lithuania</h6>
            <Link href={``}>Get in touch</Link>
        </footer>
    )
}