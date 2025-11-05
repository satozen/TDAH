/**
 * Layout principal de l'application Next.js
 * Configure les métadonnées et le style global avec Tailwind CSS
 */

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TDAH Entrepreneur: Doublez votre productivité en 3 semaines',
  description: 'Entrepreneurs TDAH: 97$/mois pour éviter 123K$/an de pertes. Programme IA + expertise Mme Pierrette Desrosiers. Résultats prouvés en semaines, pas en années.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  keywords: ['TDAH', 'entrepreneur', 'TDAH entrepreneurial', 'programme TDAH', 'coaching TDAH', 'Pierrette Desrosiers', 'personnalisé', 'IA', 'productivité', 'performance'],
  authors: [{ name: 'TDAH chez l\'Entrepreneur' }],
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    url: 'https://tdah-entrepreneur.com',
    siteName: 'TDAH chez l\'Entrepreneur',
    title: '🧠 Entrepreneurs TDAH: Doublez votre productivité en 3 semaines',
    description: '97$/mois pour éviter 123K$/an de pertes. IA personnalisée + expertise scientifique Mme Pierrette Desrosiers. Testez gratuitement.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'TDAH chez l\'Entrepreneur - Programme personnalisé',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🧠 Entrepreneurs TDAH: Doublez votre productivité en 3 semaines',
    description: '97$/mois vs 123K$/an de pertes. IA + expertise Mme Pierrette Desrosiers. ROI immédiat.',
    images: ['/og-image.svg'],
    creator: '@tdah_entrepreneur', // Remplacer par le vrai handle Twitter si applicable
  },
  robots: {
    index: true,
    follow: true,
  },
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

