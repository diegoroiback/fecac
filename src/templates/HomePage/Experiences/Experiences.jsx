import Link from 'next/link';
import { IoIosArrowDroprightCircle } from "react-icons/io";

import styles from './styles.module.scss'


const Experiences = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title} data-aos="fade-up">Aquí comienza tu experiencia</h2>
        <div className={styles.image} data-aos="flip-left">
          <img src="/images/experiencia.jpg" alt="" />
        </div>
        <div className={styles.content} data-aos="flip-right">
          <p className={styles.text}>
          Descubre, prueba y disfruta de las mejores cervezas y la exquisita gastronomía local en áreas de experiencia diseñadas creativamente para satisfacer todos los intereses y pasiones.</p>
          <Link href={'/'} className={styles.btn}>Leer más <IoIosArrowDroprightCircle /></Link>
        </div>
      </div>
    </div>
  )
}

export default Experiences