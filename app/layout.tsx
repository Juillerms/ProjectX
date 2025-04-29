import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Edu Next',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          {/* Header Fixo */}
          <header className="sticky top-0 z-50 px-4 lg:px-6 h-14 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Link className="flex items-center justify-center" href="/">
              <span className="font-bold text-lg sm:text-xl lg:text-2xl">EduNext</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link className="text-sm sm:text-base font-medium hover:underline underline-offset-4" href="/about">
                About
              </Link>
              <Link className="text-sm sm:text-base font-medium hover:underline underline-offset-4" href="/courses">
                Courses
              </Link>
              <Link className="text-sm sm:text-base font-medium hover:underline underline-offset-4" href="/login">
                Login
              </Link>
            </nav>
          </header>
          
          {/* Conteúdo das páginas */}
          {children}
          
          {/* Footer */}
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 EduNext. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href="/terms">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
                Privacy
              </Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  )
}
