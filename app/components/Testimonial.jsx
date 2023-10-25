import Image from "next/image"

export default function Testimonial() {
  return (
    <section className="overflow-hidden" id="testimonial">
        <h2 className="text-cyan-950 font-bold">Our  <span className="text-emerald-700">Clients Say</span></h2>
            <div className="snap-x overflow-x-auto mt-10 lg:overflow-hidden">
                <div className='flex gap-4 lg:grid lg:gap-4 lg:grid-cols-2'>
                    <Card src="/avatar1.webp" name="Michael J." text="I couldn't be happier with the garden services provided. They transformed my overgrown backyard into a beautiful and tranquil oasis. Their team was professional, efficient, and truly exceeded my expectations. I now have a gorgeous space to relax and enjoy. Thank you!" />
                    <Card src="/avatar4.webp" name="David V." text="From the initial consultation to the final cleanup, Carding Garden Services provided top-notch care for our garden. Our roses have never looked healthier, and we're beyond pleased with the overall service. Thank you, Carding Garden and the entire team" />
                    <Card src="/avatar3.webp" name="Carmela K." text="Carding Garden Landscapes has completely transformed our backyard into a stunning haven. We're amazed at how they brought our vision to life. The team's dedication and creativity are truly commendable. Highly recommended" />
                    <Card src="/avatar2.webp" name="Sarah J." text="I can't say enough good things about Nature's Beauty Gardens. Their team is not only skilled but also passionate about what they do. Our garden has never looked more vibrant and inviting. A big thank you to Carding Garden" />
                </div>
            </div>

    </section>
  )
}

const Card = (props) => {
    return (
        <div className='snap-start bg-blue-50 p-6 rounded-2xl shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] min-w-[22.5rem] lg:min-w-full'>
            <div className='flex items-center gap-4'>
                <Image className="aspect-square rounded-[50%]" src={props.src} width="50" height="50" alt="avatar"/>
                    <div>
                        <h3 className="text-cyan-950 font-semibold">{props.name}</h3>
                        <Image className="w-full" src="/star.svg" width="120" height="80" alt="star"/>
                    </div>
            </div>
                <p className="mt-4 text-zinc-600">{props.text}</p>
        </div>
       
    )
}
