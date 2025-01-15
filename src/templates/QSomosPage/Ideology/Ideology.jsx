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
          <h2 className={styles.title}>Ideología</h2>
          <p className={styles.text}>
          El <span>Festival de Cerveza Artesanal del Caribe</span> nace de la pasión por destacar lo mejor de nuestra región: su gente, su creatividad, y su capacidad para contar historias a través de cada cerveza y cada plato.
          <br /><br />
Creemos en el poder de la colaboración, uniendo a cerveceros, chefs y amantes de la buena mesa para celebrar la autenticidad y la diversidad. Nuestro objetivo es posicionar a la ciudad como un referente para la cultura cervecera artesanal, promoviendo valores de <span>CALIDAD, INNOVACIÓN y SOSTENIBILIDAD.</span>
          <br /><br />
Más allá de un evento, somos una comunidad que busca inspirar, conectar y celebrar juntos. Cada edición es una oportunidad para construir un legado que trascienda generaciones, consolidando al <span>Caribe como un epicentro gastronómico y cultural de Colombia.</span>
          </p>
      </div>
    </div>
  )
}

export default Cards