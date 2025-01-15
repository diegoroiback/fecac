'use client'

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './styles.module.scss'

const slides = [
  '/images/experiencia-bg.jpg'
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
        <p className={styles.title}>Bienvenido a la experiencia FECAC</p>
      </div>
    </div>
  )
}

export default Slider