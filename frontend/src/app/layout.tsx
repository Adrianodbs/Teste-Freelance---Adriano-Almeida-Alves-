import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './styles/globals.scss'
import Header from './components/Header'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Halogenn',
  description: 'Teste técnico LinkLab'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
