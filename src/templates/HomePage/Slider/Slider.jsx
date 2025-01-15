'use client'

import Counter from '@/components/Counter/Counter';
import Link from 'next/link';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiTicket } from "react-icons/gi";

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './styles.module.scss'

const slides = [
  '/images/home-carousel-1.jpg',
  '/images/home-carousel-2.jpg',
  '/images/home-carousel-3.jpg',
  '/images/home-carousel-4.jpg'
]

const Slider = () => {
  return (
    <div className={styles.section}>
      <Swiper
        className={styles.slider}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slides.map((item, index) => (
          <SwiperSlide className={styles.slider_item} key={index}>
            <img src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.caption}>
        <Counter />
        <p className={styles.title}>Cartagena de Indias, Colombia <br />
          Julio, 2025
        </p>
        <Link href={'/'} className={styles.btn}>Entradas <GiTicket /></Link>
      </div>
    </div>
  )
}

export default Slider