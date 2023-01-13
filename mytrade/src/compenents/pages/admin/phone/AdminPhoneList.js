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
import { deletePhone, getPhoneList } from "../../../../redux/actions/phoneActions";
import style from "./phone.module.css";
export default function AdminPhoneList() {
  const { phones } = useSelector((state) => state.phone);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const handlePhoneDeleted = (id) => {
    dispacth(deletePhone(id));
    dispacth(
      openSnacbar({
        message: "has been deleted",
        severity: "success",
      })
     
    );
  };
  useEffect(()=>{
    dispacth(getPhoneList())
  },[])
  return (
    <Container>
      <h2>Admin Phone List({phones.length})</h2>
      <Button className={style.b3} onClick={()=>navigate("/admin/phones/add")}>Add Phone Detail</Button>
      <TableContainer>
        <TableBody>
          <Table>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Bluetooth</TableCell>
              <TableCell>Çift hat</TableCell>
              <TableCell>Dahili hafiza</TableCell>
              <TableCell>Kamera Çözünürlügü</TableCell>
              <TableCell>Pil Gücü</TableCell>
              <TableCell>Yüz Tanıma</TableCell>
              <TableCell>Parmak izi</TableCell>
              <TableCell>Image 1</TableCell>
              <TableCell>Image 2</TableCell>
              <TableCell>Image 3</TableCell>
              <TableCell>Color Id</TableCell>
              <TableCell>Brand Id</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
            {phones.map((phone) => (
              <TableRow>
                <TableCell>{phone.phoneId}</TableCell>
                <TableCell>{phone.bluetooth}</TableCell>
                <TableCell>{phone.cifthat}</TableCell>
                <TableCell>{phone.dahilihafiza}</TableCell>
                <TableCell>{phone.kameracözünürlügü}</TableCell>
                <TableCell>{phone.pilgücü}</TableCell>
                <TableCell>{phone.yüztanıma}</TableCell>
                <TableCell>{phone.parmakizi}</TableCell>

                <TableCell>
                  <img style={{width:100,height:100}} src={`${phone.image1}`}></img>
                </TableCell>
                
                <TableCell>
                  <img style={{width:100,height:100}} src={`${phone.image2}`}></img>
                </TableCell>
                
                <TableCell>
                  <img style={{width:100,height:100}} src={`${phone.image3}`}></img>
                </TableCell>
                
                <TableCell>{phone.colorId}</TableCell>
                <TableCell>{phone.brandId}</TableCell>
                <TableCell>
           
                  <Button
                    className={style.b1}
                    onClick={() =>
                      navigate(
                        `/admin/phones/update/${phone.phoneId}`
                      )
                    }
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                
                  <Button
                    className={style.b2}
                    onClick={() =>
                      handlePhoneDeleted(phone.phoneId)
                    }
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
