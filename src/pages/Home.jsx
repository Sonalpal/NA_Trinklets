import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Category from '../components/Category'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <>
      <Navbar />
      <HeroSection />
      <Category active={activeCategory} onSelect={setActiveCategory} />
      <Products category={activeCategory} />
      <Footer />
    </>
  )
}

export default Home