import { Button, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { updateBrand } from "../../../../redux/actions/brandActions";
import BrandService from "../../../../services/brandService";
import {validationSchema} from "./validationSchema"
export default function AdminBrandUpdate() {
  const { id } = useParams();
  const brandService = new BrandService();
  useEffect(() => {
    brandService.getOneBrand(id).then((resp)=>setValues(resp))
  }, []);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    setValues,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      brandName: "",
      brandImage: "",
    },
    onSubmit: (values) => {
      dispacth(updateBrand(id, values));
      dispacth(
        openSnacbar({
          message: "Brand hass been updated",
          severity: "orange",
        })
      );
      navigate("/admin/brands/list");
    },
    validationSchema
  });
  return (
    <Container>
      <h2>Admin Brand Update</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
        <TextField 
            id="brandName"
            name="brandName"
            label="Brand Name"
            error={errors.brandName&&touched.brandName}
            helperText={errors.brandName&&touched.brandName?errors.brandName:""}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.brandName}
            >
            </TextField>
            <TextField 
            id="brandImage"
            name="brandImage"
            label="Brand Image"
            error={errors.brandImage&&touched.brandImage}
            helperText={errors.brandImage&&touched.brandImage?errors.brandImage:""}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.brandImage}
            >
            </TextField>
            <Button type="submit" variant="contained">Update Brand Add</Button>
        </Stack>
      </form>
    </Container>
  );
}
