import { casinoHomepage, vietoveHomepage } from "@/assets"
import { FaTelegramPlane } from "react-icons/fa"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6"
import { FiGithub } from "react-icons/fi"

export const navigation = [
    {
        id: 0,
        title: 'Works',
        link: '/projects'
    },
    {
        id: 1,
        title: 'Contact',
        link: '/contact'
    },
]

export const projects = [
    {
        id: 0,
        title: 'Betitfy.com',
        description: 'Online Casino + Crypto Payments',
        imageSrc: 'casino-homepage.png',
        imageSource: casinoHomepage
    },
    {
        id: 1,
        title: 'Vietove.lt',
        description: 'Visit places in Lithuania',
        imageSrc: 'vietove-homepage.png',
        imageSource: vietoveHomepage
    }

]

export const socials = [
    {
        id: 0,
        title: 'GitHub',
        link: '',
        icon: <FiGithub  />
    },
    {
        id: 1,
        title: 'LinkedIn',
        link: '',
        icon: <FaLinkedinIn /> 
    },
    {
        id: 2,
        title: 'Facebook',
        link: '',
        icon: <FaFacebookF />
    },
    {
        id: 3,
        title: 'Telegram',
        link: '',
        icon: <FaTelegramPlane />
    }    
]

// https://isabelleparadis.com/