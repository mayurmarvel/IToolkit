import '../styles/globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Internet Toolkit',
  description: 'A Curated Compilation of Mighty Online Tools!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className="blobWrapper">
          {children}
        </div>
      </body>
    </html>
  )
}
