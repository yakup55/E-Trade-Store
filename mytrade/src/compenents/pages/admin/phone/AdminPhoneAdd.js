import { Button, Stack, TextField } from '@mui/material';
import { Container, textAlign } from '@mui/system'
import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { openSnacbar } from '../../../../redux/actions/appActions';
import { addPhone } from '../../../../redux/actions/phoneActions';
import { validationSchema } from './validationShcema';

export default function AdminPhoneAdd() {
    const navigate=useNavigate();
    const dispacth=useDispatch();
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        bluetooth: "",
        cifthat: "",
        dahilihafiza: "",
        kameracözünürlügü: "",
        pilgücü: "",
        yüztanıma: "",
        parmakizi: "",
        image1: "",
        image2: "",
        image3: "",
        brandId: 0,
        colorId: 0,
      },
      onSubmit:(values)=>{
        dispacth(addPhone(values));
        dispacth(openSnacbar({
            message:"has been created",
            severity:"succes"
        }))
        navigate("/admin/phones/list")
      },
      validationSchema
});
  return (
    <Container maxWidth="md">
        <br></br>
        <h2 style={{textAlign:"center"}}>Admin Phone Add</h2>
        <br></br>
        <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
            <TextField
            id="bluetooth"
            name="bluetooth"
            onBlur={handleBlur}
            error={errors.bluetooth&& touched.bluetooth}
            helperText={errors.bluetooth&& touched.bluetooth?errors.bluetooth:""}
            label="Bluetooth"
            placeHolder="Bluetooth"
            onChange={handleChange}
          ></TextField>
          <TextField
            id="cifthat"
            name="cifthat"
            label="Çift Hat"
            onBlur={handleBlur}
            error={errors.cifthat&& touched.cifthat}
            helperText={errors.cifthat&& touched.cifthat?errors.cifthat:""}
            placeHolder="Çift Hat"
            onChange={handleChange}
          ></TextField>
          <TextField
            id="dahilihafiza"
            name="dahilihafiza"
            onBlur={handleBlur}
            label="Dahili hafiza"
            placeHolder="Dahili hafiza"
            onChange={handleChange}
            error={errors.dahilihafiza&& touched.dahilihafiza}
            helperText={errors.dahilihafiza&& touched.dahilihafiza?errors.dahilihafiza:""}
          ></TextField>
          <TextField
            id="kameracözünürlügü"
            name="kameracözünürlügü"
            onBlur={handleBlur}
            label="kamera Çözünürlügü"
            placeHolder="Kamera Çözünürlügü"
            onChange={handleChange}
            error={errors.kameracözünürlügü&& touched.kameracözünürlügü}
            helperText={errors.kameracözünürlügü&& touched.kameracözünürlügü?errors.kameracözünürlügü:""}
          ></TextField>
          <TextField
            id="pilgücü"
            name="pilgücü"
            label="Pil Gücü"
            onBlur={handleBlur}
            placeHolder="Pil Gücü"
            onChange={handleChange}
            error={errors.pilgücü&& touched.pilgücü}
            helperText={errors.pilgücü&& touched.pilgücü?errors.pilgücü:""}
          ></TextField>
          <TextField
            id="yüztanıma"
            onBlur={handleBlur}
            name="yüztanıma"
            label="Yüz Tanıma "
            onChange={handleChange}
            placeHolder="Yüz Tanıma "
            error={errors.yüztanıma&& touched.yüztanıma}
            helperText={errors.yüztanıma&& touched.yüztanıma?errors.yüztanıma:""}
          ></TextField>
          <TextField
            id="parmakizi"
            name="parmakizi"
            onBlur={handleBlur}
            label="Parmak İzi"
            onChange={handleChange}
            placeHolder="Parmak İzi"
            error={errors.parmakizi&& touched.parmakizi}
            helperText={errors.parmakizi&& touched.parmakizi?errors.parmakizi:""}
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
           <Button type='submit' variant='contained'>Add Phone Detail</Button>
            </Stack>
           
        </form>
        <br></br>
    </Container>
  )
}
