import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { addWactch } from "../../../../redux/actions/wacthActions";
import {validationSchema} from "./validationShcema"
export default function AdminWacthAdd() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        adımSayar: "",
        gps: "",
        kalpRitmiOlcme: "",
        kamera: "",
        sesliGorusme: "",
        suGecirme: "",
        uykuTakibi: "",
        uyumluMarka: "",
        image1:"",
        image2:"",
        image3:"",
        brandId:0,
        colorId:0
      },
      onSubmit: (values) => {
        dispacth(addWactch(values));
        dispacth(
          openSnacbar({
            message: "has been created",
            severit: "succes",
          })
        );
        navigate("/admin/wacths/list");
      },
      validationSchema
    });
  return (
    <Container maxWidth="md">
      <br></br>
      <h2 style={{ textAlign: "center" }}>Admin Wacth Add</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="adımSayar"
            name="adımSayar"
            label="Adım Sayar"
            placeholder="Adım Sayar"
            onChange={handleChange}
            error={errors.adımSayar && touched.adımSayar}
            helperText={
              errors.adımSayar && touched.adımSayar ? errors.adımSayar : ""
            }
            onBlur={handleBlur}
          ></TextField>
           <TextField
            id="gps"
            name="gps"
            label="GPS"
            placeholder="GPS"
            onChange={handleChange}
            error={errors.gps && touched.gps}
            helperText={
              errors.gps && touched.gps ? errors.gps : ""
            }
            onBlur={handleBlur}
          ></TextField>
           <TextField
            id="kalpRitmiOlcme"
            name="kalpRitmiOlcme"
            label="Kalp Ritmi Ölçme"
            placeholder="Kalp Ritmi Ölçme"
            onChange={handleChange}
            error={errors.kalpRitmiOlcme && touched.kalpRitmiOlcme}
            helperText={
              errors.adımSaykalpRitmiOlcmear && touched.kalpRitmiOlcme ? errors.kalpRitmiOlcme : ""
            }
            onBlur={handleBlur}
          ></TextField>
           <TextField
            id="kamera"
            name="kamera"
            label="Kamera"
            placeholder="Kamera"
            onChange={handleChange}
            error={errors.kamera && touched.kamera}
            helperText={
              errors.kamera && touched.kamera ? errors.kamera : ""
            }
            onBlur={handleBlur}
          ></TextField>
           <TextField
            id="sesliGorusme"
            name="sesliGorusme"
            label="Sesli Gorusme"
            placeholder="Sesli Gorusme"
            onChange={handleChange}
            error={errors.sesliGorusme && touched.sesliGorusme}
            helperText={
              errors.sesliGorusme && touched.sesliGorusme ? errors.sesliGorusme : ""
            }
            onBlur={handleBlur}
          ></TextField>
           <TextField
            id="suGecirme"
            name="suGecirme"
            label="Su Gecirme"
            placeholder="Su Gecirme"
            onChange={handleChange}
            error={errors.suGecirme && touched.suGecirme}
            helperText={
              errors.suGecirme && touched.suGecirme ? errors.suGecirme : ""
            }
            onBlur={handleBlur}
          ></TextField>
           <TextField
            id="uykuTakibi"
            name="uykuTakibi"
            label="Uyku Takibi"
            placeholder="Uyku Takibi"
            onChange={handleChange}
            error={errors.uykuTakibi && touched.uykuTakibi}
            helperText={
              errors.uykuTakibi && touched.uykuTakibi ? errors.uykuTakibi : ""
            }
            onBlur={handleBlur}
          ></TextField>
          <TextField
            id="uyumluMarka"
            name="uyumluMarka"
            label="Uyumlu Marka"
            placeholder="Uyumlu Marka"
            onChange={handleChange}
            error={errors.uyumluMarka && touched.uyumluMarka}
            helperText={
              errors.uyumluMarka && touched.uyumluMarka ? errors.uyumluMarka : ""
            }
            onBlur={handleBlur}
          ></TextField>
            <TextField
          name="image1"
          id="image1"
          label="Image 1"
          placeholder="Image 1"
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.image1&&touched.image1}
          helperText={errors.image1&&touched.image1?errors.image1:""}
          ></TextField>
           <TextField
          name="image2"
          id="image2"
          label="Image 2"
          placeholder="Image 2"
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.image2&&touched.image2}
          helperText={errors.image2&&touched.image2?errors.image2:""}
          ></TextField>
           <TextField
          name="image3"
          id="image3"
          label="Image 3"
          placeholder="Image 3"
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.image3&&touched.image3}
          helperText={errors.image3&&touched.image3?errors.image3:""}
          ></TextField>
          <TextField 
          name="colorId"
          id="colorId"
          label="Color Id"
          placeholder="Color Id"
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.colorId&&touched.colorId}
          helperText={errors.colorId&&touched.colorId?errors.colorId:""}>

          </TextField>
          <TextField 
          name="brandId"
          id="brandId"
          label="Brand Id"
          placeholder="Brand Id"
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.brandId&&touched.brandId}
          helperText={errors.brandId&&touched.brandId?errors.brandId:""}>
            
          </TextField>
          <Button type="submit" variant="contained">Add Wacth Detail</Button>
        </Stack>
      </form>
      <br></br>
    </Container>
  );
}
