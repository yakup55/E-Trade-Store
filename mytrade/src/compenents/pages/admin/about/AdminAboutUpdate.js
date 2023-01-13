import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateAbouts } from "../../../../redux/actions/aboutActions";
import AboutService from "../../../../services/aboutService";
import { validationSchema } from "./validationShcema";
import { openSnacbar } from "../../../../redux/actions/appActions";
export default function AdminAboutUpdate() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const aboutService = new AboutService();
  useEffect(() => {
    aboutService.getOneAbouts(id).then((resp) => {
      setValues(resp);
    });
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
      aboutDetails: "",
      aboutImage: "",
    },
    onSubmit: (values) => {
      dispatch(updateAbouts(id, values));
      dispatch(
        openSnacbar({
          message: "about has been updated",
        })
      );
      navigate("/admin/abouts/list");
    },

    validationSchema,
  });
  console.log(values);
  return (
    <Container maxWidth="md">
      <br></br>
      <h2 style={{ textAlign: "center" }}>Admin About Update</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="aboutDetails"
            name="aboutDetails"
            label="About Details"
            error={errors.aboutDetails && touched.aboutDetails}
            helperText={
              errors.aboutDetails && touched.aboutDetails
                ? errors.aboutDetails
                : ""
            }
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.aboutDetails}
          ></TextField>
          <TextField
            id="aboutImage"
            name="aboutImage"
            label="About Image"
            error={errors.aboutImage && touched.aboutImage}
            helperText={
              errors.aboutImage && touched.aboutImage ? errors.aboutImage : ""
            }
            value={values.aboutImage}
            onChange={handleChange}
            onBlur={handleBlur}
          ></TextField>
          <br></br>
          <Button
            style={{ margin: "auto", display: "block" }}
            type="submit"
            variant="contained"
          >
            Save
          </Button>
        </Stack>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Container>
  );
}
