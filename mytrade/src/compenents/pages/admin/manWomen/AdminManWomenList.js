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
import {
  deleteManWomen,
  getManWomenList,
} from "../../../../redux/actions/manWomenActions";
import styles from "./manwomen.module.css";
export default function AdminManWomenList() {
  const { manwomens } = useSelector((state) => state.manwomen);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispacth(getManWomenList());
  }, []);
  const handleManWomenDeleted = (id) => {
    dispacth(deleteManWomen(id));
    dispacth(
      openSnacbar({
        message: "has been deleted",
        severity: "success",
      })
    );
  };
  return (
    <Container>
      <h2>Admin Man Women List({manwomens.length})</h2>
      <Button
        className={styles.b3}
        onClick={() => navigate("/admin/manwomens/add")}
      >
        Add Man Women Detail
      </Button>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Ayakkabi Tipi</TableCell>
              <TableCell>Malzeme</TableCell>
              <TableCell>Cinsiyet</TableCell>
              <TableCell>Yaka Stili</TableCell>
              <TableCell>Tipi</TableCell>
              <TableCell>Image 1</TableCell>
              <TableCell>Image 2</TableCell>
              <TableCell>Image 3</TableCell>
              <TableCell>Color Id</TableCell>
              <TableCell>Brand Id</TableCell>
              <TableCell>Size Id</TableCell>
              <TableCell>Number Id</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {manwomens.map((manwomen) => (
              <TableRow>
                <TableCell>{manwomen.manWomenId}</TableCell>
                <TableCell>{manwomen.ayakkabiTipi}</TableCell>
                <TableCell>{manwomen.malzeme}</TableCell>
                <TableCell>{manwomen.cinsiyet}</TableCell>
                <TableCell>{manwomen.yakaStili}</TableCell>
                <TableCell>{manwomen.tipi}</TableCell>
                <TableCell>
                  <img  style={{width:100,height:100}} src={`${manwomen.image1}`}></img>
                </TableCell>
                <TableCell>
                <img  style={{width:100,height:100}} src={`${manwomen.image2}`}></img>
                </TableCell>
                <TableCell>
                <img  style={{width:100,height:100}} src={`${manwomen.image3}`}></img>
                </TableCell>
                <TableCell>{manwomen.colorId}</TableCell>
                <TableCell>{manwomen.brandId}</TableCell>
                <TableCell>{manwomen.sizeId}</TableCell>
                <TableCell>{manwomen.numberId}</TableCell>
                <TableCell>
                  <Button
                    className={styles.b1}
                    onClick={() =>
                      navigate(`/admin/manwomens/update/${manwomen.manWomenId}`)
                    }
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    className={styles.b2}
                    onClick={() => handleManWomenDeleted(manwomen.manWomenId)}
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
