import React from 'react'
import DhobiShell from './DhobiShell'
import ReduxProvider from './ReduxProvider'

export const metadata = {
  title: 'Dhobi',
}

export default function DhobiLayout({ children }: { children: React.ReactNode }) {
  return (
    // wrap DhobiShell with Redux provider so all dhobi pages can access the store
    <ReduxProvider>
      <DhobiShell>{children}</DhobiShell>
    </ReduxProvider>
  )
}
