import Link from 'next/link';
import { IoIosArrowDroprightCircle } from "react-icons/io";

import styles from './styles.module.scss'


const Intro = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content} data-aos="fade-left">
          <p className={styles.text}>
          Bienvenidos a una experiencia única que celebra lo mejor del Caribe y del mundo cervecero. Este año, el Festival de Cerveza Artesanal del Caribe te invita a recorrer espacios diseñados para despertar tus sentidos, descubrir nuevas historias y conectar con la pasión detrás de cada sorbo y bocado.</p>
        </div>
      </div>
    </div>
  )
}

export default Intro