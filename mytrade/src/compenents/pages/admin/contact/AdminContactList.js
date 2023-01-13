import { Button, Container, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { openSnacbar } from '../../../../redux/actions/appActions'
import { deleteContact, getContactList } from '../../../../redux/actions/contactActions'

export default function AdminContactList() {
    const {contacts}=useSelector((state)=>state.contact)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleContactDeleted=(id)=>{
        dispatch(deleteContact(id));
        dispatch(openSnacbar({
            message:"Contact has been deleted",
            severity:"success"
        }))
    }
    useEffect(()=>{
        dispatch(getContactList())
    },[])
  return (
    <Container>
        <br></br>
        <h2 style={{textAlign:"center"}}>Admin Contact List({contacts.length})</h2>
        <br></br>
        <TableContainer>
<TableBody>
    <Table>
        <TableRow>
            <TableCell>Contact Id</TableCell>
            <TableCell>Contact Name</TableCell>
            <TableCell>Contact Mail</TableCell>
            <TableCell>Contact Subject</TableCell>
            <TableCell>Contact Message</TableCell>
            <TableCell>Delete</TableCell>
        </TableRow>
        {contacts.map((contac)=>(
          <TableRow>
            <TableCell>{contac.contactId}</TableCell>
            <TableCell>{contac.contactName}</TableCell>
            <TableCell>{contac.contactMail}</TableCell>
            <TableCell>{contac.contactSubject}</TableCell>
            <TableCell>{contac.contactMessage}</TableCell>
          <TableCell><Button style={{backgroundColor:"red",color:"black"}} onClick={()=>handleContactDeleted(contac.contactId)}>Delete</Button></TableCell>
          </TableRow>
        ))}
    </Table>
</TableBody>
        </TableContainer>
        <br></br>
        <br></br>
    </Container>
  )
}
