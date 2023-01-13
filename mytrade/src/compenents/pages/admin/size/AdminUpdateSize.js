import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { updateSize } from "../../../../redux/actions/sizeActions";
import SizeService from "../../../../services/sizeService";
import { validationSchema } from "./validationSchema";
export default function AdminUpdateSize() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const sizeService = new SizeService();
  const { id } = useParams();
  useEffect(() => {
    sizeService.getOneSize(id).then((resp) => setValues(resp));
  }, []);
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
      sizeName: "",
    },
    onSubmit: (values) => {
      dispacth(updateSize(id, values));
      dispacth(
        openSnacbar({
          message: `${values.sizeName} hass been updated`,
          severity: "success",
        })
      );
      navigate("/admin/sizes/list");
    },
    validationSchema,
  });
  return (
    <Container>
      <h2>Admin Update Size</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="sizeName"
            name="sizeName"
            label="Size Name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.sizeName && touched.sizeName}
            helperText={
              errors.sizeName && touched.sizeName ? errors.sizeName : ""
            }
            value={values.sizeName}
          ></TextField>
          <Button type="submit" variant="contained">
            Save Size
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
