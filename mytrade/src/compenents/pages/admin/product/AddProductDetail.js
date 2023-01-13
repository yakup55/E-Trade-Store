import { Button, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { openSnacbar } from "../../../../redux/actions/appActions";
import { getAddProduct } from "../../../../redux/actions/productActions";

export default function AddProductDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, touched,handleBlur } =
    useFormik({
      initialValues: {
        productId: 0,
        productExplanation: "",
        
        
      },
      onSubmit: (values) => {
        dispatch(getAddProduct(values));
        dispatch(
          openSnacbar({
            message: `${values.productId} hass benn created`,
            severity:"success"
          })
        );
        navigate("/admin/products/list");
      },
    });
    console.log( dispatch(getAddProduct(values)))
  return (
    <div>
       <br></br>
      <h2 style={{ textAlign: "center" }}>Add Product Detail </h2>
      <br></br>
      <Container maxWidth="md">
        <form onSubmit={handleSubmit}></form>
        <Stack spacing={3}>
          <TextField
            id="productId"
            name="productId"
            onChange={handleChange}
            onBlur={handleBlur}
            label="Product Id"
            placeHolder="Product Id"
          ></TextField>
          <TextField
            id="productExplanation"
            name="productExplanation"
            label="Product Explanation"
            onChange={handleChange}
            onBlur={handleBlur}
            placeHolder="Product Explanation"
          ></TextField>
          <Button 
          type='submit' variant='contained'
          style={{ backgroundColor: "blue", color: "black" }}>
            Add To Product With Detail
          </Button>
        </Stack>
      </Container>
      <br></br>
    </div>
  );
}
