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
import { deleteTv, getTvList } from "../../../../redux/actions/tvActions";
import style from "./tv.module.css";
export default function AdminTvList() {
  const { tvs } = useSelector((state) => state.tv);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getTvList());
  }, []);
  const handleTvDeleted = (id) => {
    dispacth(deleteTv(id));
    dispacth(
      openSnacbar({
        message: "has been deleted",
        severeity: "success",
      })
    );
  };
  return (
    <Container>
      <h2>Admin Tv List({tvs.length})</h2>
      <Button onClick={() => navigate("/admin/tvs/add")} className={style.b3}>
        Add Tv Detail
      </Button>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Dahili Uydu Alici</TableCell>
              <TableCell>Ekran Ebati</TableCell>
              <TableCell>Ekran Formati</TableCell>
              <TableCell>Wifi</TableCell>
              <TableCell>Kurulum</TableCell>
              <TableCell>Pc Baglantisi</TableCell>
              <TableCell>Hdmi Girisleri</TableCell>
              <TableCell>Image 1</TableCell>
              <TableCell>Image 2</TableCell>
              <TableCell>Image 3</TableCell>
              <TableCell>Brand Id</TableCell>
           
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {tvs.map((tv) => (
              <TableRow>
                <TableCell>{tv.tvId}</TableCell>
                <TableCell>{tv.dahiliUyduAlici}</TableCell>
                <TableCell>{tv.ekranEbati}</TableCell>
                <TableCell>{tv.ekranFormati}</TableCell>
                <TableCell>{tv.wifi}</TableCell>
                <TableCell>{tv.kurulum}</TableCell>
                <TableCell>{tv.pcBaglantisi}</TableCell>
                <TableCell>{tv.hdmiGirisleri}</TableCell>
                <TableCell>
                  <img style={{width:100,height:100}} src={`${tv.image1}`}></img>
                </TableCell>
                <TableCell>
                  <img style={{width:100,height:100}} src={`${tv.image2}`}></img>
                </TableCell>
                <TableCell>
                  <img style={{width:100,height:100}} src={`${tv.image3}`}></img>
                </TableCell>
                <TableCell>{tv.brandId}</TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      navigate(`/admin/tvs/update/${tv.tvId}`)
                    }
                    className={style.b1}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleTvDeleted(tv.tvId)}
                    className={style.b2}
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
