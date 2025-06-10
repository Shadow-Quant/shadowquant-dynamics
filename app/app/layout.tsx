import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'ShadowQuant Dynamics',
  description: 'Ruthless FinTech + AI Empire by Lekhan ⚡',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
