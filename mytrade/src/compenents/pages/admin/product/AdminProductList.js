import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import {
  getDeleteProduct,
  getProductList,
  productActive,
  productPassive,
} from "../../../../redux/actions/productActions";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
export default function AdminProductList() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);
  const handleProductActive=(id)=>{
    dispatch(productActive(id));
    navigate("/admin/products/list");
  }
  const handleProductPassive=(id)=>{
    dispatch(productPassive(id));
    navigate("/admin/products/list");
  }
  const handleProductDeleted = (id) => {
    dispatch(getDeleteProduct(id));
    dispatch(
      openSnacbar({
        message: "Product has been deleted",
        severity: "success",
      })
    );
  };
  return (
    <Container>
      <br></br>
        <Button onClick={()=>navigate("/admin/products/add")} style={{margin:"auto",display:"block",backgroundColor:"blue",color:"black"}}>Product Add</Button>
        <br></br>
        <Button onClick={()=>navigate("/admin/products/detailadd")} style={{margin:"auto",display:"block",backgroundColor:"blue",color:"black"}}>Product Detail Add</Button>

        <br></br>
      <h2 style={{textAlign:"center"}}>Product List({products.length})</h2>
      <br></br>
      <TableBody>
        <Table>
          <TableRow>
            <TableCell>Product Id</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Product Image</TableCell>
            <TableCell>Product Price</TableCell>
            <TableCell>Category Id</TableCell>
            <TableCell>Product Status</TableCell>
            <TableCell>Aktif Yap</TableCell>
            <TableCell>Pasif Yap</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Detay</TableCell>
          </TableRow>
          {products.map((product) => (
            
            <TableRow>
              <TableCell>{product.productId}</TableCell>
              <TableCell>{product.productName}</TableCell>
              <TableCell>
              <img style={{width:100,height:100}} src={`${product.productImage}`}></img>
              </TableCell>
              <TableCell>{product.productPrice}</TableCell>
              <TableCell>{product.categoryId}</TableCell>
              {product.productStatus===true&&(
                <TableCell><CheckCircleIcon></CheckCircleIcon></TableCell>
              )}
                 {product.productStatus===false&&(
                <TableCell><HighlightOffIcon></HighlightOffIcon></TableCell>
              )}
              
              <TableCell><Button style={{backgroundColor:"yellow",color:"black"}} onClick={()=>handleProductActive(product.productId)}>Aktif</Button></TableCell>
              <TableCell><Button style={{backgroundColor:"green",color:"black"}} onClick={()=>handleProductPassive(product.productId)}>Pasif</Button></TableCell>
         <TableCell><Button style={{backgroundColor:"orange",color:"black"}} onClick={()=>navigate(`/admin/products/update/${product.productId}`)}>Update</Button></TableCell>    
          <TableCell><Button style={{backgroundColor:"red",color:"black"}} onClick={()=>handleProductDeleted(product.productId)}>Delete</Button></TableCell>   
          <TableCell><Button style={{backgroundColor:"pink",color:"black"}} onClick={()=>navigate(`/products/details/${product.productId}`)}>Detay</Button></TableCell>   
            </TableRow>
          ))}
        </Table>
        <br></br>
        <br></br>
      </TableBody>
    </Container>
  );
}
