import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import {
  deleteBrand,
  getBrandList,
} from "../../../../redux/actions/brandActions";

export default function AdminBrandList() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { brands } = useSelector((state) => state.brand);
  useEffect(() => {
    dispacth(getBrandList());
  });
  const handleBrandDeleted = (id) => {
    dispacth(
      deleteBrand(id),
      dispacth(
        openSnacbar({
          message: "Brand has been deleted",
          severity: "orange",
        })
      ),
      navigate("/admin/brands/list")
    );
  };
  return (
    <Container maxWidth="md">
      <h2>Admin Brand List</h2>
  <Button style={{backgroundColor:"blue",color:"black"}} onClick={()=>navigate("/admin/brands/add")}>Admin Brand Add</Button>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Brand Name</TableCell>
              <TableCell>Brand Image</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {brands.map((brand) => (
              <TableRow>
                <TableCell>{brand.brandId}</TableCell>
                <TableCell>{brand.brandName}</TableCell>
                <TableCell>
                  <img
                    style={{ width: 100, height: 100 }}
                    src={`${brand.brandImage}`}
                  ></img>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      navigate(`/admin/brands/update/${brand.brandId}`)
                    }
                    style={{ backgroundColor: "orange", color: "black" }}
                  >
                    {" "}
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleBrandDeleted(brand.brandId)}
                    style={{ backgroundColor: "red", color: "black" }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </TableBody>
      </TableContainer>
    </Container>
  );
}
