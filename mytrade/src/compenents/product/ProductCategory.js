import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { setLoading } from '../../redux/actions/appActions'
import {getProductList, productCategory} from '../../redux/actions/productActions'
import Product from '../product/Product'

export default function ProductList() {
    const {products}=useSelector(state=>state.product)
    const dispacth=useDispatch()
    const {id}=useParams()
    useEffect(()=>{
         dispacth(setLoading(false))
        dispacth(productCategory(id))
         dispacth(setLoading(true))
    },[])
    const navigate =useNavigate()
  return (
    // <Container sx={{ mt: 2 }} maxWidth='md'>
 <div>
   <Typography align='center' variant='h5' gutterBottom></Typography>

    <Grid  container spacing={1}>
      {products?.map((product) => (

        <Product key={product.productId} product={product} />
      ))}
    </Grid>

    <Typography align='center' variant='caption' display='block' gutterBottom>
      The number of   products ({products.length}) has been listed.
    </Typography>
 
    </div>
   
 // </Container>
  )
}
