'use client'
import '@/styles/globals.css'


import Blobs from '@/components/Blobs';

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


export const metadata = {
  title: 'Internet Toolkit',
  description: 'A Curated Compilation of Mighty Online Tools!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
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
