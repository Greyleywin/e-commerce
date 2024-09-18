import './globals.css'
import { Inter } from 'next/font/google'
import { CartProvider } from '@/context/CartContext'
import { SessionProvider } from 'next-auth/react'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LadiesEmpire',
  description: 'Ladies Empire is a premier online shopping platform dedicated to empowering women through fashion and self-expression. Our curated collection features a wide range of stylish and affordable clothing, accessories, and beauty products, catering to every taste and occasion.',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>LadiesEmpire</title>
      </head>
      <body className={inter.className}>
      <SessionProvider>
        <CartProvider>
          <header>
            {/* Add navigation here */}
          </header>
          <main>{children}</main>
          <footer>
            {/* Add footer content here */}
          </footer>
        </CartProvider>
      </SessionProvider>
      </body>
      </html>
  )
}