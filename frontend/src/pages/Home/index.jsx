import React from 'react'
import BestSellers from './Layouts/BestSellers'
import Hero from './Layouts/Hero'
import News from './Layouts/News'
// import Product from './Layouts/Product'
import Shopping from './Layouts/Shopping'

const Home = () => {
  return (
   <>
    <Hero/>
    {/* <Product/> */}
    <Shopping/>
    <BestSellers/>
    <News/>
   </>
  )
}

export default Home