import React from 'react'
import Card from '../../../../components/Card'
import { ProductContainer } from './style'

const Product = () => {
  return (
    <ProductContainer>
        <p>Popular Item in the market</p>
        <h2>Trending Product</h2>
        <div className="container d-flex jutify-content-between">
            <Card/>
            <Card/>
        </div>
    </ProductContainer>
  )
}

export default Product