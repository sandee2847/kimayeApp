import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kimale Home Page',
  description: 'Generated by Sandeep Sharma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.51.6/dist/full.css" rel="stylesheet" type="text/css" />
        <Script src="https://cdn.tailwindcss.com"></Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}