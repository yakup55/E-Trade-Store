import { Grid, GridItem } from "@chakra-ui/react";
import { BrandingWatermark } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../redux/actions/appActions";
import { getProductList } from "../../redux/actions/productActions";
import Product from "../product/Product";
import Search from "../search/Search";
import PriceBrandCtegroyList from "./PriceBrandCtegroyList";
export default function ProductList() {
  const { products } = useSelector((state) => state.product);

  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(setLoading(false));
    dispacth(getProductList());
    dispacth(setLoading(true));
  }, []);
  const navigate = useNavigate();
  return (
    // <Container sx={{ mt: 2 }} maxWidth='md'>
    <>
      <Grid
        h="200"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >

        <GridItem rowSpan={5} colSpan={0}>
      
          <PriceBrandCtegroyList></PriceBrandCtegroyList>
        </GridItem>
        {products?.map((product) => (
          <GridItem colSpan={1}>
            <Product key={product.productId} product={product} />
          </GridItem>
        ))}
        <GridItem colSpan={4}>
          <Typography
            align="center"
            variant="caption"
            display="block"
            gutterBottom
          >
            The number of products ({products.length}) has been listed.
          </Typography>
          <h4 style={{ textAlign: "right" }}>
            {" "}
            <Button>
              <a href="#top">
                <img
                  style={{ width: 50, height: 50 }}
                  src="data:image/png;base64,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"
                />
              </a>
            </Button>
          </h4>
        </GridItem>
      </Grid>
    </>
  );
}
