import * as yup from "yup";

export const loginFormShema = yup.object().shape({
    image: yup.string().required("Image is required"),
    name: yup.string().required("Name is required"),
    category: yup.string().required("Category is required"),
    price: yup
        .number("Price should be a number")
        .required("Price is required")
        .positive("Price should be positive")
        .integer("Price should be integer")
})