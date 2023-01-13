import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { deepOrange, red } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductService from "../../services/productService";
import AppContext from "../context/contextApplication";
import { Button, Grid } from "@mui/material";

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

export default function Product2Home({product}) {


  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Grid item xs={8} md={2}>
      <Grid  display="flex" justifyContent="center" alignItems="center">
        <Avatar
          sx={{ width:110, height: 120,color: deepOrange[500]}}
          src={`${product.productImage}`}
          onClick={()=>navigate(`/products/details/${product.productId}`)}
        />
      </Grid>
     
    </Grid>
  );
}
