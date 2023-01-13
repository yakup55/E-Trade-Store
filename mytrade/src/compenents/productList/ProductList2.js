import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLoading } from '../../redux/actions/appActions'
import {getLastProduct} from "../../redux/actions/productActions"
import Product from '../product/Product'

export default function ProductList() {
    const {products}=useSelector(state=>state.product)
  
    const dispacth=useDispatch()
    useEffect(()=>{
         dispacth(setLoading(true))
        dispacth(getLastProduct())
         dispacth(setLoading(true))
    },[])
  return (
    // <Container sx={{ mt: 2 }} maxWidth='md'>
 <div>
   <Typography align='center' variant='h5' gutterBottom></Typography>

    <Grid sx={{mt:0}} container spacing={10}>
      {products?.map((product) => (

        <Product key={product.productId} product={product} />
      ))}
    </Grid>

    <Typography sx={{mt:2,mb:3}} align='center' variant='caption' display='block' gutterBottom>
      The number of Last products ({products.length}) has been listed.
    </Typography>
 
    </div>
   
 // </Container>
  )
}
