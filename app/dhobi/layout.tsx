import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'

export const metadata = {
  title: 'Dhobi',
}

export default function DhobiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '24px' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}
