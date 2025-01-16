import React from 'react'
import Nav from '@/components/Nav/Nav'
import Link from 'next/link'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'

import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.section}>
      <div className={styles.container}>
        <Nav />
        <div className={styles.logo}>
          <Link href='/'>
            <img src="/images/logo-fecac-header.png" alt="" />
          </Link>
        </div>
      </div>
      <ScrollToTop />
    </header>
  )
}

export default Header