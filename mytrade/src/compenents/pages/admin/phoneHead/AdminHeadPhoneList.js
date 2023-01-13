import { Button, Container, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../../../redux/actions/appActions";
import { deleteHeadPhone, getHeadPhoneList } from "../../../../redux/actions/headPhoneActions";
import style from "./head.module.css";
export default function AdminHeadPhoneList() {
  const { headphones} = useSelector((state) => state.headphone);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleHeadPhoneDeleted = (id) => {
    dispatch(deleteHeadPhone(id));
    dispatch(
      openSnacbar({
        message: "has been deleted",
        severirty: "success",
      })
    
    );
  };
useEffect(()=>{
    dispatch(getHeadPhoneList())
},[])
  return (
    <Container>
      <h2>Admin Head Phone List({headphones.length})</h2>
      <Button onClick={()=>navigate("/admin/headphones/add")} className={style.b3}>Add Head Phone Detail</Button>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Gürültü Önleme</TableCell>
              <TableCell>Bluetooth Versiyon</TableCell>
              <TableCell>Çift Telefon Destegi</TableCell>
              <TableCell>Kullanim Tipi</TableCell>
              <TableCell>Suya Tere Dayanikli</TableCell>
              <TableCell>Image 1</TableCell>
              <TableCell>Image 2</TableCell>
              <TableCell>Image 3</TableCell>
              <TableCell>Brand Id</TableCell>
              <TableCell>Color Id</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {headphones.map((headphone)=>(
               <TableRow>
               <TableCell>{headphone.headPhoneId}</TableCell>
               <TableCell>{headphone.gurultuOnleme}</TableCell>
               <TableCell>{headphone.bluetoothVersiyon}</TableCell>
               <TableCell>{headphone.ciftTelefonDestegi}</TableCell>
               <TableCell>{headphone.kullanimTipi}</TableCell>
               <TableCell>{headphone.suyaTereDayanikli}</TableCell>
               <TableCell>
                <img style={{width:100,height:100}} src={`${headphone.image1}`}></img>
               </TableCell>
               <TableCell>
                <img style={{width:100,height:100}} src={`${headphone.image2}`}></img>
               </TableCell>
               <TableCell>
                <img style={{width:100,height:100}} src={`${headphone.image3}`}></img>
               </TableCell>
               <TableCell>{headphone.brandId}</TableCell>
               <TableCell>{headphone.colorId}</TableCell>
              
             <TableCell><Button className={style.b1} onClick={()=>navigate(`/admin/headphones/update/${headphone.headPhoneId}`)}>Update</Button></TableCell>
             <TableCell><Button className={style.b2} onClick={()=>handleHeadPhoneDeleted(headphone.headPhoneId)}>Delete</Button></TableCell>
             </TableRow>
            ))}
          </Table>
        </TableBody>
      </TableContainer>
    </Container>
  );
}
