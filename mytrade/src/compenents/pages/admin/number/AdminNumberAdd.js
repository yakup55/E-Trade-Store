import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { addNumber } from "../../../../redux/actions/numberActions";
import { validationSchema } from "./validationSchema";
export default function AdminNumberAdd() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        shoesNumber: "",
      },
      onSubmit: (values) => {
        dispacth(addNumber(values));
        dispacth(
          openSnacbar({
            message:`${values.shoesNumber} has been created`,
            severity: "success",
          })
        );
        navigate("/admin/numbers/list");
      },
      validationSchema,
    }
  );
  return (
    <Container>
      <h2>Admin Number Add</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="shoesNumber"
            name="shoesNumber"
            label="Shoes Number"
            placeholder="Shoes Number"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.shoesNumber && touched.shoesNumber}
            helperText={
              errors.shoesNumber && touched.shoesNumber
                ? errors.shoesNumber
                : ""
            }
          ></TextField>
          <Button type="submit" variant="contained">
            Add Number
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
