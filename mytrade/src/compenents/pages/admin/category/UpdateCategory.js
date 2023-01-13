import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { updateCategory } from "../../../../redux/actions/categroyActions";
import CategoryService from "../../../../services/categoryService";
import { validationSchema } from "./validationShcema";
export default function UpdateCategory() {
  const { id } = useParams();
  const categoryService = new CategoryService();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
  categoryService.getOneCategory(id).then((resp)=>{
    setValues(resp)
  })
  }, []);
  const {
    handleSubmit,
    handleChange,
    values,
    setValues,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      categoryName: "",
      categoryImage: "",
    },
    onSubmit: (values) => {
      dispatch(updateCategory(id, values));
      dispatch(
        openSnacbar({
          message: `Category ${values.categoryName} ${values.categoryImage} has been updated`,
          severity: "success",
        })
      );
      navigate("/admin/categories/list");
    },
    
    validationSchema,
  });

  return (
    <Container maxWidth="md">
      <br></br>
      <h3 style={{ textAlign: "center" }}>Update Category Pages</h3>
      <br></br>
      <form onSubmit  ={handleSubmit}>
        <Stack spacing={3}>
          <TextField
          
            error={errors.categoryName && touched.categoryName}
            helperText={
              errors.categoryName && touched.categoryName
                ? errors.categoryName
                : ""
            }
            id="categoryName"
            name="categoryName"
            label="Category Name"
            fullWidth
     
            onChange={handleChange}
            value={values.categoryName}
          ></TextField>
          <TextField
            id="categoryImage"
            name="categoryImage"
            label="Category Image"
            fullWidth
            onChange={handleChange}
            value={values.categoryImage}
          ></TextField>
         <Button type='submit' variant='contained'>
            Save
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
