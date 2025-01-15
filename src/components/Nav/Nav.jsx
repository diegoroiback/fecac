import React from 'react'
import Link from 'next/link'
import { NavHeader } from '@/data/Nav'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoFlashOutline } from "react-icons/io5";

import styles from './styles.module.scss'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <button className={styles.menu_btn}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={styles.list}>
        {NavHeader.map((item, index) => (
          <div key={index} className={styles.item}>
            {item.dropdown ? (
              <>
                <button className={styles.link}>{item.text} <MdOutlineKeyboardArrowDown /></button>
                <ul className={styles.dropdown}>
                  {item.dropdown.map((element, index) => (
                    <li key={index} className={styles.dropdown_item}>
                      <Link href={element.url2} className={styles.dropdown_link}><IoFlashOutline /> {element.text2}</Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link href={item.url} className={styles.link}>{item.text}</Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Nav