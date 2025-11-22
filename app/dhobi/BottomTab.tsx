"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './dhobi-shell.module.css'
import { Backpack, House, Package, User } from 'lucide-react'

export default function BottomTab() {
  const pathname = usePathname() || ''

  const tabs = [
    { href: '/dhobi', icon: <House />, exact: true },
    { href: '/dhobi/orders', icon: <Backpack /> },
    { href: '/dhobi/offers', icon: <Package /> },
    { href: '/dhobi/profile', icon: <User /> },
  ]
  const normalize = (p: string) => (p.endsWith('/') && p.length > 1 ? p.slice(0, -1) : p)
  const pathnameN = normalize(pathname)

  return (
    <nav className={`${styles.bottomTab} dark:border dark:border-textColor `} aria-label="Mobile navigation">
      {tabs.map((t) => {
        const hrefN = normalize(t.href)
        const isActive = t.exact
          ? pathnameN === hrefN
          : pathnameN === hrefN || pathnameN.startsWith(hrefN + '/')

        const className = isActive ? `${styles.tabItem} ${styles.tabItemActive}` : styles.tabItem

        return (
          <Link key={t.href} href={t.href} className={className} aria-label={t.href}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{t.icon}</span>
          </Link>
        )
      })}
    </nav>
  )
}
