'use client'

import { useEffect } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Slider from './Slider/Slider'
import Intro from './Intro/Intro'
import Experiences from './Experiences/Experiences'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
}, []);

  return (
    <div>
      <Header />
      <Slider />
      <Intro />
      <Experiences />
      <Footer />
    </div>
  )
}

export default Index