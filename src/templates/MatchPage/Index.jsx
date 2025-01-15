'use client'

import { useEffect } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Intro from './Intro/Intro'
import Menu from './Menu/Menu'
import Text from './Text/Text'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
}, []);

  return (
    <div>
      <Header />
      <Intro />
      <Text />
      <Menu />
      <Footer />
    </div>
  )
}

export default Index