import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React from 'react'

export default function ProductManWomenTable({productManWomen}) {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Ayakkabı Tipi</TableCell>
                        <TableCell>{productManWomen?.ayakkabiTipi}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Malzeme</TableCell>
                        <TableCell>{productManWomen?.malzeme}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Cinsiyet</TableCell>
                        <TableCell>{productManWomen?.cinsiyet}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Yaka Stili</TableCell>
                        <TableCell>{productManWomen?.yakaStili}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Tipi</TableCell>
                        <TableCell>{productManWomen?.tipi}</TableCell>
                    </TableRow>
                   
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}
