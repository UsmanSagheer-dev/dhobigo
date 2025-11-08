import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Sidebar from './components/Sidebar'

export const metadata = {
  title: 'Dhobi',
}

export default function DhobiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 260, borderRight: '1px solid #eee', background: '#fafafa' }}>
        <Sidebar />
      </aside>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />

        <main style={{ flex: 1, padding: 24, maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          {children}
        </main>

        {/* <Footer /> */}
      </div>
    </div>
  )
}
