import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../product/Product";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { openSnacbar } from "../../redux/actions/appActions";
import { removeToCart } from "../../redux/actions/cartActions";
export default function BasketList() {
  const dispacth = useDispatch();

  const { products } = useSelector((state) => state.product);
  const { carts } = useSelector((state) => state.cart);
  let tutar = 0;
  products.forEach((element) => {
    if (carts.includes(element.productId)) {
      tutar += element.productPrice;
    }
  });
  const handleCartDelete = (id) => {
    dispacth(removeToCart(id));
    dispacth(
      openSnacbar({
        message: "Sepetten Silindi",
        severtity: "success",
      })
    );
  };
  const dispatch = useDispatch();
  console.log(carts);
  const onaySepet = () => {
    dispatch(
      openSnacbar({
        message:
          "Siparişiniz alınmıştır bizi tercih ettiğiniz için teşekkür ederiz",
        severity: "success",
      })
    );
  };
  return (
    <Container maxWidth="md">
      <h2>Basket List</h2>
      
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Product Image</TableCell>
              <TableCell>Product Price</TableCell>
              <TableCell>Sil</TableCell>
            </TableRow>
            {products.map(
              (product) =>
                carts.includes(product.productId) && (
                  <TableRow>
                    <TableCell>{product.productName}</TableCell>
                    <TableCell>
                      <img
                        style={{ width: 100, height: 100 }}
                        src={`${product.productImage}`}
                      ></img>
                    </TableCell>
                    <TableCell>{product.productPrice}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleCartDelete(product.productId)}
                        style={{ backgroundColor: "red", color: "black" }}
                      >
                        Sil
                      </Button>
                    </TableCell>
                  </TableRow>
                )
            )}
            <Typography sx={{ mt: 3 }} align="center">
              Sepet Tutarınız: {tutar}
            </Typography>
            <Button
              onClick={() => onaySepet()}
              style={{ marginTop: 20 }}
              variant="contained"
            >
              Sepeti Onayla
            </Button>
          </Table>
        </TableBody>
      </TableContainer>
    </Container>
  );
}
