import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { updateColor } from "../../../../redux/actions/colorActions";
import ColorService from "../../../../services/colorService";
import {validationSchema} from "./validationSchema"
export default function AdminColorUpdate() {
  const colorService = new ColorService();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  useEffect(() => {
    colorService.getOneColor(id).then((resp) => setValues(resp));
  },[]);
  const {
    handleSubmit,
    handleChange,
    values,
    setValues,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      colorName: "",
    },
    onSubmit: (values) => {
      dispacth(updateColor(id, values));
      dispacth(
        openSnacbar({
          message: `${values.colorName} has been updated`,
          severity: "success",
        })
      );
      navigate("/admin/colors/list")
    },
    validationSchema
  });
  return (
    <Container>
      <h2>Admin Color Update</h2>
      <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
          <TextField
            id="colorName"
            name="colorName"
            label="Color Name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.colorName&&touched.colorName}
            helperText={errors.colorName&&touched.colorName?errors.colorName:""}
            value={values.colorName}
          ></TextField>
          <Button type="submit" variant="contained" >Save Color</Button>
        </Stack>
      </form>
    </Container>
  );
}
