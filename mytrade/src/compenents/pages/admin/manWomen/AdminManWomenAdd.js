import { Button, Container, Stack, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addManWomen } from "../../../../redux/actions/manWomenActions";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { validationSchema } from "./validationSchema";
import { useFormik } from "formik";
export default function AdminManWomenAdd() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        ayakkabiTipi: "",
        malzeme: "",
        cinsiyet: "",
        yakaStili: "",
        tipi: "",
        image1: "",
        image2: "",
        image3: "",
        colorId:0,
        brandId: 0,
        sizeId: 0,
        numberId: 0,
      },
      onSubmit: (values) => {
        dispacth(addManWomen(values));
        dispacth(
          openSnacbar({
            message: "Man women has been created",
            severity: "success",
          })
        );
        navigate("/admin/manwomens/list");
      },
      validationSchema,
    }
  );
  return (
    <Container>
      <h2>Admin ManWomen Add</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="ayakkabiTipi"
            name="ayakkabiTipi"
            onBlur={handleBlur}
            label="Ayakkabı Tipi "
            onChange={handleChange}
            placeHolder="Ayakkabı Tipi "
            error={errors.ayakkabiTipi && errors.ayakkabiTipi}
            helperText={
              errors.ayakkabiTipi && touched.ayakkabiTipi
                ? errors.ayakkabiTipi
                : ""
            }
          ></TextField>
          <TextField
            id="malzeme"
            name="malzeme"
            onChange={handleChange}
            label="Malzeme "
            onBlur={handleBlur}
            placeHolder="Malzeme "
            error={errors.malzeme && errors.malzeme}
            helperText={errors.malzeme && touched.malzeme ? errors.malzeme : ""}
          ></TextField>
          <TextField
            id="cinsiyet"
            name="cinsiyet"
            onChange={handleChange}
            onBlur={handleBlur}
            label="Cinsiyet"
            placeHolder="Cinsiyet"
            error={errors.cinsiyet && errors.cinsiyet}
            helperText={
              errors.cinsiyet && touched.cinsiyet ? errors.cinsiyet : ""
            }
          ></TextField>
          <TextField
            id="yakaStili"
            name="yakaStili"
            label="Yaka Stili"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.yakaStili && errors.yakaStili}
            helperText={
              errors.yakaStili && touched.yakaStili ? errors.yakaStili : ""
            }
            placeHolder="Yaka Stili"
          ></TextField>
          <TextField
            id="tipi"
            name="tipi"
            label="Tipi"
            placeHolder="Tipi"
            onBlur={handleBlur}
            error={errors.numberId && errors.numberId}
            helperText={
              errors.numberId && touched.numberId ? errors.numberId : ""
            }
            onChange={handleChange}
          ></TextField>
          <TextField
            id="image1"
            name="image1"
            label="Image 1"
            placeHolder="Image 1"
            onBlur={handleBlur}
            error={errors.image1 && errors.image1}
            helperText={errors.image1 && touched.image1 ? errors.image1 : ""}
            onChange={handleChange}
          ></TextField>
          <TextField
            id="image2"
            name="image2"
            label="Image 2"
            placeHolder="Image 2"
            onBlur={handleBlur}
            error={errors.image2 && errors.image2}
            helperText={errors.image2 && touched.image2 ? errors.image2 : ""}
            onChange={handleChange}
          ></TextField>
          <TextField
            id="image3"
            name="image3"
            label="Image 3"
            placeHolder="Image 3"
            onBlur={handleBlur}
            error={errors.image3 && errors.image3}
            helperText={errors.image3 && touched.image3 ? errors.image3 : ""}
            onChange={handleChange}
          ></TextField>
          <TextField
            id="brandId"
            name="brandId"
            label="Brand Id"
            placeHolder="Brand Id"
            onBlur={handleBlur}
            error={errors.brandId && errors.brandId}
            helperText={errors.brandId && touched.brandId ? errors.brandId : ""}
            onChange={handleChange}
          ></TextField>
          <TextField
            id="sizeId"
            name="sizeId"
            label="Size Id"
            placeHolder="Size Id"
            onBlur={handleBlur}
            error={errors.sizeId && errors.sizeId}
            helperText={errors.sizeId && touched.sizeId ? errors.sizeId : ""}
            onChange={handleChange}
          ></TextField>
          <TextField
            id="numberId"
            name="numberId"
            label="Number Id"
            placeHolder="Number Id"
            onBlur={handleBlur}
            error={errors.numberId && errors.numberId}
            helperText={
              errors.numberId && touched.numberId ? errors.numberId : ""
            }
            onChange={handleChange}
          ></TextField>
            <TextField
            id="colorId"
            name="colorId"
            label="Color Id"
            placeHolder="Color Id"
            onBlur={handleBlur}
            error={errors.colorId && errors.colorId}
            helperText={
              errors.colorId && touched.colorId ? errors.colorId : ""
            }
            onChange={handleChange}
          ></TextField>
          <Button type="submit" variant="contained">
            Add Man Women Detail
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
