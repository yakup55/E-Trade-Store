import { Center } from '@chakra-ui/react';
import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../redux/actions/appActions';
import {getCategoryList} from "../../redux/actions/categroyActions"
import Category from '../category/Category';
import style from "./category.module.css"
export default function CategoryList() {
    const {categories}=useSelector(state=>state.category)
    const dispacth=useDispatch();
    useEffect(()=>{
     dispacth(setLoading(false))
    dispacth(getCategoryList())
     dispacth(setLoading(true))

    },[])
  return (
    <Container>
    <Grid   container spacing={2}>
     
    <Typography align='center' variant='h5' gutterBottom></Typography>

    <Grid container item spacing={0}>
   
      {categories?.map((category) => (
        <Category key={category.categoryId} category={category} />
      ))}
    </Grid>

    <Typography textAlign="center"  sx={{mt:6,mb:6,pl:50}}  gutterBottom>
      The number of Categories ({categories.length}) has been listed.
    </Typography>
    

 </Grid>
 </Container>
  )
}
