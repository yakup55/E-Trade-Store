import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { updatedWactch } from "../../../../redux/actions/wacthActions";
import WacthDetailService from "../../../../services/WacthDetailService";
import style from "./wacth.module.css";
export default function AdminUpdateWacth() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const wacthService = new WacthDetailService();
  useEffect(() => {
    wacthService.getOneWactDetail(id).then((resp) => setValues(resp));
  }, []);
  const { handleSubmit, handleChange, values, setValues } = useFormik({
    initialValues: {
      adımSayar: "",
      gps: "",
      kalpRitmiOlcme: "",
      kamera: "",
      sesliGorusme: "",
      suGecirme: "",
      uykuTakibi: "",
      uyumluMarka: "",
      image1: "",
      image2: "",
      image3: "",
      brandId: 0,
      colorId: 0,
    },
    onSubmit: (values) => {
      dispacth(updatedWactch(id, values));
      dispacth(
        openSnacbar({
          message: "has been updated",
          severity: "success",
        })
      );
      navigate("/admin/wacths/list");
    },
  });
  return (
    <Container>
      <h2>Admin Update Wacth</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="adımSayar"
            name="adımSayar"
            label="Adım Sayar"
            onChange={handleChange}
            value={values.adımSayar}
          ></TextField>
          <TextField
            id="gps"
            name="gps"
            label="GPS"
            onChange={handleChange}
            value={values.gps}
          ></TextField>
          <TextField
            id="kalpRitmiOlcme"
            name="kalpRitmiOlcme"
            label="Kalp Ritmi Ölçme"
            onChange={handleChange}
            value={values.kalpRitmiOlcme}
          ></TextField>
          <TextField
            id="kamera"
            name="kamera"
            label="Kamera"
            onChange={handleChange}
            value={values.kamera}
          ></TextField>
          <TextField
            id="sesliGorusme"
            name="sesliGorusme"
            label="Sesli Gorusme"
            onChange={handleChange}
            value={values.sesliGorusme}
          ></TextField>
          <TextField
            id="suGecirme"
            name="suGecirme"
            label="Su Gecirme"
            onChange={handleChange}
            value={values.suGecirme}
          ></TextField>
          <TextField
            id="uykuTakibi"
            name="uykuTakibi"
            label="Uyku Takibi"
            onChange={handleChange}
            value={values.uykuTakibi}
          ></TextField>
          <TextField
            id="uyumluMarka"
            name="uyumluMarka"
            label="Uyumlu Marka"
            onChange={handleChange}
            value={values.uyumluMarka}
          ></TextField>
          <TextField
            name="image1"
            id="image1"
            label="Image 1"
            onChange={handleChange}
            value={values.image1}
          ></TextField>
          <TextField
            name="image2"
            id="image2"
            label="Image 2"
            value={values.image2}
            onChange={handleChange}
          ></TextField>
          <TextField
            name="image3"
            id="image3"
            label="Image 3"
            value={values.image3}
            onChange={handleChange}
          ></TextField>
          <TextField
            name="colorId"
            id="colorId"
            label="Color Id"
            value={values.colorId}
            onChange={handleChange}
          ></TextField>
          <TextField
            name="brandId"
            id="brandId"
            label="Brand Id"
            value={values.brandId}
            onChange={handleChange}
          ></TextField>
          <Button type="submit" variant="contained">
            Update Wacth Detail
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
