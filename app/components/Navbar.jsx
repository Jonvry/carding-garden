"use client"
import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const toggleClose = () => {
      setIsOpen(false);
    };

  return (
    <nav className={`navBar text-white px-4 sm:px-8 md:px-12 lg:px-16 ${isOpen ? 'opened' : ''}`}>
        <Image src="/logo2.svg" width="40" height="40" alt="logo"/>
                <div className={`navList-menu text-lg bg-emerald-700 text-white font-medium md:text-base ${isOpen ? 'opened' : ''}`}>
                    <Link href="#services"onClick={toggleClose} >Services</Link>
                    <Link href="#testimonial" onClick={toggleClose} >Testimonial</Link>
                    <Link href="#gallery" onClick={toggleClose} >Gallery</Link>
                    <Link href="#faq" onClick={toggleClose} >FAQ</Link>
                    <Link href="#contactus" onClick={toggleClose} >Contact us</Link>
                </div>
                <button type="button" aria-label="menu" onClick={toggleMenu} className={`menu md:hidden${isOpen ? 'opened' : ''}`}>
                        <svg width="40" height="40" viewBox="0 0 100 100">
                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                </button>
    </nav>
  )
}
