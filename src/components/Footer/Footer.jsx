import React from 'react'
import Link from 'next/link'
import Newsletter from '@/components/Newsletter/Newsletter'
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { NavFooter } from '@/data/Nav'
import styles from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.newsletter}>
          <Newsletter />
        </div>
        <div className={styles.logo}>
          <img src="/images/logo-footer.png" alt="" />
        </div>
        <div className={styles.menu}>
          {NavFooter.map((item, index) => (
            <div key={index} className={styles.menu_item}>
              <Link href={item.url} className={styles.menu_link}>{item.text}</Link>
            </div>
          ))}
        </div>
        <div className={styles.social}>
          <div className={styles.social_item}>
            <Link href='/' className={styles.social_link}><FaFacebookF /></Link>
          </div>
          <div className={styles.social_item}>
            <Link href='/' className={styles.social_link}><FaInstagram /></Link>
          </div>
        </div>
        <div className={styles.rights}>
          <p className={styles.rights_text}>© 2025 Lift Media. All Rights Reserved. </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer