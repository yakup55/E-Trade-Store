import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { addBrand } from "../../../../redux/actions/brandActions";
import {validationSchema} from "./validationSchema"
export default function AdminBrandAdd() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        brandName: "",
        brandImage: "",
      },
      onSubmit: (values) => {
        dispacth(addBrand(values));
        dispacth(
          openSnacbar({
            message: "Brand hass been created",
            severity: "success",
          })
        );
        navigate("/admin/brands/list");
      },
      validationSchema
    }
  );
  return (
    <Container>
      <h2>Admin Brand Add</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
            <TextField 
            id="brandName"
            name="brandName"
            label="Brand Name"
            placeholder="Brand Name"
            error={errors.brandName&&touched.brandName}
            helperText={errors.brandName&&touched.brandName?errors.brandName:""}
            onBlur={handleBlur}
            onChange={handleChange}
            >
            </TextField>
            <TextField 
            id="brandImage"
            name="brandImage"
            label="Brand Image"
            placeholder="Brand Image"
            error={errors.brandImage&&touched.brandImage}
            helperText={errors.brandImage&&touched.brandImage?errors.brandImage:""}
            onBlur={handleBlur}
            onChange={handleChange}
            >
            </TextField>
            <Button type="submit" variant="contained">Add Brand Add</Button>
        </Stack>
      </form>
    </Container>
  );
}
