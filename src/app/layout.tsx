import Link from "next/link"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-6 border-b px-8 py-4">
          <Link href="/">
            JobTrack
          </Link>

          <Link href="/dashboard">
            Dashboard
          </Link>

          <Link href="/applications">
            Applications
          </Link>
        </nav>

        {children}
      </body>
    </html>
  )
}