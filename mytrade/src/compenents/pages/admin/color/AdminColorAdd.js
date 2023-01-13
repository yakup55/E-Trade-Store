import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { addColor } from "../../../../redux/actions/colorActions";
import { validationSchema } from "./validationSchema";
export default function AdminColorAdd() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        colorName: "",
      },
      onSubmit: (values) => {
        dispacth(addColor(values));
        dispacth(
          openSnacbar({
            message: `${values.colorName} has been created`,
            severity: "success",
          })
        );
        navigate("/admin/colors/list");
      },
      validationSchema,
    });
  return (
    <Container maxWidth="md">
      <h2>Admin Color Add</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="colorName"
            name="colorName"
            label="Color Name"
            placeholder="Color Name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.colorName&&touched.colorName}
            helperText={errors.colorName&&touched.colorName?errors.colorName:""}
          ></TextField>
          <Button type="submit" variant="contained" >Add Color</Button>
        </Stack>
      </form>
    </Container>
  );
}
