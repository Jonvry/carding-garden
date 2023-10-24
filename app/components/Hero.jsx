import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero h-screen grid place-items-center justify-center px-4 sm:px-12">
        <div className="grid place-items-center justify-center">
            <h1 className="text-white font-bold text-center">Start loving Green</h1>
                <p className="text-wrap text-white font-normal text-center text-lg">We'll transform your outdoor area into a vibrant and inviting oasis,</p>
                <p className="text-wrap text-white font-normal text-center text-lg">ensuring it remains a source of pride and relaxation.</p>
            <div className="flex items-center gap-4 mt-4">
                <Link className="text-white bg-emerald-700 px-4 py-2 rounded-md" href="/">Get Started</Link>
                <Link className="text-emerald-700 bg-white px-4 py-2 rounded-md" href="/">Learn More</Link>
            </div>
        </div>
    </section>
  )
}
