import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import AddFavoriProduct from "../../redux/actions/favoriActions";
import { useNavigate } from "react-router-dom";
import ProductService from "../../services/productService";
import AppContext from "../../compenents/context/contextApplication";
import { Button, Grid } from "@mui/material";
import { openSnacbar } from "../../redux/actions/appActions";
import addToCart from "../../redux/actions/cartActions";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({ product }) {
  const productService = new ProductService();
  const { setProducts, products } = React.createContext(AppContext);

  const dispatch = useDispatch();
  const handleFavoriProduct = (favori) => {
    dispatch(AddFavoriProduct(favori));
    dispatch(
      openSnacbar({
        message: "Favorilere Eklendi",
        severity: "success",
      })
    );
  };
  const handleAddToCart = (cartItem) => {
    dispatch(addToCart(cartItem));
    dispatch(
      openSnacbar({
        message: "Sepete Eklendi",
        severity: "success",
      })
    );
  };
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  // const removeProduct = (id) => {
  //   productService.getDeleteProduct(id);
  //   setProducts(products.filter((product) => product.productId !== id));
  // };

  return (
    <Grid item xs={7} md={3}>
      <Card sx={{ width: 300, height: 650, mb: 5 }}>
        <CardHeader />
        <CardMedia
          component="img"
          height="300"
          onClick={() => navigate(`/products/details/${product.productId}`)}
          image={`${product?.productImage}`}
          alt={product?.productName}
        />

        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => handleFavoriProduct(product.productId)}
          >
            <FavoriteIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={() => navigate(`/products/details/${product.productId}`)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>

        <CardContent>
          <Typography paragraph>
            {product?.productName.substring(0, 56)}...
          </Typography>
          <Typography paragraph>{product?.productPrice}TL</Typography>
        </CardContent>
        <Typography align="center">
          <Button
            onClick={() => handleAddToCart(product.productId)}
            color="warning"
            variant="contained"
          >
            Sepete Ekle
          </Button>
          <br></br>
        </Typography>
        <Typography sx={{ mt: 3 }} align="center">
          {`${product?.productDate}`}
        </Typography>
      </Card>
    </Grid>
  );
}
