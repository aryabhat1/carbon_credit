import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GCCE',
  description: 'Global Carbon Credit Exchange',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
        <Navbar />
        <h2>Global Cabron Credit Trading Exchange</h2>
        {children}
        <Footer />

        </div>
        </body>
    </html>
  )
}
