/**
 * Layout principal de l'application Next.js
 * Configure les métadonnées et le style global avec Tailwind CSS
 */

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TDAH chez l\'Entrepreneur - Programme personnalisé',
  description: 'Programme d\'apprentissage personnalisé pour entrepreneurs avec TDAH',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  )
}

