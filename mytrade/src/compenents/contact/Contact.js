import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { openSnacbar } from "../../redux/actions/appActions";
import { addContact } from "../../redux/actions/contactActions";
import { validationSchema } from "./validationSchema";
import AboutList from "../aboutList/AboutList"
export default function Contact() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        contactName: "",
        contactMail: "",
        contactSubject: "",
        contactMessage: "",
      },
      onSubmit: (values) => {
        dispatch(addContact(values));
        dispatch(
          openSnacbar({
            message: `${values.contactSubject} has been created.`,
            severity: "success",
          })
        );
      
        navigate("/contact");
      },
      validationSchema,
    });
  return (
    <>
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <br></br>
          <TextField
            id="contactName"
            name="contactName"
            
            error={errors.contactName && touched.contactName}
            helperText={
              errors.contactName && touched.contactName
                ? errors.contactName
                : ""
            }
            onChange={handleChange}
            onBlur={handleBlur}
            label="Adınız  Soyadınız"
            placeHolder="Adınız Soyadınız"
          ></TextField>
          <TextField
            id="contactMail"
            name="contactMail"
            error={errors.contactMail && touched.contactMail}
            helperText={
              errors.contactMail && touched.contactMail
                ? errors.contactMail
                : ""
            }
            onChange={handleChange}
            onBlur={handleBlur}
            label="Mail Adresinizi Giriniz"
            placeHolder="Mail"
          ></TextField>
          <TextField
            id="contactSubject"
            name="contactSubject"
            error={errors.contactSubject && touched.contactSubject}
            helperText={
              errors.contactSubject && touched.contactSubject
                ? errors.contactSubject
                : ""
            }
            onChange={handleChange}
            onBlur={handleBlur}
            label="Konu Giriniz"
            placeHolder="Konu"
          ></TextField>

          <TextField
            multiline
            id="contactMessage"
            name="contactMessage"
            error={errors.contactMessage && touched.contactMessage}
            helperText={
              errors.contactMessage && touched.contactMessage
                ? errors.contactMessage
                : ""
            }
       
            onChange={handleChange}
            onBlur={handleBlur}
            label="Mesajınızı Giriniz"
            placeHolder="Mesajınız"
          ></TextField>

          <Button type="submit" color="success" variant="contained">
            Gönder
          </Button>
          <br></br>
        </Stack>
      </form>
      <br></br>
   
    </Container>
    <AboutList></AboutList>
    </>
  );
}
