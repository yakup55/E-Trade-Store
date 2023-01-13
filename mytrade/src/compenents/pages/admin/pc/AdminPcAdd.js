import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { addPc } from "../../../../redux/actions/pcActions";
import { validationSchema } from "./validationSchema";
export default function AdminPcAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, errors, touched, handleBlur } = useFormik(
    {
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
        image1: "",
        image2: "",
        image3: "",
        brandId: 0,
        colorId: 0,
      },
      onSubmit: (values) => {
        dispatch(addPc(values));
        dispatch(
          openSnacbar({
            message: "has been created",
            severity: "success",
          })
        );
        navigate("/admin/pcs/list");
      },
      validationSchema,
    }
  );
  return (
    <Container maxWidth="md">
      <br></br>
      <h2 style={{ textAlign: "center" }}>Admin Pc Add</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="ram"
            name="ram"
            label="Ram"
            onChange={handleChange}
            onBlur={handleBlur}
            placeHolder="Ram"
            error={errors.ram && touched.ram}
            helperText={errors.ram && touched.ram ? errors.ram : ""}
          ></TextField>
          <TextField
            id="ramTipi"
            name="ramTipi"
            label="Ram Tipi"
            placeHolder="Ram Tipi"
            error={errors.ramTipi && touched.ramTipi}
            helperText={errors.ramTipi && touched.ramTipi ? errors.ramTipi : ""}
            onChange={handleChange}
            onBlur={handleBlur}
          ></TextField>
          <TextField
            id="sddKapasite"
            name="sddKapasite"
            label="SDD Kapasitesi"
            placeHolder="SDD Kapasitesi"
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
            placeHolder="Bellek Hızı"
            onChange={handleChange}
            error={errors.bellekHizi && touched.bellekHizi}
            helperText={
              errors.bellekHizi && touched.bellekHizi ? errors.bellekHizi : ""
            }
            onBlur={handleBlur}
          ></TextField>
          <TextField
            id="cihazAgirligi"
            name="cihazAgirligi"
            label="Cihaz Ağırlığı"
            placeHolder="Cihaz Ağırlığı"
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
            onBlur={handleBlur}
            placeHolder="Ekran Boyutu"
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
            onBlur={handleBlur}
            label="Ekran Çözünürlüğü"
            placeHolder="Ekran Çözünürlüğü"
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
            placeHolder="Ekran Yenileme"
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
            placeHolder="İslemci Nesli"
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
            onBlur={handleBlur}
            onChange={handleChange}
            placeHolder="İslemci Tipi"
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
            placeholder="Image 1"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.image1 && touched.image1}
            helperText={errors.image1 && touched.image1 ? errors.image1 : ""}
          ></TextField>
          <TextField
            name="image2"
            id="image2"
            label="Image 2"
            placeholder="Image 2"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.image2 && touched.image2}
            helperText={errors.image2 && touched.image2 ? errors.image2 : ""}
          ></TextField>
          <TextField
            name="image3"
            id="image3"
            label="Image 3"
            placeholder="Image 3"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.image3 && touched.image3}
            helperText={errors.image3 && touched.image3 ? errors.image3 : ""}
          ></TextField>
          <TextField
            name="colorId"
            id="colorId"
            label="Color Id"
            placeholder="Color Id"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.colorId && touched.colorId}
            helperText={errors.colorId && touched.colorId ? errors.colorId : ""}
          ></TextField>
          <TextField
            name="brandId"
            id="brandId"
            label="Brand Id"
            placeholder="Brand Id"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.brandId && touched.brandId}
            helperText={errors.brandId && touched.brandId ? errors.brandId : ""}
          ></TextField>
          <Button type="submit" variant="contained">
            Add Pc Detail
          </Button>
        </Stack>
      </form>
      <br></br>
    </Container>
  );
}
