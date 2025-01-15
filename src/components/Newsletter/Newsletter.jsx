import React from 'react'

import styles from './styles.module.scss'

const Newsletter = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.title}>Subscribe Newsletters</h3>
      <form action="" className={styles.form}>
        <input type="email" className={styles.input} required placeholder='Enter your email' />
        <button className={styles.btn}>Subcribe Now</button>
      </form>
    </div>
  )
}

export default Newsletter