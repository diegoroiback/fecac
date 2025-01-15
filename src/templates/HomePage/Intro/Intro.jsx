import Link from 'next/link';
import { IoIosArrowDroprightCircle } from "react-icons/io";

import styles from './styles.module.scss'


const Intro = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image} data-aos="fade-right">
          <img src="/images/festival-cerveza-cartagena.png" alt="" />
        </div>
        <div className={styles.content} data-aos="fade-left">
          <h1 className={styles.title}>Festival de cerveza Cartagena 2025</h1>
          <p className={styles.text}>
            ¡Prepárate para vivir una experiencia única en el corazón del Caribe!
            <br />
            <br />
            El Festival de Cerveza Artesanal del Caribe es mucho más que un evento, es una celebración de la creatividad, la pasión y la tradición cervecera y gastronomica de nuestra región.</p>
          <Link href={'/'} className={styles.btn}>Descubre más <IoIosArrowDroprightCircle /></Link>
        </div>
      </div>
    </div>
  )
}

export default Intro