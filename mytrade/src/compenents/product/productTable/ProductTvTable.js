import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React from 'react'

export default function ProductTvTable({productTvTable}) {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableBody>
                   <TableRow>
                    <TableCell>Dahili Uydu Alıcısı</TableCell>
                    <TableCell>{productTvTable?.dahiliUyduAlici}</TableCell>
                </TableRow>  
                   <TableRow>
                    <TableCell>Ekran Ebatı</TableCell>
                    <TableCell>{productTvTable?.ekranEbati}</TableCell>
                </TableRow>  
                   <TableRow>
                    <TableCell>Ekran Formatı</TableCell>
                    <TableCell>{productTvTable?.ekranFormati}</TableCell>
                </TableRow>  
                   <TableRow>
                    <TableCell>Wifi</TableCell>
                    <TableCell>{productTvTable?.wifi}</TableCell>
                </TableRow>  
                   <TableRow>
                    <TableCell>Pc Bağlantısı</TableCell>
                    <TableCell>{productTvTable?.pcBaglantisi}</TableCell>
                </TableRow>  
                   <TableRow>
                    <TableCell>HDMI Girişleri</TableCell>
                    <TableCell>{productTvTable?.hdmiGirisleri}</TableCell>
                </TableRow>  
                </TableBody>
               
            </Table>
        </TableContainer>
    </div>
  )
}
