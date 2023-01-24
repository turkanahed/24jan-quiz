import React from 'react'
import { CardContainer } from './style'
import product1 from "./../../assets/images/product1.png"
const Card = () => {
  return (
    <CardContainer>
      <div className="MyCard">
        <div className="card-img">
          <img src={product1} alt="product1" />
        </div>
        <div className="card-desc">
          <p>Accessories</p>
          <h4>Quartz Belt Watch</h4>
          <h5>$150.00</h5>
        </div>
      </div>
    </CardContainer>
  )
}

export default Card