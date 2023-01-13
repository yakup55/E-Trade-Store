import {
  Button,
  ButtonGroup,
  Container,
  Table,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import {
  categoryActive,
  categoryPassive,
  getCategoryList,
  getDeleteCategory,
} from "../../../../redux/actions/categroyActions";

export default function CategoryList() {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
const navigate=useNavigate();
  const handleCategoryDeleted = (id) => {
    dispatch(getDeleteCategory(id));
    dispatch(
      openSnacbar({
        message: "Category has been removed.",
        severity: "success",
      })
    );
  };
  useEffect(() => {
    dispatch(getCategoryList());
  }, []);
  const handleCategoryActive=(id)=>{
    dispatch(categoryActive);
    navigate("/admin/categories/list");
  }
  const handleCategoryPassive=(id)=>{
    dispatch(categoryPassive);
    navigate("/admin/categories/list");
  }
  return (
    <Container>
      <br></br>
      <h2>Admin Category List({categories.length})</h2>
      <br></br>
        <Button onClick={()=>navigate("/admin/categories/add")} style={{margin:"auto",display:"block",backgroundColor:"blue",color:"black"}}>Category Add</Button>
        <br></br>
      <TableContainer>
        <Table>
          <TableRow>
            <TableCell>Category Id</TableCell>
            <TableCell>Category Name</TableCell>
            <TableCell>Category Image</TableCell>
            <TableCell>Category Status</TableCell>
            <TableCell>Aktif Yap</TableCell>
            <TableCell>Pasif Yap</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>

          {categories.map((category) => (
            <TableRow>
              <TableCell>{category.categoryId}</TableCell>
              <TableCell>{category.categoryName}</TableCell>
              <TableCell>
              <img style={{width:100,height:100}} src={`${category.categoryImage}`}></img>
              </TableCell>
              <TableCell>{category.categoryStatus}</TableCell>
                <TableCell><Button style={{backgroundColor:"yellow",color:"black"}} onClick={()=>handleCategoryActive(category.categoryId)}>Aktif</Button></TableCell>
                <TableCell><Button style={{backgroundColor:"green",color:"black"}} onClick={()=>handleCategoryPassive(category.categoryId)}>Pasif</Button></TableCell>
              <TableCell>  <Button  style={{backgroundColor:"orange",color:"black"}} onClick={()=>navigate(`/admin/categories/update/${category.categoryId}`)} >Update</Button></TableCell>
               <TableCell> <Button style={{backgroundColor:"red",color:"black"}} onClick={()=>handleCategoryDeleted(category.categoryId)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        
        </Table>
        
      </TableContainer>
    </Container>
  );
}
