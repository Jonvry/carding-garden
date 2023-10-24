import Image from "next/image"

export default function Choose() {
  return (
    <div className="">
        <h2 className="text-cyan-950 font-bold">Why <span className="text-emerald-700">Choose Us</span></h2>
         <p className="text-zinc-900">Our experienced team of gardeners is dedicated to enhancing the health and aesthetics of your greenery.</p>
           <div className="mt-10 flex flex-col gap-12 lg:gap-4 lg:flex-row">
            <section className="w-full grid gap-4 lg:w-[50%]">
                <Card src="/Check.svg" heading="Experience and Expertise" text="A reputable landscaping service should have a team of experienced and skilled professionals."/>
                <Card src="/Check.svg" heading="Customized Approach" text="A good landscaping service will take the time to understand your specific needs and preferences."/>
                <Card src="/Check.svg" heading="Transparent Pricing" text="Clear and transparent pricing, as well as detailed quotes and contracts, are important."/>
            </section>

            <section className="w-full lg:w-[50%] grid grid-cols-2 grid-rows-2 gap-4">
                <div className="bg-slate-100 p-4 rounded-lg">
                    <h2 className="text-cyan-950 font-medium">11<span className="text-emerald-700">+</span></h2>
                    <p className="text-zinc-900">Years Experience</p>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg">
                     <h2 className="text-cyan-950 font-medium">209<span className="text-emerald-700">+</span></h2>
                     <p className="text-zinc-900">Products</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                     <h2 className="text-cyan-950 font-medium">3k<span className="text-emerald-700">+</span></h2>
                     <p className="text-zinc-900">Satisfied Clients</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <h2 className="text-cyan-950 font-medium">28<span className="text-emerald-700">+</span></h2>
                    <p className="text-zinc-900">Team Members</p>
                </div>
            </section>

        </div>   
    </div>
  )
}

const Card = (props) => {
    return (
        <div className="flex gap-4">
            <Image className="self-start mt-1" src={props.src} width="20" height="10"/>
            <div className="">
                <h3 className="font-semibold text-cyan-950 text-2xl">{props.heading}</h3>
                <p className="text-zinc-600">{props.text}</p>
            </div>
        </div>
    )  
}
