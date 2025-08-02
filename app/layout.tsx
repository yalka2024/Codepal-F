import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CodePal Platform',
  description: 'Advanced AI-powered development platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CodePal Platform</title>
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f8f9fa'
      }}>
        {children}
      </body>
    </html>
  )
}
