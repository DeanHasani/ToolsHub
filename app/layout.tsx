import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'ToolsHub - Free Online Calculators & Converters',
    template: '%s | ToolsHub',
  },
  description: 'Free online percentage calculator, unit converters, and calorie estimator. Fast, simple tools -- no sign-up required.',
  keywords: ['percentage calculator', 'unit converter', 'mass converter', 'calorie estimator', 'length converter', 'temperature converter'],
  authors: [{ name: 'ToolsHub' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ToolsHub',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f0eb',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-6362562001289172" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6362562001289172"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
