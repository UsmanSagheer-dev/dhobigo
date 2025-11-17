"use client"
import React from 'react'
import Header from '../../components/Header'
import Sidebar from './components/Sidebar'
import styles from './dhobi-shell.module.css'
import BottomTab from './BottomTab'

export default function DhobiShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>

      <div className={styles.content}>
        <Header />

        <main className={styles.main}>{children}</main>

        <BottomTab />
      </div>
    </div>
  )
}
