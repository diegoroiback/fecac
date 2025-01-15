import React from 'react'
import Nav from '@/components/Nav/Nav'

import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.section}>
      <div className={styles.container}>
        <Nav />
        <div className={styles.logo}>
          <img src="/images/logo-fecac-header.png" alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header