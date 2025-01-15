import React from 'react'
import Countdown from "react-countdown";

import styles from './styles.module.scss'

const Counter = () => {
  return (
    <div className={styles.section}>
      <Countdown
        date={new Date("2025-08-16T23:59:59")}
        renderer={({ days, hours, minutes }) => (
          <div className={styles.counter} data-aos="fade-up">
            <div className={styles.counter_item}>
              <p className={styles.counter_value}>{days}</p>
              <p className={styles.counter_date}>Días</p>
            </div>
            <span className={styles.separator}>:</span>
            <div className={styles.counter_item}>
              <p className={styles.counter_value}>{hours}</p>
              <p className={styles.counter_date}>Horas</p>
            </div>
            <span className={styles.separator}>:</span>
            <div className={styles.counter_item}>
              <p className={styles.counter_value}>{minutes}</p>
              <p className={styles.counter_date}>Minutos</p>
            </div>
        </div>
        )}
      />
    </div>
  )
}

export default Counter