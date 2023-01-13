import { Button, Container, MenuItem, Stack, TextField } from "@mui/material";
import { setNestedObjectValues, useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { getUpdateProduct } from "../../../../redux/actions/productActions";
import ProductService from "../../../../services/productService";

export default function UpdateProduct() {
  const { categories } = useSelector((state) => state.category);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productService = new ProductService();
  useEffect(() => {
   productService.getOneProduct(id).then((resp)=>{
    setValues(resp)
   })
  },[]);
  const { handleSubmit, handleChange, values, setValues } = useFormik({
    initialValues: {
      productName: "",
      productImage: "",
      productPrice: 0,
      categoryId: 0,
    },
    onSubmit: (values) => {
      dispatch(getUpdateProduct(id, values));
      dispatch(
        openSnacbar({
          message: `Product ${values.productName} has been updated`,
          severity: "success",
        })
      );
      navigate("/admin/products/list");
    },
  });
  console.log(categories.categoryName)
  return (
    <Container maxWidth="md">
      <br></br>
      <h2 style={{ textAlign: "center" }}>Admin Update Product</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
          <TextField
            id="productName"
            name="productName"
            label="Product Name"
            onChange={handleChange}
            value={values.productName}
            fullWidth
          ></TextField>

          <br></br>
          <br></br>
          <TextField
            id="productImage"
            name="productImage"
            label="Product Image"
            onChange={handleChange}
            value={values.productImage}
            fullWidth
          ></TextField>
          <br></br>
          <br></br>
          <TextField
            id="productPrice"
            name="productPrice"
            label="Product Price"
            onChange={handleChange}
            value={values.productPrice}
            fullWidth
          ></TextField>
          <br></br>
          <br></br>
          <TextField
            id="categoryId"
            name="categoryId"
            label="Category Id"
            onChange={handleChange}
            value={values.categoryId}
            fullWidth
          ></TextField>
       
          <br></br>
          <br></br>

          <Button
            style={{
              margin: "auto",
              display: "block",
              backgroundColor: "green",
              color: "black",
            }}
            type="submit"
            variant="container"
          >
            Save
          </Button>
      </form>
    </Container>
  );
}
