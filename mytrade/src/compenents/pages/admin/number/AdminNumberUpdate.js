import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { updateNumber } from "../../../../redux/actions/numberActions";
import NumberService from "../../../../services/numberService";
import {validationSchema} from "./validationSchema"
export default function AdminNumberUpdate() {
  const { id } = useParams();
  const numberService = new NumberService();
  useEffect(() => {
    numberService.getOneNumber(id).then((resp)=>setValues(resp));
  }, []);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange,values,setValues, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        shoesNumber: "",
      },
      onSubmit: (values) => {
        dispacth(updateNumber(id, values));
        dispacth(
          openSnacbar({
            message: "Number has been updated",
            severity: "success",
          })
        );
        navigate("/admin/numbers/list")
      },
      validationSchema
    }
  );
  return (
    <Container>
      <h2>Admin Number Update</h2>
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
            value={values.shoesNumber}
          ></TextField>
          <Button type="submit" variant="contained">
            Save Number
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
