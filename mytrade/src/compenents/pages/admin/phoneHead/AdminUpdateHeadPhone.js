import { Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { updateHeadPhone } from "../../../../redux/actions/headPhoneActions";
import HeadPhoneDetailService from "../../../../services/HeadPhoneDetailService";
import style from "./head.module.css";
import { validationSchema } from "./validationShcema";
export default function AdminUpdateHeadPhone() {
  const headphoneService = new HeadPhoneDetailService();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    headphoneService.getOneHeadPhoneDetail(id).then((resp) => setValues(resp));
  }, []);
  const { id } = useParams();
  const {
    handleSubmit,
    handleChange,
    values,
    setValues,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      gurultuOnleme: "",
      bluetoothVersiyon: "",
      ciftTelefonDestegi: "",
      suyaTereDayanikli: "",
      kullanimTipi: "",
      image1: "",
      image2: "",
      image3: "",
      colorId: 0,
      brandId: 0,
    },
    onSubmit: (values) => {
      dispatch(updateHeadPhone(id, values));
      dispatch(
        openSnacbar({
          message: "Headphone has been updated",
          severity: "success",
        })
      );
      navigate("/admin/headphones/list");
    },
    validationSchema,
  });
  return (
    <Container>
      <h2>Admin Update Head Phone</h2>
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
            value={values.gurultuOnleme}
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
            value={values.bluetoothVersiyon}
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
            value={values.ciftTelefonDestegi}
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
            value={values.suyaTereDayanikli}
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
            value={values.kullanimTipi}
          ></TextField>
          <TextField
            name="image1"
            id="image1"
            label="Image 1"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.image1 && touched.image1}
            helperText={errors.image1 && touched.image1 ? errors.image1 : ""}
            value={values.image1}
          ></TextField>
          <TextField
            name="image2"
            id="image2"
            label="Image 2"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.image2 && touched.image2}
            helperText={errors.image2 && touched.image2 ? errors.image2 : ""}
            value={values.image2}
          ></TextField>
          <TextField
            name="image3"
            id="image3"
            label="Image 3"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.image3 && touched.image3}
            helperText={errors.image3 && touched.image3 ? errors.image3 : ""}
            value={values.image3}
          ></TextField>
          <TextField
            name="colorId"
            id="colorId"
            label="Color Id"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.colorId && touched.colorId}
            helperText={errors.colorId && touched.colorId ? errors.colorId : ""}
            value={values.colorId}
          ></TextField>
          <TextField
            name="brandId"
            id="brandId"
            label="Brand Id"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.brandId && touched.brandId}
            helperText={errors.brandId && touched.brandId ? errors.brandId : ""}
            value={values.brandId}
          ></TextField>

          <Button type="submit" variant="contained">
            Update Head Phone Detail
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
