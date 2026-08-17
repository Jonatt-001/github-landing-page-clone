import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  metadataBase: new URL('https://geemobile.geefox.xyz'),
  title: {
    default: 'Gee Mobile - Build, Manage and Deploy Software from Your Phone',
    template: '%s | Gee Mobile by GeeFox',
  },
  description:
    'Gee Mobile is a mobile-first developer workspace by GeeFox for building, inspecting, editing, deploying and maintaining software from your phone.',
  keywords: [
    'Gee Mobile',
    'GeeFox',
    'mobile development',
    'mobile coding',
    'developer workspace',
    'code from phone',
    'build software from phone',
    'deploy from phone',
    'manage projects from phone',
    'mobile developer tools',
  ],
  applicationName: 'Gee Mobile',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/gee-mobile-icon.svg',
    shortcut: '/gee-mobile-icon.svg',
    apple: '/gee-mobile-icon.svg',
  },
  authors: [{ name: 'GeeFox', url: 'https://geefox.xyz' }],
  creator: 'GeeFox',
  publisher: 'GeeFox',
  alternates: {
    canonical: 'https://geemobile.geefox.xyz/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://geemobile.geefox.xyz/',
    siteName: 'Gee Mobile',
    title: 'Gee Mobile - Build, Manage and Deploy Software from Your Phone',
    description:
      'A mobile-first developer workspace by GeeFox for building, inspecting, editing, deploying and maintaining software from your phone.',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gee Mobile - Build, Manage and Deploy Software from Your Phone',
    description:
      'Build, inspect, edit, deploy and maintain software from your phone with Gee Mobile by GeeFox.',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Gee Mobile',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      url: 'https://geemobile.geefox.xyz/',
      description:
        'A mobile-first developer workspace for building, inspecting, editing, deploying and maintaining software from a phone.',
      creator: {
        '@type': 'Organization',
        name: 'GeeFox',
        url: 'https://geefox.xyz/',
      },
    },
    {
      '@type': 'WebSite',
      name: 'Gee Mobile',
      url: 'https://geemobile.geefox.xyz/',
      publisher: {
        '@type': 'Organization',
        name: 'GeeFox',
        url: 'https://geefox.xyz/',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
