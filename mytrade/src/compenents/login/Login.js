import { Button, Container, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { setUser } from "../../redux/actions/userActions";
import AuthenticationService from "../../services/authenticationService";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HttpsIcon from "@mui/icons-material/Https";
import ProductList2 from "../productList/ProductList2";
export default function Login() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const authenticationService = new AuthenticationService();
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      userName: "",
      userPassword: "",
    },
    onSubmit: async (values) => {
      const result =await authenticationService.login(values);
      console.log("STATUS",result)
      if (result.status === 200) {
        dispacth(
          openSnacbar({
            message: "Login succeeded",
            severity: "success",
          })
        );
        const resp = result.data;
        localStorage.setItem("userId", resp.userId);
        localStorage.setItem("userName", resp.userName);
        localStorage.setItem("UserFirstName", resp.UserFirstName);
        localStorage.setItem("UserLastName", resp.UserLastName);
        localStorage.setItem("UserAccessToken", resp.UserAccessToken);
        localStorage.setItem("isLogin", true);

        dispacth(
          setUser({
            userId: resp.userId,
            userName: resp.userName,
            UserFirstName: resp.UserFirstName,
            UserLastName: resp.UserLastName,
            UserAccessToken: resp.UserAccessToken,
            isLogin: true,
          })
        );
        navigate("/");
      }
      if ((result.status === 401)) {
        dispacth(
          openSnacbar({
            message: "Login failed",
            severity: "error",
          })
        );
      }
    },
  });
  return <Container>
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
      <Typography variant='h4' align='center' gutterBottom>
            Login
          </Typography>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
            placeholder='User Email'
            label='User Email'
            type='text'
            id="userEmail"
            name="userEmail"
            onChange={handleChange}
          />

          <TextField
            placeholder='Password'
            label='Password'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <HttpsIcon />
                </InputAdornment>
              ),
            }}
            type='password'
            id="userPassword"
            name="userPassword"
            onChange={handleChange}
          />

          <Button variant='contained' type="submit">
            Login
          </Button>
      </Stack>
    </form>


    <ProductList2></ProductList2>
  </Container>;
}
