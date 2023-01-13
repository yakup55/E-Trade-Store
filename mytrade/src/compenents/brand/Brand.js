import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Brand({brand}) {
    const navigate=useNavigate();
  return (
    <Card sx={{ width:140,height:128,mb:4,m:1}}>
            
    <CardActionArea>
      <CardMedia
        component="img"
        height="80"
        image={`${brand.brandImage}`}
        alt="green iguana"
        onClick={()=>navigate(`/productbrand/list/${brand.brandId}`)}
      />
      
      <CardContent>
        <Typography align='center' gutterBottom variant="h5" component="div">
      {brand.brandName}
        </Typography>
       
      </CardContent>
    </CardActionArea>
    <CardActions>
      
    </CardActions>
  </Card>
  )
}
