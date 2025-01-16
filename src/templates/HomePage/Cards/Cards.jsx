'use client'

import Link from 'next/link';
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiTicket } from "react-icons/gi";

import 'swiper/css';
import 'swiper/css/navigation';

import { Flavors } from '@/data/Flavors'

import styles from './styles.module.scss'


const Cards = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container} data-aos="zoom-in">
          <h2 className={styles.title}>¡Descubre los sabores!</h2>
          <p className={styles.text}>Reúne a tus amigos y encuentra tu nueva cerveza artesanal favorita ¡y una exquisita selección gastronómica! Conoce todos los participantes.</p>
          <Swiper
            className={styles.slider}
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
            breakpoints={{
              1100: {
                slidesPerView: 3
              },
              500: {
                slidesPerView: 2,
              },
            }}
          >
            {Flavors.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.item}>
                  <img src={item.img} alt="" />
                  <div className={styles.caption}>
                    <p className={styles.name}>{item.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Link href={'/'} className={styles.btn}>Descubre más <IoIosArrowDroprightCircle /></Link>
      </div>
    </div>
  )
}

export default Cards