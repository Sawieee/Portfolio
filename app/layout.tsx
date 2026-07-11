import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marvin Jay Nilayan - Full-Stack Developer',
  description: 'Premium cyberpunk portfolio showcasing projects, skills, and experience in full-stack development and UI/UX design.',
  keywords: ['Developer', 'Designer', 'Portfolio', 'Full-Stack', 'React', 'Next.js'],
  authors: [{ name: 'Marvin Jay Nilayan' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Marvin Jay Nilayan - Full-Stack Developer',
    description: 'Check out my portfolio and latest projects',
    url: 'https://example.com',
    siteName: 'Marvin Jay Nilayan Portfolio',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
