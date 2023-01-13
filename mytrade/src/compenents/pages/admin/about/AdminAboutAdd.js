import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAbouts } from "../../../../redux/actions/aboutActions";
import { openSnacbar } from "../../../../redux/actions/appActions";
import {validationSchema} from "./validationShcema";
export default function AdminAboutAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        aboutDetails: "",
        aboutImage: "",
      },
      onSubmit: (values) => {
        dispatch(addAbouts(values));
        dispatch(
          openSnacbar({
            message: `has been created`,
            severity: "success",
          })
        );
        navigate("/admin/abouts/list");
      },
      validationSchema,
    });
  return (
    <Container maxWidth="md">
          <br></br>
      <h2 style={{ textAlign: "center" }}>Admin About Add</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
        <TextField
          id="aboutDetails"
          name="aboutDetails"
          label="About Details"
          placeholder="About Details"
          error={errors.aboutDetails && touched.aboutDetails}
          helperText={
            errors.aboutDetails && touched.aboutDetails
              ? errors.aboutDetails
              : ""
          }
          onChange={handleChange}
          onBlur={handleBlur}
        ></TextField>
        <TextField
          id="aboutImage"
          name="aboutImage"
          label="About Image"
          placeholder="About Image"
          error={errors.aboutImage && touched.aboutImage}
          helperText={
            errors.aboutImage && touched.aboutImage
              ? errors.aboutImage
              : ""
          }
          onChange={handleChange}
          onBlur={handleBlur}
        ></TextField>
        </Stack>
        <br></br>
        <Button style={{margin:"auto",display:"block"}} type="submit" variant="contained">Add About</Button>
      </form>
    </Container>
  );
}
