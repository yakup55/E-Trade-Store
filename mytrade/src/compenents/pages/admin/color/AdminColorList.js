import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import {
  deleteColor,
  getColorList,
} from "../../../../redux/actions/colorActions";
import styles from "./color.module.css";
export default function AdminColorList() {
  const { colors } = useSelector((state) => state.color);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const handleColorDeleted = (id) => {
    dispacth(deleteColor(id));
    dispacth(
      openSnacbar({
        message: "Color has been deleted",
        sevrity: "error",
      })
    );
    navigate("/admin/colors/list")
  };
  useEffect(() => {
    dispacth(getColorList());
  }, []);
  return (
    <Container maxWidth="md">
      <h2>Admin Color List</h2>
      <Button
        onClick={() => navigate("/admin/colors/add")}
        className={styles.btn3}
      >
        Add Color
      </Button>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Color Name</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {colors.map((color) => (
              <TableRow>
                <TableCell>{color.colorId}</TableCell>
                <TableCell>{color.colorName}</TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      navigate(`/admin/colors/update/${color.colorId}`)
                    }
                    className={styles.btn1}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleColorDeleted(color.colorId)}
                    className={styles.btn2}
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
