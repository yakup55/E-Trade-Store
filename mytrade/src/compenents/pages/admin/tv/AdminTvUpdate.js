import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { updateTv } from "../../../../redux/actions/tvActions";
import TvDetailService from "../../../../services/tvDetailService";
import style from "./tv.module.css";
import { validationSchema } from "./validationSchema";

export default function AdminTvUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const tvService = new TvDetailService();
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
      dahiliUyduAlici: "",
      ekranEbati: "",
      ekranFormati: "",
      wifi: "",
      pcBaglantisi: "",
      hdmiGirisleri: "",
      kurulum: "",
      image1: "",
      image2: "",
      image3: "",
      brandId: 0,
    },
    onSubmit: (values) => {
      dispacth(updateTv(id, values));
      dispacth(
        openSnacbar({
          message: "Tv has been updated",
          severity: "success",
        })
      );
      navigate("/admin/tvs/list");
    },
    validationSchema,
  });
  useEffect(() => {
    tvService.getOneTvDetail(id).then((resp) => setValues(resp));
  }, []);
  return (
    <Container>
      <h2>Admin Tv Update</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="dahiliUyduAlici"
            name="dahiliUyduAlici"
            label="Dahili Uydu Alici"
            onBlur={handleBlur}
            error={errors.dahiliUyduAlici && touched.dahiliUyduAlici}
            helperText={
              errors.dahiliUyduAlici && touched.dahiliUyduAlici
                ? errors.dahiliUyduAlici
                : ""
            }
            onChange={handleChange}
            value={values.dahiliUyduAlici}
          ></TextField>

          <TextField
            id="ekranEbati"
            name="ekranEbati"
            label="Ekran Ebatı"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.ekranEbati && touched.ekranEbati}
            helperText={
              errors.ekranEbati && touched.ekranEbati ? errors.ekranEbati : ""
            }
            value={values.ekranEbati}
          ></TextField>

          <TextField
            id="ekranFormati"
            name="ekranFormati"
            label="Ekran Formatı"
            onBlur={handleBlur}
            error={errors.ekranFormati && touched.ekranFormati}
            helperText={
              errors.ekranFormati && touched.ekranFormati
                ? errors.ekranFormati
                : ""
            }
            onChange={handleChange}
            value={values.ekranFormati}
          ></TextField>

          <TextField
            id="wifi"
            name="wifi"
            label="Wifi"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.wifi && touched.wifi}
            helperText={errors.wifi && touched.wifi ? errors.wifi : ""}
            value={values.wifi}
          ></TextField>

          <TextField
            id="pcBaglantisi"
            name="pcBaglantisi"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.pcBaglantisi && touched.pcBaglantisi}
            helperText={
              errors.pcBaglantisi && touched.pcBaglantisi
                ? errors.pcBaglantisi
                : ""
            }
            label="Pc Baglantisi"
            value={values.pcBaglantisi}
          ></TextField>

          <TextField
            id="hdmiGirisleri"
            name="hdmiGirisleri"
            label="Hdmi Girisleri"
            error={errors.hdmiGirisleri && touched.hdmiGirisleri}
            helperText={
              errors.hdmiGirisleri && touched.hdmiGirisleri
                ? errors.hdmiGirisleri
                : ""
            }
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.hdmiGirisleri}
          ></TextField>
          <TextField
            id="kurulum"
            name="kurulum"
            label="Kurulum "
            error={errors.kurulum && touched.kurulum}
            helperText={errors.kurulum && touched.kurulum ? errors.kurulum : ""}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.kurulum}
          ></TextField>
            <TextField
            id="image1"
            name="image1"
            label="Image 1 "
            error={errors.image1 && touched.image1}
            helperText={errors.image1 && touched.image1 ? errors.image1 : ""}
            onBlur={handleBlur}
            placeHolder="Image 1"
            onChange={handleChange}
            value={values.image1}
          ></TextField>
          <TextField
            id="image2"
            name="image2"
            label="Image 2 "
            error={errors.image2 && touched.image2}
            helperText={errors.image2 && touched.image2 ? errors.image2 : ""}
            onBlur={handleBlur}
            placeHolder="Image 2"
            onChange={handleChange}
            value={values.image2}
          ></TextField>
          <TextField
            id="image3"
            name="image3"
            label="Image 3 "
            error={errors.image3 && touched.image3}
            helperText={errors.image3 && touched.image3 ? errors.image3 : ""}
            onBlur={handleBlur}
            placeHolder="Image 3"
            onChange={handleChange}
            value={values.image3}
          ></TextField>
          <TextField
            id="brandId"
            name="brandId"
            label="Brand Id "
            error={errors.brandId && touched.brandId}
            helperText={errors.brandId && touched.brandId ? errors.brandId : ""}
            onBlur={handleBlur}
            placeHolder="Brand Id"
            onChange={handleChange}
            value={values.brandId}
          ></TextField>
          <Button type="submit" variant="contained">
            Update Tv Detail
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
