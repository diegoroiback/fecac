import React, { useState } from "react";

import Link from 'next/link'
import { NavHeader } from '@/data/Nav'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import { IoFlashOutline } from "react-icons/io5";

import styles from './styles.module.scss'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = (index) => {
    if (window.innerWidth < 1100) {
      setActiveDropdown((prev) => (prev === index ? null : index));
    }
  };

  return (
    <nav className={styles.nav}>
      <button className={styles.menu_btn} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`${styles.list} ${menuOpen ? styles.list_active : ""}`} >
        <button className={styles.close_btn} onClick={toggleMenu}>
          <IoMdClose />
        </button>
        {NavHeader.map((item, index) => (
          <div key={index} className={styles.item}>
            {item.dropdown ? (
              <>
                <button className={styles.link} onClick={() => handleDropdownToggle(index)}>{item.text} <MdOutlineKeyboardArrowDown /></button>
                <ul className={`${styles.dropdown} ${
                    activeDropdown === index ? styles.dropdown_active : ""
                  }`}>
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