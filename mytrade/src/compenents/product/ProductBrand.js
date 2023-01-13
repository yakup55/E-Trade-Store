import { Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productBrand } from "../../redux/actions/productActions";
import Product from "./Product";

export default function ProductBrand() {
  const { products } = useSelector((state) => state.product);
  const { id } = useParams();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(productBrand(id));
  });
  return (
    <div>
      <Typography align="center" variant="h5" gutterBottom></Typography>

      <Grid container spacing={1}>
        {products?.map((product) => (
          <Product key={product.productId} product={product} />
        ))}
      </Grid>

      <Typography align="center" variant="caption" display="block" gutterBottom>
        The number of products ({products.length}) has been listed.
      </Typography>
    </div>
  );
}
