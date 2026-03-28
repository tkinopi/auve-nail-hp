import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NailSalon AUVÉ | 福岡・天神大名のネイルサロン',
  description: '福岡市天神大名のプライベートネイルサロン「AUVÉ（オーヴェ）」。丁寧なカウンセリングとこだわりのデザインで、あなただけの指先を。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
