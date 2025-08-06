import './globals.css'

export const metadata = {
  title: 'Getting Started',
  description: 'A comprehensive guide to getting started on Reach.Social',
  keywords: 'documentation, guide, launch, project management',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}