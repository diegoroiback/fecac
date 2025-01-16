import styles from './styles.module.scss'

const Intro = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image} data-aos="fade-right">
          <h2 className={styles.title}>Sabores<br />Cultura<br/>Pasión</h2>
        </div>
        <div className={styles.content} data-aos="fade-left">
          <p className={styles.text}>
          El Festival de Cerveza Artesanal del Caribe es una celebración única que une las mejores cervezas artesanales de la región y de Colombia con la riqueza de la gastronomía local, creando una experiencia llena de sabores, tradición y creatividad.</p>
        </div>
      </div>
    </div>
  )
}

export default Intro