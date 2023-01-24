import React from 'react'
import { CardContainer } from './style'
// import product1 from "./../../assets/images/product1.png"
const Card = ({img,name,category,price,handleDelete,product}) => {
  return (
    <CardContainer>
      <div className="MyCard pt-5">
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <div className="card-desc">
          <p>{category}</p>
          <h4>{name}</h4>
          <h5>{price}</h5>
        </div>
        <button onClick={()=>handleDelete(product._id)}>Delete</button>
      </div>
    </CardContainer>
  )
}

export default Card