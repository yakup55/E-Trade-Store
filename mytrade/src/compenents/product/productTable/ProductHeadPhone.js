import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React from 'react'

export default function ProductHeadPhone({productHeadPhone}) {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Gürültü Önleme</TableCell>
                        <TableCell>{productHeadPhone?.gurultuOnleme}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Bluetooth Versiyonu</TableCell>
                        <TableCell>{productHeadPhone?.bluetoothVersiyon}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Çift Telefon Destegi</TableCell>
                        <TableCell>{productHeadPhone?.ciftTelefonDestegi}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Kullanım Tipi</TableCell>
                        <TableCell>{productHeadPhone?.kullanimTipi}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Suya Tere Dayanıklılığı</TableCell>
                        <TableCell>{productHeadPhone?.suyaTereDayanikli}</TableCell>
                    </TableRow>
                   
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}
