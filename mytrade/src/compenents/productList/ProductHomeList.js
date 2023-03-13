import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/actions/appActions";
import { colors, Grid, Typography } from "@mui/material";
import Product2Home from '../product/Product2Home';
import {popularProduct} from '../../redux/actions/productActions';
import style from "./list.module.css"

export default function ProductHomeList() {
  const { products } = useSelector(state=> state.product);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(setLoading(true));
    dispatch(popularProduct());
     dispatch(setLoading(true));
  }, []);


  return (
   <Grid sx={{mt:0}} container spacing={1}>
      {/* <Typography sx={{ mb: 1 ,pl:60}} variant="h4" gutterBottom>
        Populer Product
      </Typography> */}
      {  products?.map((product) => (

        <Product2Home  key={product.productId} product={product} />
      ))}
    </Grid>
  );
}
