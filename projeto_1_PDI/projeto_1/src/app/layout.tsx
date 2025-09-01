"use client"

import "./globals.css"
import { ThemeProvider } from "next-themes"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  useEffect(() => {
    router.push("/login")
  }, [router])

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
