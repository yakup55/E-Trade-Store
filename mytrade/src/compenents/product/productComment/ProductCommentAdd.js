import { Alert, Button, Stack, TextField } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAddComment } from "../../../redux/actions/commentActions";
import { useFormik } from "formik";
import { openSnacbar } from "../../../redux/actions/appActions";
import { Container } from "@mui/system";

import { ValidationSchema } from "../../product/productComment/validationSchema";

export default function ProductCommentAdd() {
  const { manwomens } = useSelector((state) => state.manwomen);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        commentName: "",
        commentSubject: "",
        message: "",
        productId: id,
      },
      onSubmit: (values) => {
        dispatch(getAddComment(values));

        dispatch(
          openSnacbar({
            message: `${values.commentName} hass been created`,
            severity: "success",
          })
        );
      },
      validationSchema: ValidationSchema,
    });
  console.log({ values });
  return (
    <Container maxWidth="md">
     
      <h4 style={{ textAlign: "center" }}>Yorum Yap</h4>
      <Stack spacing={3}>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            name="commentName"
            onBlur={handleBlur}
            error={errors.commentName && touched.commentName}
            helperText={
              errors.commentName && touched.commentName
                ? errors.commentName
                : ""
            }
            fullWidth
            label="Adınız ve Soyadınız"
            id="commentName"
          />
          <br></br>
          <br></br>
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            name="commentSubject"
            error={errors.commentSubject && touched.commentSubject}
            helperText={
              errors.commentSubject && touched.commentName
                ? errors.commentSubject
                : ""
            }
            fullWidth
            label="Lütfen Konuyu belirtiniz"
            id="commentSubject"
          />
          <br></br>
          <br></br>
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            name="message"
            fullWidth
            label="Mesajınızı Giriniz"
            error={errors.message && touched.message}
            helperText={errors.message && touched.message ? errors.message : ""}
            id="message"
          />
          <br></br>
          <br></br>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<SendIcon></SendIcon>}
          >
            Gönder
          </Button>
          <br></br>
          <br></br>
          <Alert severity="error">
            Yorumunuz incelendikten sonra yayınlancaktır!
          </Alert>
        </form>
      </Stack>
    </Container>
  );
}
