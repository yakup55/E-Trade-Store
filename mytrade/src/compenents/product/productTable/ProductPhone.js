import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React from 'react'

export default function ProductPhoneTable({productPhone}) {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Bluetooth Özelliği</TableCell>
                        <TableCell>{productPhone?.bluetooth}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Çift Hat</TableCell>
                        <TableCell>{productPhone?.cifthat}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Dahili Hafıza</TableCell>
                        <TableCell>{productPhone?.dahilihafiza}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Kamera Çözünürlüğü</TableCell>
                        <TableCell>{productPhone?.kameracözünürlügü}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Pil Gücü</TableCell>
                        <TableCell>{productPhone?.pilgücü}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Yüz Tanıma</TableCell>
                        <TableCell>{productPhone?.yüztanıma}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Parmak İzi</TableCell>
                        <TableCell>{productPhone?.parmakizi}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}
