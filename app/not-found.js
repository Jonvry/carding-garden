import Link from 'next/link'
 
export default function NotFound() {
  return (
    <section className='bg-white w-full h-screen grid place-items-center'>
        <div className='text-center'>
            <h1 className='font-bold text-emerald-700'>404</h1>
            <h2 className='font-semibold text-cyan-950'>Page Not Found</h2>
            <p className='text-zinc-600'>Could not find requested resource</p>
            <Link className='underline text-emerald-700' href="/">Return Home</Link>
        </div>
    </section>
  )
}