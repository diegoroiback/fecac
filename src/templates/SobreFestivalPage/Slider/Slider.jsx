'use client'

import Counter from '@/components/Counter/Counter';
import Link from 'next/link';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiTicket } from "react-icons/gi";

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './styles.module.scss'



const Slider = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <img src="/images/qsomos-fecac.jpg" className={styles.img} alt="" />
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span>Festival de</span> cerveza artesanal <span>del Caribe</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Slider