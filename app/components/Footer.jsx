import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-700 text-white p-4 pb-4 py-12 sm:p-8 sm:pb-4 md:p-12 md:pb-4">
        <div className="max-w-[1280px] m-auto">
            <div className="flex flex-col gap-8 md:flex-row">
                <div className="grid gap-4 basis-[40%]">
                    <h3 className="font-bold text-2xl">LOGO</h3>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Morbi sit amet neque tortor. 
                    </p>
                        <div className="flex items-center gap-4">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <Image src="/facebook-logo.svg" width="20" height="20" alt="facebook icon"/>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <Image src="/instagram-logo.svg" width="20" height="20" alt="instagram icon"/>
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <Image src="/x-logo.svg" width="20" height="20" alt="twitter icon"/>
                            </a>       
                        </div>
                </div>
                <div className="grid gap-1 basis-[30%]">
                    <h3 className="font-semibold">Contact Us</h3>
                        <div className="mt-3 flex items-center gap-4 lg:mt-0">
                            <Image src="/mail.svg" width="20" height="20" alt="email icon"/>
                            <p>sample@email.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src="/location.svg" width="20" height="20" alt="location icon"/>
                            <p>Manila, Phillipines</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src="/phone.svg" width="20" height="20" alt="phone icon"/>
                            <p><Link href="tel:+987-123-456">987-123-456</Link></p>
                        </div>
                </div>
                <div className="grid gap-1 basis-[30%]">
                    <h3 className="mb-3 font-semibold">Quick Links</h3>
                    <Link href="#services">Services</Link>
                    <Link href="#gallery">Testimonial</Link>
                    <Link href="#testimonial">Gallery</Link>
                    <Link href="#faq">FAQ</Link>
                    <Link href="#contactus">Contact us</Link>
                </div>
            </div>
                <div className="w-full h-[.10rem] bg-white my-4"></div>
                <p className="text-center"><small>&#169; {currentYear} Carding Garden. All rights reserved.</small></p>
        </div>        
    </footer>
  )
}
