"use client"
import Image from "next/image"
import { useState } from "react";

const images = [
  "/pexels1.webp",
  "/pexels2.webp",
  "/pexels3.webp",
  "/pexels4.webp",
  "/pexels8.webp",
  "/pexels9.webp",
  "/pexels10.webp",
  "/pexels11.webp",
  "/pexels12.webp",
  "/pexels13.webp",
  "/pexels14.webp",
  "/pexels15.webp",
  "/pexels16.webp",
  "/pexels17.webp",
];

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <section className="" id="gallery">
        <h2 className="text-cyan-950 font-bold">Our <span className="text-emerald-700">Gallery</span></h2>
        <p>Services include planting, pruning, weeding, lawn care, landscaping, and more. </p>
        <div className="mt-10 grid grid-cols-1 gap-4 rounded-3xl lg:grid-rows-2 lg:grid-cols-3">

            <div className="relative flex items-center justify-center md:col-span-2 md:row-span-2">
              <button className="absolute left-4" onClick={prevImage}><Image className="rotate-180" src="/Arrow.svg" width="20" height="20"/></button>
                <Image  className="w-full h-full rounded-2xl" width="800" height="250" src={images[currentImage]} alt="gardenSlider" />
              <button className="absolute right-4" onClick={nextImage}><Image src="/Arrow.svg" width="20" height="20"/></button>
            </div>

              <Image className="w-full h-full rounded-2xl hidden lg:block" src="/pexels17.webp" width="300" height="150" alt="garden"/>
              <Image className="w-full h-full rounded-2xl hidden lg:block" src="/pexels2.webp" width="300" height="150" alt="garden"/>
        </div> 
    </section>
  )
}






