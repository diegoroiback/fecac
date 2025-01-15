import Link from 'next/link';
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { MenuList } from '@/data/Menu'
import styles from './styles.module.scss'


const Menu = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title} data-aos="fade-up">Menú 2025</h2>
        <div className={styles.content}>
          {MenuList.map((item, index) => (
            <div key={index} className={styles.item} data-aos="fade-up">
              <p className={styles.name}>{item.title}</p>
              <p className={styles.text}>{item.text}</p>
              <p className={styles.text} dangerouslySetInnerHTML={{ __html: item.ingredients }}></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu