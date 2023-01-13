import {
  Button,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import AppContext from "../../../context/contextApplication";
import ImageIcon from "@mui/icons-material/Image";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getAddProduct } from "../../../../redux/actions/productActions";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { validationSchema } from "./validationShcema";
export default function AddProduct() {
  const { categories } = useSelector((state) => state.category);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        productName: "",
        productImage: "",
        productPrice: 0,
        categoryId: 0,
      },
      onSubmit: (values) => {
        dispatch(getAddProduct(values));
        dispatch(
          openSnacbar({
            message: `${values.productName} has been created`,
            severity: "success",
          })
        );
        navigate("/admin/products/list");
      },
      validationSchema,
    });

  return (
    <Container maxWidth="md">
      <br></br>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="productName"
            name="productName"
            label="Product Name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.productName && touched.productName}
            placeHolder="Product Name"
            helperText={
              errors.productName && touched.productName
                ? errors.productName
                : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DriveFileRenameOutlineIcon></DriveFileRenameOutlineIcon>
                </InputAdornment>
              ),
            }}
          ></TextField>

          <TextField
            id="productImage"
            name="productImage"
            label="Product Image"
            error={errors.productImage && touched.productImage}
            helperText={
              errors.productImage && touched.productImage
                ? errors.productImage
                : ""
            }
            onChange={handleChange}
            onBlur={handleBlur}
            placeHolder="Product Image"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ImageIcon></ImageIcon>
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            id="productPrice"
            name="productPrice"
            onChange={handleChange}
            onBlur={handleBlur}
            label="Product Price"
            placeHolder="Product Price"
            error={errors.productPrice && touched.productPrice}
            helperText={
              errors.productPrice && touched.productPrice
                ? errors.productPrice
                : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MonetizationOnIcon></MonetizationOnIcon>
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            id="categoryId"
            name="categoryId"
            onChange={handleChange}
            onBlur={handleBlur}
            label=" Category Id"
            placeHolder=" Category Id"
            error={errors.categoryId&& touched.categoryId}
            helperText={errors.categoryId&&touched.categoryId? errors.categoryId:""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FormatListBulletedIcon></FormatListBulletedIcon>
                </InputAdornment>
              ),
            }}
          ></TextField>

          <Button type="submit" variant="contained">
            Add To Product
          </Button>
        </Stack>
      </form>
      <br></br>
      <br></br>
    </Container>
  );
}
