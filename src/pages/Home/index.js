import React from 'react'
import Header from '../../components/common/Header'
import Cover from '../../components/Cover'
import DishList from '../../components/DishList'
import SpecialDishes from '../../components/SpecialDishes'
import Testimonials from '../../components/Testimonials'
import OurStory from '../../components/OurStory'

const Home = () => {
  return (
    <>
      <Header />
      <Cover /> 
      <DishList />
      <SpecialDishes />
      <Testimonials />
      {/* <OurStory /> */}
    </>
  )
}

export default Home