import { Container, Grid, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setLoading } from "../../redux/actions/appActions";
import { popularCategory } from "../../redux/actions/categroyActions";
import Category from "../category/Category";

export default function CategoryList() {
  const { categories } = useSelector((state) => state.category);
  const dispacth = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispacth(setLoading(false));
    dispacth(popularCategory(id));
    dispacth(setLoading(true));
  }, []);
  return (
    <Container sx={{ mt: 6, mb: 6 }} maxWidth="lg">
      <Grid container spacing={4}>
        {categories?.map((category) => (
          <Category key={category.categoryId} category={category} />
        ))}
      </Grid>

      <Typography
        sx={{ mt: 3 }}
        align="center"
        variant="h6"
        display="block"
        gutterBottom
      >
        Populars category ({categories.length}) 
      </Typography>
    </Container>
  );
}
