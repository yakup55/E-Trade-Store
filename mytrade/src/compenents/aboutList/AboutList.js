import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLastAbouts } from "../../redux/actions/aboutActions";
import { setLoading } from "../../redux/actions/appActions";

import About from "../about/About";
import { Link, useNavigate } from "react-router-dom";

export default function AboutList() {
  const { abouts } = useSelector((state) => state.about);
  const navigate = useNavigate();
  const linkedin = `https://www.linkedin.com/in/yakup-yıldırım-7a12b0200/`;
  const dispacth = useDispatch();
  useEffect(() => {
     dispacth(setLoading(false))
    dispacth(getLastAbouts());
     dispacth(setLoading(true))
  }, []);
  return (
    <Grid   container spacing={0}>
      {abouts.map((about) => (
        <About  key={about.aboutId} about={about}></About>
      ))}
     
      
    </Grid>
   
  );
}
