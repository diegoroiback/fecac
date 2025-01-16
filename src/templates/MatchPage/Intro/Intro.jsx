import styles from './styles.module.scss'

const Intro = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image} data-aos="zoom-in-up">
          <img src='/images/match.png' alt="" />
        </div>
        <h1 className={styles.title} data-aos="zoom-in-up">Cerveza artesanal + comida</h1>
      </div>
    </div>
  )
}

export default Intro