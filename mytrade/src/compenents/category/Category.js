import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";
import AppContext from "../context/contextApplication";
import CategoryService from "../../services/categoryService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../redux/actions/productActions";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Category({ category }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 5 }}>
      <br></br>
      <Grid item xs="6" md="10">
        <Grid item xs={1}>
          <Card sx={{ width: 550, height: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
               height="200"
               width="200"
                onClick={() =>
                  navigate(`/productcategory/list/${category.categoryId}`)
                }
                image={`${category.categoryImage}`}
                alt={category.categoryName}
              />
              <CardContent>
                <Typography  gutterBottom variant="h5" component="div">
                  {category.categoryName}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
