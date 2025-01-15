import 'swiper/css';
import 'swiper/css/navigation';

import styles from './styles.module.scss'

const Text = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container} data-aos="zoom-in">
          <p className={styles.text}>
          <strong>MATCH</strong> conecta cervecerías artesanales y restaurantes locales para explorar las infinitas posibilidades de maridar cerveza y gastronomía.
          <br /><br />
          Descubre creaciones exclusivas de chefs que han diseñado platos y combinaciones pensadas para realzar los sabores únicos de nuestras cervezas.
          <br /><br />
          Disfruta de bocados especialmente preparados, acompañados por las mejores cervezas artesanales de la región, y vive una experiencia que solo podrás encontrar aquí.
          </p>
      </div>
    </div>
  )
}

export default Text