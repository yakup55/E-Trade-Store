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
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { deleteSize, getsizeList } from "../../../../redux/actions/sizeActions";

export default function AdminSizeList() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { sizes } = useSelector((state) => state.size);
  useEffect(() => {
    dispacth(getsizeList(), []);
  });
  const handleSizeDeleted = (id) => {
    dispacth(deleteSize(id));
    dispacth(
      openSnacbar({
        message: "Size hass been deleted",
        severity: "success", 
      })
    );
    navigate("/admin/sizes/list");
  };
  return (
    <Container maxWidth="md">
      <h2>Admin Size List</h2>
      <Button variant="contained" onClick={()=>navigate("/admin/sizes/add")}>Add Size</Button>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Size Name</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {sizes.map((size) => (
              <TableRow>
                <TableCell>{size.sizeId}</TableCell>
                <TableCell>{size.sizeName}</TableCell>
                <TableCell>
                  <Button
                  style={{backgroundColor:"orange", color:"black"}}
                    onClick={() =>
                      navigate(`/admin/sizes/update/${size.sizeId}`)
                    }
                  >
                    {" "}
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button 
                  style={{backgroundColor:"red", color:"black"}}
                  onClick={() => handleSizeDeleted(size.sizeId)}>
                    {" "}
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
