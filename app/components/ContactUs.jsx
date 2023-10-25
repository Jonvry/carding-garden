import Image from "next/image"

export default function ContactUs() {
  return (
    <section className="py-12" id="contactus">
        <h2 className="text-cyan-950 font-bold">Get in <span className="text-emerald-700">Touch</span></h2>
        <div className="mt-10 flex flex-col gap-6 lg:flex-row">

            <div className="bg-gray-200 rounded-xl w-full lg:w-[60%] ">
              <Image className="w-full h-full rounded-xl" src="/gardening.webp" width="600" height="200" alt="garden tools"/>
            </div>
            
            <form className="border border-gray-300 p-4 rounded-xl grid gap-2 w-full m-auto lg:w-[22rem]">
                <label 
                 className="grid gap-1 text-zinc-500 font-medium text-lg"
                 htmlFor="name">name
                    <input 
                     className="border border-gray-300 outline-emerald-700 px-4 py-2 rounded-md" 
                     type="text" 
                     name="name" 
                     required
                    />
                </label>

                <label 
                 className="grid gap-1 text-zinc-500 font-medium text-lg" 
                 htmlFor="email">email
                    <input 
                     className="border border-gray-300 outline-emerald-700 px-4 py-2 rounded-md" 
                     type="email" 
                     name="email" 
                     required
                    />
                </label>

                <label 
                 className="grid gap-1 text-zinc-500 font-medium text-lg" 
                 htmlFor="message">message
                    <textarea 
                    className="border border-gray-300 outline-emerald-700 resize-none px-4 py-2 rounded-md" 
                    name="message" 
                    rows="4"
                    />
                </label>

                <button className="mt-6  text-white font-semibold bg-emerald-700 px-4 py-3 rounded-md"
                type="Submit"
                >Submit
                </button>
            </form>
        </div>
    </section>
  )
}
