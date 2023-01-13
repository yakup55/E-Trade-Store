import React from "react";
import { Button, Container, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListByString } from "../../redux/actions/productActions";
import Product from "../product/Product"
export default function Search() {
  const {products}=useSelector((state)=>state.product)
  const dispacth=useDispatch();
const handleSearch=(name)=>{
  dispacth(getListByString(name))
}
  return (
    <Container sx={{my:5,
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      height:'65vh'
    }} maxWidth='sm'>
      
      <Typography align='center' variant='h5' gutterBottom>
        Search 
      </Typography>
      
      <TextField
      required
      onChange={()=>handleSearch(products.productName)}
      fullWidth
      label="Search"
      InputProps={{
        endAdornment: <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>,
      }}
      placeholder="Search something..." />
      
      {products.map((product)=>(
        <Product key={product.productId} product={product}></Product>
      ))}
      <br></br>
      <Button type="submit" variant="contained">Ara</Button>

  
 
 
    </Container>
  );
}
