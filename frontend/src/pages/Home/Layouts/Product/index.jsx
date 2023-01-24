import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../../../../components/Card'
import { ProductContainer } from './style'

const Product = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("localhost:5050/products");
    setData(res.data);
    console.log(res.data);
  }

  useEffect(() => {
    getData();
  }, [])

  const handleDelete = (id) => {
    console.log(id);
    console.log("delete");
    axios.delete(`localhost:5050/products/${id}`);
    getData();
  }
  return (
    <ProductContainer>
      <p>Popular Item in the market</p>
      <h2>Trending Product</h2>
      <div className="container d-flex jutify-content-between">
        {data?.map((product) => (
          <Card
            key={product?.id}
            img={product?.imgUrl}
            name={product?.name}
            category={product?.category}
            price={product?.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </ProductContainer>
  )
}

export default Product