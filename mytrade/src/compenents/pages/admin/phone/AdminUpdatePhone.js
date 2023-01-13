import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { updatePhone } from "../../../../redux/actions/phoneActions";
import PhoneDetailService from "../../../../services/PhoneDetailService";
import style from "./phone.module.css";
export default function AdminUpdatePhone() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { id } = useParams();
  const { handleSubmit, handleChange, values, setValues } = useFormik({
    initialValues: {
      bluetooth: "",
      cifthat: "",
      dahilihafiza: "",
      kameracözünürlügü: "",
      pilgücü: "",
      yüztanıma: "",
      parmakizi: "",
    },
    onSubmit: (values) => {
      dispacth(updatePhone(id, values));
      dispacth(
        openSnacbar({
          message: "Phone has been updated",
          severity: "success",
        })
      );
      navigate("/admin/phones/list");
    },
  });
  const phoneService = new PhoneDetailService();
  useEffect(() => {
    phoneService.getOnePhoneDetail(id).then((resp) => setValues(resp));
  }, []);
  return (
    <Container>
      <h2>Admin Update Phone</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="bluetooth"
            name="bluetooth"
            value={values.bluetooth}
            label="Bluetooth"
            onChange={handleChange}
          ></TextField>
          <TextField
            id="cifthat"
            name="cifthat"
            label="Çift Hat"
            value={values.cifthat}
            onChange={handleChange}
          ></TextField>
          <TextField
            id="dahilihafiza"
            name="dahilihafiza"
            value={values.dahilihafiza}
            label="Dahili hafiza"
            onChange={handleChange}
          ></TextField>
          <TextField
            id="kameracözünürlügü"
            name="kameracözünürlügü"
            label="kamera Çözünürlügü"
            onChange={handleChange}
            value={values.kameracözünürlügü}
          ></TextField>
          <TextField
            id="pilgücü"
            name="pilgücü"
            label="Pil Gücü"
            value={values.pilgücü}
            onChange={handleChange}
          ></TextField>
          <TextField
            id="yüztanıma"
            name="yüztanıma"
            label="Yüz Tanıma "
            onChange={handleChange}
            placeHolder="Yüz Tanıma "
            value={values.yüztanıma}
          ></TextField>
          <TextField
            id="parmakizi"
            name="parmakizi"
            label="Parmak İzi"
            onChange={handleChange}
            value={values.parmakizi}
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
            onChange={handleChange}
            value={values.image2}
          ></TextField>
          <TextField
            name="image3"
            id="image3"
            label="Image 3"
            onChange={handleChange}
            value={values.image3}
          ></TextField>
          <TextField
            name="colorId"
            id="colorId"
            label="Color Id"
            onChange={handleChange}
            value={values.colorId}
          ></TextField>
          <TextField
            name="brandId"
            id="brandId"
            label="Brand Id"
            onChange={handleChange}
            value={values.brandId}
          ></TextField>
          <Button type="submit" variant="contained">
            Add Phone Detail
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
