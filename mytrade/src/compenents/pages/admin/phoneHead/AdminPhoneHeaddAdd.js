import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { addHeadPhone } from "../../../../redux/actions/headPhoneActions";
import { validationSchema } from "./validationShcema";
export default function AdminPhoneHeaddAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        gurultuOnleme: "",
        bluetoothVersiyon: "",
        ciftTelefonDestegi: "",
        suyaTereDayanikli: "",
        kullanimTipi: "",
        image1:"",
        image2:"",
        image3:"",
        colorId:0,
        brandId:0,
      },
      onSubmit: (values) => {
        dispatch(addHeadPhone(values));
        dispatch(
          openSnacbar({
            message: "has been created",
            severity: "succes",
          })
        );
        navigate("/admin/headphones/list");
      },
      validationSchema,
    });
  return (
    <Container>
      <br></br>
      <h2 style={{ textAlign: "center" }}>Admin Phone Headd Add</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="gurultuOnleme"
            name="gurultuOnleme"
            label="Gürültü Önleme"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.gurultuOnleme && touched.gurultuOnleme}
            helperText={
              errors.gurultuOnleme && touched.gurultuOnleme
                ? errors.gurultuOnleme
                : ""
            }
            placeHolder="Gürültü Önleme"
          ></TextField>

          <TextField
            id="bluetoothVersiyon"
            name="bluetoothVersiyon"
            onChange={handleChange}
            onBlur={handleBlur}
            label="Bluetooth Versiyon"
            error={errors.bluetoothVersiyon && touched.bluetoothVersiyon}
            helperText={
              errors.bluetoothVersiyon && touched.bluetoothVersiyon
                ? errors.bluetoothVersiyon
                : ""
            }
            placeHolder="Bluetooth Versiyon"
          ></TextField>

          <TextField
            id="ciftTelefonDestegi"
            name="ciftTelefonDestegi"
            label="Çift Telefon Destegi"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.ciftTelefonDestegi && touched.ciftTelefonDestegi}
            helperText={
              errors.ciftTelefonDestegi && touched.ciftTelefonDestegi
                ? errors.ciftTelefonDestegi
                : ""
            }
            placeHolder="Çift Telefon Destegi"
          ></TextField>

          <TextField
            id="suyaTereDayanikli"
            name="suyaTereDayanikli"
            label="Suya Tere Dayanikli"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.suyaTereDayanikli && touched.suyaTereDayanikli}
            helperText={
              errors.suyaTereDayanikli && touched.suyaTereDayanikli
                ? errors.suyaTereDayanikli
                : ""
            }
            placeHolder="Suya Tere Dayanikli"
          ></TextField>
          <TextField
            id="kullanimTipi"
            name="kullanimTipi"
            label="Kullanim Tipi"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.kullanimTipi && touched.kullanimTipi}
            helperText={
              errors.kullanimTipi && touched.kullanimTipi
                ? errors.kullanimTipi
                : ""
            }
            placeHolder="Kullanım Tipi"
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
          <Button type="submit" variant="contained">
            Add Head Phone Detail
          </Button>
        </Stack>
      </form>
      <br></br>
    </Container>
  );
}
