import { StrictMode } from 'react'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js App Router Demo</title>
        <meta name="description" content="A demonstration of Next.js App Router features" />
      </head>
      <body>
        <StrictMode>
          {children}
        </StrictMode>
      </body>
    </html>
  )
}