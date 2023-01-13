import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import addToCart from "../../redux/actions/cartAction"
import AddFavoriProduct from "../../redux/actions/favoriActions"
import { useNavigate } from 'react-router-dom';
import ProductService from '../../services/productService';
import AppContext from "../../compenents/context/contextApplication"
import { Button, Grid } from '@mui/material';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function Product({product}){
  const productService=new ProductService()
  const {setProducts,products}=React.createContext(AppContext)

  const dispatch=useDispatch()
  const handleToCart=(cartItem)=>{
    dispatch(addToCart(cartItem))
  }
  const handleFavoriProduct=(favoriItem)=>{
    dispatch(AddFavoriProduct(favoriItem))
  }
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);



 return (
  
  <Grid  item xs={7} md={3}>
    <Card sx={{width: 300 ,height:650}}>
  
      <CardHeader
       />
      <CardMedia

        component="img"
        height="300"
        onClick={()=>navigate(`/products/details/${product.productId}`)}
         image={`${product.productImage}`}
        alt={product.productName}
      />
     
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={()=>navigate(`/products/details/${product.productId}`)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    
        <CardContent>
          <Typography paragraph>{product.productName}</Typography>
          <Typography paragraph>
           {product.productPrice}TL
          </Typography>
           <Typography  align='center'>
           <Button 
        onClick={()=>handleToCart(product)}
        color='warning' variant='contained'>Sepete Ekle</Button>
        <br></br>
         
          </Typography>
        <Typography marginBottom="5" align='center'>
        {`${product.productDate}`}
        </Typography>
        </CardContent>
       
    </Card>
    
    </Grid>
  );
}

 
      

