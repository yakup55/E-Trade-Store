import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React from 'react'

export default function ProductTable({productTable}) {
  return (
    <TableContainer>
      <Table>
        <TableBody>
            <TableRow>
                <TableCell>Cihaz Ağırlığı</TableCell>
                <TableCell>{productTable?.cihazAgirligi}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Ekran Boyutu</TableCell>
                <TableCell>{productTable?.ekranBoyutu}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Ekran Çözünürlüğü</TableCell>
                <TableCell>{productTable?.ekranCozunurlugu}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Ekran Yenileme Hızı</TableCell>
                <TableCell>{productTable?.ekranYenilemeHizi}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Bellek Hızı</TableCell>
                <TableCell>{productTable?.bellekHizi}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Ram</TableCell>
                <TableCell>{productTable?.ram}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Ram Tipi</TableCell>
                <TableCell>{productTable?.ramTipi}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>SDD Kapasitesi</TableCell>
                <TableCell>{productTable?.sddKapasite}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>İşlemci Nesli</TableCell>
                <TableCell>{productTable?.İslemciNesli}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>İşlemci Tipi</TableCell>
                <TableCell>{productTable?.İslemciTipi}</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  )
}
