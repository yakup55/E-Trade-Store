import { Button, Container, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error404() {

  const navigate=useNavigate();

  return (
    <Container maxWidth="md">
      <Stack spacing={3}>
        <br></br>
        <h2 style={{textAlign:"center"}}>Aradığınız Sayfa Bulunamadı</h2>
        <Button onClick={()=>navigate("/")}>Anasayfaya Dön</Button>
      </Stack>
    </Container>
  )
}
