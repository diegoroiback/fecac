import Link from 'next/link';

import styles from './styles.module.scss'

const Routes = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title} data-aos="fade-up">Rutas y activaciones</h2>
        <div className={styles.image} data-aos="fade-left">
          <img src="/images/agendate.jpg" alt="" />
        </div>
        <div className={styles.content} data-aos="fade-right">
          <h3 className={styles.subtitle}>Agéndate</h3>
          <p className={styles.text}>
          Descubre La Feria de FRIAS artesanal, un espacio lleno de sabores, música y experiencias únicas. La entrada es completamente gratuita, así que reúne a tus amigos y familia para ser parte de esta celebración.</p>
          <Link href={'/'} className={styles.btn}>16:Ago:2024</Link>
        </div>
      </div>
    </div>
  )
}

export default Routes