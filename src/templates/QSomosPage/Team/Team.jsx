import Link from 'next/link';
import { IoIosArrowDroprightCircle } from "react-icons/io";

import styles from './styles.module.scss'


const Experiences = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title} data-aos="fade-up">¿Quiénes Somos?</h2>
        <div className={styles.left} data-aos="flip-left">
          <div className={styles.content}>
            <h3 className={styles.name}>Juan Carlos</h3>
            <p className={styles.text}>
            El amor por la cerveza ha llevado a Joana a cruzar fronteras, explorando y aprendiendo de la cultura cervecera en diferentes rincones del mundo. Este proyecto es la culminación de su sueño: convertir la ciudad en un referente para los amantes de la cerveza artesanal.</p>
          </div>
          <div className={styles.img}>
            <img src="/images/experiencia.jpg" alt="" />
          </div>
        </div>
        <div className={styles.right} data-aos="flip-right">
          <div className={styles.img}>
            <img src="/images/experiencia.jpg" alt="" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.name}>Joana</h3>
            <p className={styles.text}>
            El amor por la cerveza ha llevado a Joana a cruzar fronteras, explorando y aprendiendo de la cultura cervecera en diferentes rincones del mundo. Este proyecto es la culminación de su sueño: convertir la ciudad en un referente para los amantes de la cerveza artesanal.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences