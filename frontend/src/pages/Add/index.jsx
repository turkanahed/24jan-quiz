import axios from 'axios'
import React, { useState } from 'react'
import { loginFormShema } from '../../schema/formSchema'
import { AddContainer } from './style'
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"

const Add = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginFormShema) });

  const formSubmit = (data) => {
    console.log(data);
  }

  const [state, setState] = useState({
    image: "",
    category: "",
    name: "",
    price: "",
  })

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const addData = (e) => {
    e.preventDefault();
    axios.post("localhost:5050/products", state);
    setState("");
  }
  return (
    <AddContainer>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit(formSubmit)}>
        <input {...register("image")} name="image" id='image' type="text" placeholder='image source..' onChange={(e) => handleChange(e)} /> <br />
        {errors.image ? (
          <span style={{ color: "red" }}>{errors.image.message}</span>
        ) : (
          <></>
        )}
        <input {...register("name")} name="name" id='name' type="text" placeholder='name..' onChange={(e) => handleChange(e)} /> <br />
        {errors.name ? (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        ) : (
          <></>
        )}
        <input {...register("category")} name="category" id='category' type="text" placeholder='category..' onChange={(e) => handleChange(e)} /> <br />
        {errors.category ? (
          <span style={{ color: "red" }}>{errors.category.message}</span>
        ) : (
          <></>
        )}
        <input {...register("price")} name="price" id='price' type="number" placeholder='price..' onChange={(e) => handleChange(e)} /> <br />
        {errors.price ? (
          <span style={{ color: "red" }}>{errors.price.message}</span>
        ) : (
          <></>
        )}
        <button onClick={addData}>Add</button>
      </form>
    </AddContainer>
  )
}

export default Add