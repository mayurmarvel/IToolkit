'use client'
import '@/styles/globals.css'



import Blobs from '@/components/Blobs';
import Head from 'next/head';

// const inter = Inter({ subsets: ['latin'] })
import Container from '@mui/material/Container';

import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';

const themeOptions = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgba(0, 0, 0,0.3)',
      paper: '#000',
    },
    primary: {
      main: 'rgba(0, 0, 0, 0)', 
    },
    secondary: {
      main: '#f50057',
    },
  
  },
  typography: {
    button: {
      textTransform: 'none',
      fontFamily: 'Press Start 2P'
    },
  }

});




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <ThemeProvider theme={themeOptions}>
      <body className="blobWrapper" >
        <Blobs />
      <Container  maxWidth="xl" >
          {children}
      </Container>
      </body>
      </ThemeProvider>
    </html>
  )
}
