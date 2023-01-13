import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
export default function ProductWatchTable({productWatch}) {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Adım Sayar</TableCell>
                        <TableCell>{productWatch?.adımSayar}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>GPS</TableCell>
                        <TableCell>{productWatch?.gps}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Kalp Ritmi Ölçme</TableCell>
                        <TableCell>{productWatch?.kalpRitmiOlcme}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Kamera</TableCell>
                        <TableCell>{productWatch?.kamera}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Sesli Görüşme</TableCell>
                        <TableCell>{productWatch?.sesliGorusme}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Su Geçirme</TableCell>
                        <TableCell>{productWatch?.suGecirme}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Uyku Takibi</TableCell>
                        <TableCell>{productWatch?.uykuTakibi}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Uyumlu Marka</TableCell>
                        <TableCell>{productWatch?.uyumluMarka}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}
