import Link from 'next/link';
import { IoIosArrowDroprightCircle } from "react-icons/io";

import styles from './styles.module.scss'
import { SponsorsList } from '@/data/Sponsors'

const Sponsors = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title} data-aos="fade-up">Sponsors y colaboraciones</h2>
        <div className={styles.content} data-aos="fade-left">
          {SponsorsList.map((item, index) => (
            <div key={index} className={styles.item}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sponsors