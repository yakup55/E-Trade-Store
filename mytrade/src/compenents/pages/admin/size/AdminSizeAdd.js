import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { addSize } from "../../../../redux/actions/sizeActions";
import { validationSchema } from "./validationSchema";
export default function AdminSizeAdd() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        sizeName: "",
      },
      onSubmit: (values) => {
        dispacth(addSize(values));
        dispacth(
          openSnacbar({
            message: "Size hass been created",
            severity: "success",
          })
        );
        navigate("/admin/sizes/list");
      },
      validationSchema,
    }
  );
  return (
    <Container>
      <h2>Admin Size Add</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="sizeName"
            name="sizeName"
            label="Size Name"
            placeholder="Size Name"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.sizeName && touched.sizeName}
            helperText={
              errors.sizeName && touched.sizeName ? errors.sizeName : ""
            }
          ></TextField>
          <Button type="submit" variant="contained">
            Add Size
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
