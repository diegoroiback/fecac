import Link from 'next/link';
import { IoIosArrowDroprightCircle } from "react-icons/io";

import styles from './styles.module.scss'

import { ExperiencesList } from '@/data/Experiences'

const Experiences = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title} data-aos="fade-up">Aquí comienza tu experiencia</h2>
        <div className={styles.list}>
          {ExperiencesList.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.content} data-aos="flip-right">
                <p className={styles.name}>{item.title}</p>
                <p className={styles.text}>{item.text}</p>
                <Link href={item.url} className={styles.btn}>{item.btnText} <IoIosArrowDroprightCircle /></Link>
              </div>
              <div className={styles.image} data-aos="flip-left">
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experiences