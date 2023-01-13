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
import { deletePc, getPcList } from "../../../../redux/actions/pcActions";

export default function AdminPcList() {
  const { pcs } = useSelector((state) => state.pc);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getPcList());
  }, []);
  const handlePcDelete = (id) => {
    dispacth(deletePc(id));
    dispacth(
      openSnacbar({
        message: "Pc is Deleted",
        severity: "succes",
      }),
      navigate("/admin/pcs/list")
    );
  };
  return (
    <Container>
      <br></br>
      <h2 style={{ textAlign: "center" }}>Admin Pc List({pcs.length})</h2>
      <br></br>
      <Button
        style={{ margin: "auto", display: "block" }}
        onClick={() => navigate("/admin/pcs/add")}
        variant="contained"
      >
        Add Pc Detail
      </Button>
      <br></br>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>SDD Kapasite</TableCell>
              <TableCell>Ram Tipi</TableCell>
              <TableCell>Ram</TableCell>
              <TableCell>Ekran Cozunurlugu</TableCell>
              <TableCell>İslemci Nesli</TableCell>
              <TableCell>İslemci Tipi</TableCell>
              <TableCell>Ekran Yenileme Hizi</TableCell>
              <TableCell>Ekran oyutu</TableCell>
              <TableCell>Bellek Hizi</TableCell>
              <TableCell>Cihaz Agirligi</TableCell>
              <TableCell>Image 1</TableCell>
              <TableCell>Image 2</TableCell>
              <TableCell>Image 3</TableCell>
              <TableCell>Brand Id</TableCell>
              <TableCell>Color Id</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {pcs.map((pc) => (
              <TableRow>
                <TableCell>{pc.pcId}</TableCell>
                <TableCell>{pc.sddKapasite}</TableCell>
                <TableCell>{pc.ramTipi}</TableCell>
                <TableCell>{pc.ram}</TableCell>
                <TableCell>{pc.ekranCozunurlugu}</TableCell>
                <TableCell>{pc.İslemciNesli}</TableCell>
                <TableCell>{pc.İslemciTipi}</TableCell>
                <TableCell>{pc.ekranYenilemeHizi}</TableCell>
                <TableCell>{pc.ekranBoyutu}</TableCell>
                <TableCell>{pc.bellekHizi}</TableCell>
                <TableCell>{pc.cihazAgirligi}</TableCell>
                <TableCell>
                  <img
                    style={{ width: 100, height: 100 }}
                    src={`${pc.image1}`}
                  ></img>
                </TableCell>
                <TableCell>
                  <img
                    style={{ width: 100, height: 100 }}
                    src={`${pc.image2}`}
                  ></img>
                </TableCell>
                <TableCell>
                  <img
                    style={{ width: 100, height: 100 }}
                    src={`${pc.image3}`}
                  ></img>
                </TableCell>

                <TableCell>{pc.colorId}</TableCell>
                <TableCell>{pc.brandId}</TableCell>
                <TableCell>
                  <Button
                    style={{ backgroundColor: "orange", color: "black" }}
                    onClick={() => navigate(`/admin/pcs/update/${pc.pcId}`)}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  {" "}
                  <Button
                    style={{ backgroundColor: "red", color: "black" }}
                    onClick={() => handlePcDelete(pc.pcId)}
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
