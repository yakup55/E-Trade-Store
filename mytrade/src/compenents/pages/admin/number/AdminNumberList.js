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
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import {
  deleteNumber,
  getNumberList,
} from "../../../../redux/actions/numberActions";
import styles from "./number.module.css";
export default function AdminNumberList() {
  const { numbers } = useSelector((state) => state.number);
  const handleNumberDeleted = (id) => {
    dispacth(deleteNumber(id));
    dispacth(
      openSnacbar({
        message: "Number has been deleted",
        severity: "success",
      })
    );
    navigate("/admin/numbers/list");
  };
  const navigate = useNavigate();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getNumberList());
  }, []);
  return (
    <Container maxWidth="md">
      <h2>Admin Number List</h2>
      <Button variant="contained" onClick={()=>navigate("/admin/numbers/add")}>Add Number</Button>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Number Name</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {numbers.map((number) => (
              <TableRow>
                <TableCell>{number.numberId}</TableCell>
                <TableCell>{number.shoesNumber}</TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      navigate(`/admin/numbers/update/${number.numberId}`)
                    }
                    className={styles.btn1}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleNumberDeleted(number.numberId)}
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
