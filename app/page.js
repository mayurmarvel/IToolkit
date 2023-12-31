
import Image from 'next/image'
import ToolsTable from '@/components/ToolsTable'
import TitleDetails from '@/components/TitleDetails'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Internet Toolkit',
  description: 'A Curated Compilation of Mighty Online Tools!',
}

export default function Home() {
  return (
    <>
      <Analytics />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" />
    <TitleDetails />
    <ToolsTable />
    <Footer />  
    </>
  )
}
