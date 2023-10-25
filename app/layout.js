import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Carding Garden | Garden Maintenance',
  description: 'Our gardening services are your key to a thriving and beautiful outdoor space. Whether you have a lush garden, a cozy backyard, or a simple balcony, we offer a range of professional gardening solutions to meet your needs. ',
  themeColor: '#047857',
  keywords: "Gardening Services, Garden Maintenance",

  alternates: {
    canonical: "https://carding-garden.vercel.app/",
    languages: {
      'en-US': "https://carding-garden.vercel.app/en-US",
    },
  },

  openGraph: {
      siteName: 'Carding Garden',
      images: [
          {
            url: '/carding.png',
            width: 800,
            height: 600,
          },
          {
            url: '/carding.png',
            width: 1800,
            height: 1600,
            alt: 'Hero',
          },
        ],
        locale: 'en_US',
        type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-16">
      <body className={inter .className}>
          <main>
            {children}
          </main>
      </body>
    </html>
  )
}
