import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PcDetailService from "../../../../services/pcDetailService";
import { validationSchema } from "./validationSchema";
import { updatePc } from "../../../../redux/actions/pcActions";
import { openSnacbar } from "../../../../redux/actions/appActions";
export default function AdminPcUpdate() {
  const pcService = new PcDetailService();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    pcService.getOnePcDetail(id).then((resp) => setValues(resp));
  }, []);
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    setValues,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      ram: "",
      ramTipi: "",
      sddKapasite: "",
      bellekHizi: "",
      cihazAgirligi: "",
      ekranBoyutu: "",
      ekranCozunurlugu: "",
      ekranYenilemeHizi: "",
      İslemciNesli: "",
      İslemciTipi: "",
      image1:"",
      image2:"",
      image3:"",
      brandId:0,
      colorId:0
    },
    onSubmit: (values) => {
      dispatch(updatePc(id, values));
      dispatch(
        openSnacbar({
          message: "Pc has been updated",
          severity: "success",
        })
      );
      navigate("/admin/pcs/list");
    },
    validationSchema,
  });
  console.log(updatePc(id, values));
  return (
    <Container maxWidth="md">
      <br></br>
      <h2 style={{ textAlign: "center" }}>Admin Pc Update</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="ram"
            name="ram"
            label="Ram"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ram}
            error={errors.ram && touched.ram}
            helperText={errors.ram && touched.ram ? errors.ram : ""}
          ></TextField>
          <TextField
            id="ramTipi"
            name="ramTipi"
            label="Ram Tipi"
            value={values.ramTipi}
            error={errors.ramTipi && touched.ramTipi}
            helperText={errors.ramTipi && touched.ramTipi ? errors.ramTipi : ""}
            onChange={handleChange}
            onBlur={handleBlur}
          ></TextField>
          <TextField
            id="sddKapasite"
            name="sddKapasite"
            label="SDD Kapasitesi"
            value={values.sddKapasite}
            onChange={handleChange}
            error={errors.sddKapasite && touched.sddKapasite}
            helperText={
              errors.sddKapasite && touched.sddKapasite
                ? errors.sddKapasite
                : ""
            }
            onBlur={handleBlur}
          ></TextField>
          <TextField
            id="bellekHizi"
            name="bellekHizi"
            label="Bellek Hızı"
            value={values.bellekHizi}
            onChange={handleChange}
            error={errors.bellekHizi && touched.bellekHizi}
            helperText={
              errors.bellekHizi && touched.bellekHizi ? errors.bellekHizi : ""
            }
            onBlur={handleBlur}
          ></TextField>
          <TextField
            id="cihazAgirligi"
            value={values.cihazAgirligi}
            name="cihazAgirligi"
            label="Cihaz Ağırlığı"
            onChange={handleChange}
            error={errors.cihazAgirligi && touched.cihazAgirligi}
            helperText={
              errors.cihazAgirligi && touched.cihazAgirligi
                ? errors.cihazAgirligi
                : ""
            }
            onBlur={handleBlur}
          ></TextField>
          <TextField
            id="ekranBoyutu"
            name="ekranBoyutu"
            label="Ekran Boyutu"
            value={values.ekranBoyutu}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.ekranBoyutu && touched.ekranBoyutu}
            helperText={
              errors.ekranBoyutu && touched.ekranBoyutu
                ? errors.ekranBoyutu
                : ""
            }
          ></TextField>
          <TextField
            id="ekranCozunurlugu"
            name="ekranCozunurlugu"
            value={values.ekranCozunurlugu}
            onBlur={handleBlur}
            label="Ekran Çözünürlüğü"
            onChange={handleChange}
            error={errors.ekranCozunurlugu && touched.ekranCozunurlugu}
            helperText={
              errors.ekranCozunurlugu && touched.ekranCozunurlugu
                ? errors.ekranCozunurlugu
                : ""
            }
          ></TextField>
          <TextField
            id="ekranYenilemeHizi"
            name="ekranYenilemeHizi"
            label="Ekran Yenileme"
            onBlur={handleBlur}
            value={values.ekranYenilemeHizi}
            onChange={handleChange}
            error={errors.ekranYenilemeHizi && touched.ekranYenilemeHizi}
            helperText={
              errors.ekranYenilemeHizi && touched.ekranYenilemeHizi
                ? errors.ekranYenilemeHizi
                : ""
            }
          ></TextField>
          <TextField
            id="İslemciNesli"
            name="İslemciNesli"
            onBlur={handleBlur}
            label="İslemci Nesli"
            value={values.İslemciNesli}
            onChange={handleChange}
            error={errors.İslemciNesli && touched.İslemciNesli}
            helperText={
              errors.İslemciNesli && touched.İslemciNesli
                ? errors.İslemciNesli
                : ""
            }
          ></TextField>
          <TextField
            id="İslemciTipi"
            name="İslemciTipi"
            label="İslemci Tipi"
            value={values.İslemciTipi}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.İslemciTipi && touched.İslemciTipi}
            helperText={
              errors.İslemciTipi && touched.İslemciTipi
                ? errors.İslemciTipi
                : ""
            }
          ></TextField>
           <TextField
          name="image1"
          id="image1"
          label="Image 1"
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.image1&&touched.image1}
          value={values.image1}
          helperText={errors.image1&&touched.image1?errors.image1:""}
          ></TextField>
           <TextField
          name="image2"
          id="image2"
          label="Image 2"
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.image2&&touched.image2}
          value={values.image2}
          helperText={errors.image2&&touched.image2?errors.image2:""}
          ></TextField>
           <TextField
          name="image3"
          id="image3"
          label="Image 3"
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.image3&&touched.image3}
          value={values.image3}
          helperText={errors.image3&&touched.image3?errors.image3:""}
          ></TextField>
          <TextField 
          name="brandId"
          id="brandId"
          label="Brand Id"
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.brandId&&touched.brandId}
          value={values.brandId}
          helperText={errors.brandId&&touched.brandId?errors.brandId:""}>
        
          </TextField>
          <TextField 
          name="colorId"
          id="colorId"
          label="Color Id"
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.colorId&&touched.colorId}
          value={values.colorId}
          helperText={errors.colorId&&touched.colorId?errors.colorId:""}>
   
          </TextField>
          
          <Button type="submit" variant="contained">
            Update Pc Detail
          </Button>
        </Stack>
      </form>
      <br></br>
    </Container>
  );
}
