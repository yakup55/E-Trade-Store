import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBrandList } from "../../redux/actions/brandActions";
import Brand from "../brand/Brand";
export default function BrandList() {
  const { brands } = useSelector((state) => state.brand);
  const { id } = useParams();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getBrandList());
  }, []);
  return (
    <Container spacing sx={{ mt: 16, mb: 6 }} maxWidth="lg">
     
      <Typography sx={{mb:3}}   variant="h4" gutterBottom>
          Aradığın Markalar
      </Typography>
    
      <Grid container spacing={0}>
        {brands?.map((brand) => (
          <Brand key={brand.brandId} brand={brand} />
        ))}
</Grid>

      <Typography
        sx={{ mt: 3 }}
        align="center"
        variant="caption"
        display="block"
        gutterBottom
      >
        The number of Brand ({brands.length}) has been listed.
      </Typography>
    </Container>
  );
}
