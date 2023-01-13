import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { updateManWomen } from "../../../../redux/actions/manWomenActions";
import ManWomenDetailService from "../../../../services/manWomenDetailService";
import style from "./manwomen.module.css";
export default function AdminUpdateManWomen() {
  const manwomenServie = new ManWomenDetailService();
  useEffect(() => {
    manwomenServie.getOneManWomenDetail(id).then((resp) => setValues(resp));
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, values, setValues } = useFormik({
    initialValues: {
      ayakkabiTipi: "",
      malzeme: "",
      cinsiyet: "",
      yakaStili: "",
      tipi: "",
      image1: "",
      image2: "",
      image3: "",
      brandId: 0,
      sizeId: 0,
      numberId: 0,
      colorId: 0,
    },
    onSubmit: (values) => {
      dispacth(updateManWomen(id, values));
      dispacth(
        openSnacbar({
          message: "Man Women has been updated",
          severity: "success",
        })
      );
      navigate("/admin/manwomens/list");
    },
  });
  console.log(values);
  return (
    <Container maxWidth="md">
      <h2>Admin Update ManWomen</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="ayakkabiTipi"
            name="ayakkabiTipi"
            label="Ayakkabı Tipi "
            onChange={handleChange}
            value={values.ayakkabiTipi}
          ></TextField>
          <TextField
            id="malzeme"
            name="malzeme"
            onChange={handleChange}
            label="Malzeme "
            value={values.malzeme}
          ></TextField>
          <TextField
            id="cinsiyet"
            name="cinsiyet"
            onChange={handleChange}
            label="Cinsiyet"
            value={values.cinsiyet}
          ></TextField>
          <TextField
            id="yakaStili"
            name="yakaStili"
            label="Yaka Stili"
            onChange={handleChange}
            value={values.yakaStili}
          ></TextField>
          <TextField
            id="tipi"
            name="tipi"
            label="Tipi"
            value={values.tipi}
            onChange={handleChange}
          ></TextField>
          <TextField
            id="image1"
            name="image 1"
            label="Image 1"
            value={values.image1}
            onChange={handleChange}
          ></TextField>
          <TextField
            id="image2"
            name="image2"
            label="Image 2"
            value={values.image2}
            onChange={handleChange}
          ></TextField>
          <TextField
            id="image3"
            name="image3"
            label="Image 3"
            value={values.image3}
            onChange={handleChange}
          ></TextField>
          <TextField
            id="brandId"
            name="brandId"
            label="Brand Id"
            value={values.brandId}
            onChange={handleChange}
          ></TextField>

          <TextField
            id="sizeId"
            name="sizeId"
            label="Size Id"
            onChange={handleChange}
            value={values.sizeId}
          ></TextField>
          <TextField
            id="numberId"
            name="numberId"
            label="Number Id"
            onChange={handleChange}
            value={values.numberId}
          ></TextField>
          <TextField
            id="colorId"
            name="colorId"
            label="Color Id"
            onChange={handleChange}
            value={values.colorId}
          ></TextField>
          <Button className={style.b1} type="submit" variant="contained">
            Update Women Man Detail
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
