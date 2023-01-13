import {
    Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { deleteWactch, getdWactchList } from "../../../../redux/actions/wacthActions";
import style from "./wacth.module.css"
export default function AdminWacthList() {
  const { wacths } = useSelector((state) => state.wacth);
  console.log(wacths)
  const navigate = useNavigate();
  const dispacth = useDispatch();
  useEffect(()=>{
    dispacth(getdWactchList())
  },[])
  const handleWacthDeleted = (id) => {
    dispacth(deleteWactch(id));
    dispacth(
      openSnacbar({
        message: "has been created",
        severity: "success",
      })
    );
  };
  return (
    <Container >
      <h2>Admin Wacth List({wacths.length})</h2>
      <Button style={{backgroundColor:"blue",color:"black"}} onClick={()=>navigate("/admin/wacths/add")} className={style.b3}>Add Wact Detail</Button>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Adım Sayar</TableCell>
              <TableCell>GPS</TableCell>
              <TableCell>Kalp Ritmi Ölçme</TableCell>
              <TableCell>Kamera</TableCell>
              <TableCell>Sesli Görüşme</TableCell>
              <TableCell>Su Geçirme</TableCell>
              <TableCell>Uyku Takibi</TableCell>
              <TableCell>Uyumlu Marka</TableCell>
              <TableCell>Image 1</TableCell>
              <TableCell>Image 2</TableCell>
              <TableCell>Image 3</TableCell>
              <TableCell>Color Id</TableCell>
              <TableCell>Brand Id</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {
            
            wacths.map((wacth) => (
                <TableRow>
                <TableCell>{wacth.watchId}</TableCell>
                <TableCell>{wacth.adımSayar}</TableCell>
                <TableCell>{wacth.gps}</TableCell>
                <TableCell>{wacth.kalpRitmiOlcme}</TableCell>
                <TableCell>{wacth.kamera}</TableCell>
                <TableCell>{wacth.sesliGorusme}</TableCell>
                <TableCell>{wacth.suGecirme}</TableCell>
                <TableCell>{wacth.uykuTakibi}</TableCell>
                <TableCell>{wacth.uyumluMarka}</TableCell>
                <TableCell>
                  <img style={{height:100,width:100}} src={`${wacth.image1}`}></img>
                </TableCell>
                <TableCell>
                  <img style={{height:100,width:100}} src={`${wacth.image2}`}></img>
                </TableCell>
                <TableCell>
                  <img style={{height:100,width:100}} src={`${wacth.image3}`}></img>
                </TableCell>
                
                <TableCell>{wacth.colorId}</TableCell>
                <TableCell>{wacth.brandId}</TableCell>
            
                <TableCell><Button  style={{backgroundColor:"orange",color:"black"}} onClick={()=>navigate(`/admin/wacths/update/${wacth.watchId}`)}>Update</Button></TableCell>
                <TableCell><Button style={{backgroundColor:"red",color:"black"}} onClick={()=>handleWacthDeleted(wacth.watchId)}>Delete</Button></TableCell>
              </TableRow>
            ))}
            
          </Table>
        </TableBody>
      </TableContainer>
    </Container>
  );
}
