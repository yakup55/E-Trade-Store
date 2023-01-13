import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { addCategory } from "../../../../redux/actions/categroyActions";
import { validationSchema } from "./validationShcema";
export default function AddCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        categoryName: "",
        categoryImage: "",
      },
      onSubmit: (values) => {
        dispatch(addCategory(values));
        dispatch(
          openSnacbar({
            message: `${values.categoryName} has been created.`,
            severity: "success",
          })
        );
        navigate("/admin/categories/list");
      },
      validationSchema,
    });
 
  return (
    <div>
      <br></br>
      <h3 style={{ textAlign: "center" }}>Add Category</h3>
      <br></br>
      <Container maxWidth="md">
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              id="categoryName"
              name="categoryName"
              error={errors.categoryName && touched.categoryName}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              label="Category Name"
              helperText={
                errors.categoryName && touched.categoryName
                  ? errors.categoryName
                  : ""
              }
            ></TextField>

            <TextField
              id="categoryImage"
              multiline
              error={errors.categoryImage && touched.categoryImage}
              helperText={
                errors.categoryImage && touched.categoryImage
                  ? errors.categoryImage
                  : ""
              }
              name="categoryImage"
              fullWidth
              onChange={handleChange}
              label="Category Image"
            ></TextField>
            <Button type="submit" variant="contained">
              Add Category
            </Button>
          </Stack>
        </form>
        <br></br>
      </Container>
    </div>
  );
}
