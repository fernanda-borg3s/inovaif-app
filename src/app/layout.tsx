import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InovaIF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
     <head>
    <link rel="icon" type="image/svg+xml" href="./img/Logo.png" />
    
  </head>
      <body className={inter.className} style={{background:'#f4f4f4', margin:"0px"}}>
        {children}</body>
    </html>
  )
}
