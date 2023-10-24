import Image from "next/image"

export default function Services() {
  return (
    <div className="" id="services">  
        <h2 className="text-cyan-950 font-bold">Our <span className="text-emerald-700">Services</span></h2>
        <p className="text-zinc-600">
        We offer a range of professional gardening solutions to meet your needs.
        </p>
        <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card 
             src="/Consultant.svg"
             heading="Free Consultations " 
             text="Providing expert advice and guidance on landscape design, plant selection, and maintenance best practices."
            />
            <Card 
             src="/Gardener.svg" 
             heading="Hardscape Construction" 
             text="Hardscape features like patios, decks, walkways, retaining walls, and outdoor kitchens are designed and constructed to provide structure and functionality to your outdoor space."
            />
            <Card 
             src="/Lawn.svg" 
             heading="Lawn Care and Maintenance"         
             text="Services can include mowing, edging, fertilizing, aeration, overseeding, and weed control to keep your lawn healthy and attractive."
            />
            <Card 
             src="/Plantation.svg" 
             heading="Planting and Garden Installation" 
             text="This includes the selection and installation of various plants, trees, shrubs, and flowers to enhance the beauty and functionality of your landscape."
            />
            <Card 
             src="/Water.svg" 
             heading="Water Features"         
             text="Installation and maintenance of irrigation systems, as well as the creation of water features such as ponds, fountains, and waterfalls."
            />
            <Card  
             src="/Design.svg"
             heading="Landscape Design" 
             text="This involves creating a plan for your outdoor space, including the layout, plant selection, hardscape features (e.g., paths, patios), and other design elements."
            />
        </section>
    </div>
  )
}

const Card = (props) => {
    return (
        <div className="bg-green-50 w-full grid p-4 rounded-2xl">
            <div className="flex items-center justify-between gap-4">
                <h3 className="text-cyan-950 font-semibold text-2xl">{props.heading}</h3>
                <Image src={props.src} width="50" height="50"/>
            </div>
            <p className="mt-4 text-zinc-600">{props.text}</p>
        </div>
    )  
}